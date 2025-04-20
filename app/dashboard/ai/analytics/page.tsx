// app/dashboard/analytics/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import { format, subDays, startOfDay, endOfDay } from 'date-fns'

import { Chart } from './_component/ai-chart'
import { prisma } from '@/utils/prisma'

export default async function AnalyticsPage() {
  const { userId } = await auth()
  if (!userId) return <div>Ej inloggad</div>

  // Datumintervall (senaste 7 dagar)
  const today = endOfDay(new Date())
  const startDate = startOfDay(subDays(today, 6))

  // Hämta klick-data från Prisma
  const recentClicks = await prisma.linkClick.findMany({
    where: {
      userId,
      createdAt: {
        gte: startDate,
        lte: today,
      },
    },
    orderBy: { createdAt: 'asc' },
  })

  const groupedByDate = recentClicks.reduce(
    (acc: Record<string, number>, click) => {
      const date = format(click.createdAt, 'yyyy-MM-dd')
      acc[date] = (acc[date] || 0) + 1
      return acc
    },
    {},
  )

  const chartData = Object.entries(groupedByDate).map(([date, count]) => ({
    name: date,
    value: count,
  }))

  const totalClicks = recentClicks.length

  const topLink = await prisma.linkClick.groupBy({
    by: ['link'],
    where: {
      userId,
      createdAt: {
        gte: startDate,
        lte: today,
      },
    },
    _count: { link: true },
    orderBy: { _count: { link: 'desc' } },
    take: 1,
  })

  const top = topLink?.[0]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href="/dashboard/links">Hantera länkar</Link>
          </Button>
        </div>
      </div>

      {/* Nyckeltal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Totala klick (7 dagar)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalClicks}</div>
            <p className="text-sm text-muted-foreground">Senaste veckan</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mest klickade länk</CardTitle>
          </CardHeader>
          <CardContent>
            {top ? (
              <>
                <p className="font-medium truncate">{top.link}</p>
                <p className="text-sm text-muted-foreground">
                  {top._count.link} klick
                </p>
              </>
            ) : (
              <p className="text-muted-foreground text-sm">Ingen data ännu</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI-insikt</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Din målgrupp verkar mest aktiv på kvällar och helger. Testa att
              posta mer då.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Klick per dag</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          {chartData.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
              <p className="text-sm mt-2">Ingen data ännu</p>
            </div>
          ) : (
            <Chart
              data={chartData}
              xAxis="name"
              yAxis="value"
              className="aspect-[16/9]"
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
