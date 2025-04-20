'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { RocketIcon } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

interface AIPitch {
  id: string
  title: string
  createdAt: string
}

export default function AIPitchHistoryPage() {
  const { data, isLoading, isError } = useQuery<AIPitch[]>({
    queryKey: ['ai-pitches'],
    queryFn: async () => {
      const res = await fetch('/api/ai/pitch')
      if (!res.ok) throw new Error('Kunde inte hämta pitchar')
      return res.json()
    },
  })
  console.log('data', data)
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tidigare AI-pitchar</h1>
        <p className="text-muted-foreground">
          Här hittar du alla AI-genererade pitchar du har skapat.
        </p>
      </div>

      {isLoading && <p className="text-sm">Laddar pitchar...</p>}
      {isError && (
        <p className="text-sm text-red-500">Kunde inte hämta pitchar.</p>
      )}

      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((pitch) => (
            <Card key={pitch.id}>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <RocketIcon className="w-4 h-4 text-pink-500" />
                  <h2 className="text-lg font-semibold">{pitch.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Skapad:{' '}
                  {new Date(pitch.createdAt).toLocaleDateString('sv-SE')}
                </p>
                <Button variant="secondary" asChild className="w-full">
                  <Link href={`/dashboard/ai/history/${pitch.id}`}>
                    Visa pitch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
