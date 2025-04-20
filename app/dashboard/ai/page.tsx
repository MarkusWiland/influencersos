import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AIHubPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">AI-verktyg</h2>
      <p className="text-muted-foreground">Välj vad du vill skapa med AI:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/dashboard/ai/pitch">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>AI-pitch</CardTitle>
            </CardHeader>
            <CardContent>
              Skapa en professionell pitch till varumärken baserat på din
              målgrupp.
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/ai/content">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>AI-content</CardTitle>
            </CardHeader>
            <CardContent>
              Generera captions, hashtags och inläggsidéer automatiskt.
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/ai/analytics">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>AI-analys</CardTitle>
            </CardHeader>
            <CardContent>
              Få AI-drivna insikter om vad som fungerar i ditt innehåll.
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
