// app/dashboard/page.tsx
import { prisma } from '@/utils/prisma' // Importera prisma-instansen
import { currentUser } from '@clerk/nextjs/server'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'

export default async function DashboardHome() {
  const user = await currentUser() // Hämta användardata från Clerk
  if (!user) {
    // Hantera om användaren inte är inloggad
    return <div>Inget användardata tillgängligt</div>
  }

  // Hämta användardata från Prisma
  const userData = await prisma.user.findUnique({
    where: {
      clerkId: user.id, // Förutsatt att du använder clerkId som referens i databasen
    },
    select: {
      username: true,
      email: true,
      aiCredits: true,
      pdfs: true,
      links: true,
      aiPitches: true,
      invoices: {
        where: { paid: false }, // Exempel: hämta obetalda fakturor
      },
    },
  })

  if (!userData) {
    // Hantera om användaren inte finns i databasen
    return <div>Ingen användardata hittades</div>
  }

  // Hämta antal aktiva länkar och obetalda fakturor

  const unpaidInvoices = userData.invoices.length

  return (
    <div className="space-y-8 px-6 py-8 bg-background">
      {/* Välkomstmeddelande */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-primary mb-4">
          Hej {userData.username} 👋
        </h1>
        <p className="text-lg text-muted-foreground">
          Välkommen tillbaka till din dashboard. Här kan du hantera dina länkar,
          fakturor, statistik och mer.
        </p>
      </div>

      {/* Snabbfakta & Sektioner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Snabbfakta */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Snabbfakta</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Du har aktiva länkar och {unpaidInvoices} obetald faktura.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Visa mer</Button>
          </CardFooter>
        </Card>

        {/* AI Generator */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div>AI-generator</div>
              <Badge>{userData.aiCredits} kredits kvar</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Skapa nytt pitch-förslag med AI.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Starta AI</Button>
          </CardFooter>
        </Card>

        {/* Kommande Uppgifter */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Kommande Uppgifter</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Nästa faktura ska betalas den 10:e nästa månad.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Visa faktura</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Snabblänkar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Länk till fakturor */}
        <Card className="shadow-lg text-center">
          <CardHeader>
            <CardTitle>Fakturor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Hantera dina fakturor och betalningar.
            </p>
            <Button className="w-full" variant="outline">
              Visa fakturor
            </Button>
          </CardContent>
        </Card>

        {/* Länk till länkar */}
        <Card className="shadow-lg text-center">
          <CardHeader>
            <CardTitle>Mina länkar</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Hantera och skapa länkar för ditt företag.
            </p>
            <Button className="w-full" variant="outline">
              Visa länkar
            </Button>
          </CardContent>
        </Card>

        {/* Länk till statistik */}
        <Card className="shadow-lg text-center">
          <CardHeader>
            <CardTitle>Statistik</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Följ dina prestationer och analyser.
            </p>
            <Button className="w-full" variant="outline">
              Visa statistik
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
