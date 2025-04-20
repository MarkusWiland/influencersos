import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  RocketIcon,
  BarChartIcon,
  CreditCardIcon,
  LinkIcon,
  ActivityIcon,
  EyeIcon,
  GoalIcon,
  FileTextIcon,
  LineChartIcon,
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Hej wiland 👋</h1>
      <p className="text-muted-foreground">
        Välkommen tillbaka till din dashboard. Här kan du hantera dina länkar,
        fakturor, statistik och mer.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Standardkort */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <LinkIcon className="text-pink-500" />
              <h2 className="text-lg font-semibold">Snabbfakta</h2>
            </div>
            <p className="text-sm">
              Du har <b>4 aktiva länkar</b> och <b>0 obetald faktura</b>.
            </p>
            <Button variant="secondary" className="mt-4 w-full">
              Visa mer
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <RocketIcon className="text-pink-500" />
              <h2 className="text-lg font-semibold">AI-generator</h2>
            </div>
            <p className="text-sm">
              Skapa nytt pitch-förslag med AI.{' '}
              <span className="text-pink-600 font-medium">5 kredits kvar</span>
            </p>
            <Button className="mt-4 w-full">Starta AI</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <CreditCardIcon className="text-pink-500" />
              <h2 className="text-lg font-semibold">Kommande Uppgifter</h2>
            </div>
            <p className="text-sm">
              Nästa faktura ska betalas den <b>10:e nästa månad</b>.
            </p>
            <Button variant="secondary" className="mt-4 w-full">
              Visa faktura
            </Button>
          </CardContent>
        </Card>

        {/* Fakturor */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <CreditCardIcon className="text-pink-500" />
              <h2 className="text-lg font-semibold">Fakturor</h2>
            </div>
            <p className="text-sm">Hantera dina fakturor och betalningar.</p>
            <Button variant="secondary" className="mt-4 w-full">
              Visa fakturor
            </Button>
          </CardContent>
        </Card>

        {/* Länkar */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <LinkIcon className="text-pink-500" />
              <h2 className="text-lg font-semibold">Mina länkar</h2>
            </div>
            <p className="text-sm">
              Hantera och skapa länkar för ditt företag.
            </p>
            <Button variant="secondary" className="mt-4 w-full">
              Visa länkar
            </Button>
          </CardContent>
        </Card>

        {/* Statistik */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <BarChartIcon className="text-pink-500" />
              <h2 className="text-lg font-semibold">Statistik</h2>
            </div>
            <p className="text-sm">Följ dina prestationer och analyser.</p>
            <Button variant="secondary" className="mt-4 w-full">
              Visa statistik
            </Button>
          </CardContent>
        </Card>

        {/* Live visitors */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-3">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <EyeIcon className="text-pink-500" />
              <h2 className="text-lg font-semibold">Live besökare</h2>
            </div>
            <p className="text-sm">
              Just nu: <b>3 besökare</b> aktiva på dina länkar.
            </p>
          </CardContent>
        </Card>

        {/* AI-pitchar */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-3">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <RocketIcon className="text-pink-500" />
              <h2 className="text-lg font-semibold">Senaste AI-pitchar</h2>
            </div>
            <ul className="text-sm list-disc pl-6">
              <li>
                "Pitch till Nike om höstkampanj" –{' '}
                <span className="text-muted-foreground">
                  Skapad 2 dagar sedan
                </span>
              </li>
              <li>
                "Samarbete med Zalando för Reels" –{' '}
                <span className="text-muted-foreground">
                  Skapad 5 dagar sedan
                </span>
              </li>
            </ul>
            <Button variant="link" className="mt-2 px-0">
              Visa alla AI-pitchar
            </Button>
          </CardContent>
        </Card>

        {/* Mål denna vecka */}
        <Card className="col-span-1 sm:col-span-2">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <ActivityIcon className="text-pink-500" />
              <h2 className="text-lg font-semibold">Veckans mål</h2>
            </div>
            <ul className="text-sm list-disc pl-6">
              <li>✅ Skapa minst 3 nya länkar</li>
              <li>✅ Skicka minst 1 AI-pitch</li>
              <li>❌ Samla 100 klick totalt</li>
            </ul>
          </CardContent>
        </Card>

        {/* Senaste fakturor */}
        <Card className="col-span-1 sm:col-span-2">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <FileTextIcon className="text-pink-500" />
              <h2 className="text-lg font-semibold">Senaste fakturor</h2>
            </div>
            <ul className="text-sm list-disc pl-6">
              <li>
                Faktura #1043 – <b>Betald</b> – 250 kr – 12 april
              </li>
              <li>
                Faktura #1042 – <b>Betald</b> – 250 kr – 12 mars
              </li>
            </ul>
            <Button variant="link" className="mt-2 px-0">
              Visa alla fakturor
            </Button>
          </CardContent>
        </Card>

        {/* Sparklines / mini-chart */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-3">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <LineChartIcon className="text-pink-500" />
              <h2 className="text-lg font-semibold">Klick senaste 7 dagar</h2>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
