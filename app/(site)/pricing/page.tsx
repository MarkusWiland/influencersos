import { CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Prisplaner | Influenceros',
  description:
    'Välj en plan som passar din kreativa resa – börja gratis och väx i din egen takt.',
}

const features = [
  { label: 'AI-genererade pitchar', free: true, pro: true, agency: true },
  { label: 'Media Kit', free: false, pro: true, agency: true },
  { label: 'Samarbetsverktyg', free: true, pro: true, agency: true },
  { label: 'Fakturamallar', free: true, pro: true, agency: true },
  { label: 'Statistik & uppföljning', free: false, pro: true, agency: true },
  { label: 'Export till PDF/Excel', free: false, pro: false, agency: true },
  { label: 'Hantera flera profiler', free: false, pro: false, agency: true },
  { label: 'Premium support', free: false, pro: true, agency: true },
]

const sortedFeatures = [...features].sort((a, b) => {
  const aCount = [a.free, a.pro, a.agency].filter(Boolean).length
  const bCount = [b.free, b.pro, b.agency].filter(Boolean).length
  return bCount - aCount
})

export default function PricingPage() {
  return (
    <section className="py-20 container px-6 mx-auto max-w-6xl text-center">
      <h1 className="text-4xl font-bold mb-4">Prisplaner</h1>
      <p className="text-muted-foreground mb-12 text-lg">
        Börja gratis. Uppgradera när du växer – ingen bindningstid.
      </p>

      {/* Planer */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {/* Gratis */}
        <div className="flex flex-col justify-between border rounded-xl p-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Gratis</h2>
            <p className="text-muted-foreground mb-4">För nya kreatörer</p>
            <p className="text-3xl font-bold mb-4">0 kr/mån</p>
            <ul className="text-left text-sm space-y-2">
              <li>✅ AI-pitchar – skapa förslag med ett klick</li>
              <li>✅ 3 samarbeten/mån</li>
              <li>✅ 1 fakturamall</li>
            </ul>
          </div>
          <div className="mt-6">
            <Button className="w-full">Kom igång</Button>
            <p className="text-xs text-muted-foreground mt-2">
              Ingen bindningstid
            </p>
          </div>
        </div>

        {/* Pro */}
        <div className="relative border-2 border-primary rounded-xl p-6 bg-secondary flex flex-col justify-between">
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full shadow">
            Mest prisvärd
          </Badge>
          <div>
            <h2 className="text-xl font-semibold mb-2 mt-3">Pro</h2>
            <p className="text-muted-foreground mb-4">
              För växande influencers
            </p>
            <p className="text-3xl font-bold mb-4">199 kr/mån</p>
            <ul className="text-left text-sm space-y-2">
              <li>✅ Obegränsat med samarbeten</li>
              <li>✅ Media kit – visa ditt varumärke proffsigt</li>
              <li>✅ Statistik & support</li>
            </ul>
          </div>
          <div className="mt-6">
            <Button className="w-full bg-primary text-primary-foreground">
              Uppgradera
            </Button>
            <p className="text-xs text-green-600 mt-2">
              Populär – över 1200 influencers har valt Pro
            </p>
          </div>
        </div>

        {/* Agentur */}
        <div className="flex flex-col justify-between border rounded-xl p-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Agentur</h2>
            <p className="text-muted-foreground mb-4">För managers & team</p>
            <p className="text-3xl font-bold mb-4">Från 999 kr/mån</p>
            <ul className="text-left text-sm space-y-2">
              <li>✅ Hantera flera profiler</li>
              <li>✅ Delade pitchar mellan team</li>
              <li>✅ Export till PDF & Excel</li>
            </ul>
          </div>
          <div className="mt-6">
            <Button className="w-full">Kontakta oss</Button>
            <p className="text-xs text-muted-foreground mt-2">
              Vi skräddarsyr efter era behov
            </p>
          </div>
        </div>
      </div>

      {/* Funktionstabell */}
      <div className="overflow-x-auto text-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-4">Vad ingår</th>
              <th className="p-4 text-center">Gratis</th>
              <th className="p-4 text-center">Pro</th>
              <th className="p-4 text-center">Agentur</th>
            </tr>
          </thead>
          <tbody>
            {sortedFeatures.map((feature) => (
              <tr key={feature.label} className="border-b hover:bg-muted/50">
                <td className="p-4">{feature.label}</td>
                <td className="p-4 text-center">
                  {feature.free ? (
                    <CheckCircle className="text-green-500 w-5 h-5 mx-auto" />
                  ) : (
                    <XCircle className="text-gray-400 w-5 h-5 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.pro ? (
                    <CheckCircle className="text-green-500 w-5 h-5 mx-auto" />
                  ) : (
                    <XCircle className="text-gray-400 w-5 h-5 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.agency ? (
                    <CheckCircle className="text-green-500 w-5 h-5 mx-auto" />
                  ) : (
                    <XCircle className="text-gray-400 w-5 h-5 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Trygghetsruta */}
      <div className="mt-20 bg-muted rounded-xl p-6 max-w-2xl mx-auto text-left">
        <h3 className="text-lg font-semibold mb-2">100% nöjdhetsgaranti</h3>
        <p className="text-muted-foreground">
          Testa Influenceros Pro i 14 dagar. Är du inte nöjd får du pengarna
          tillbaka – inga frågor ställda.
        </p>
      </div>

      {/* Testimonials */}
      <div className="mt-20 text-left">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Vad våra användare säger
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background border rounded-xl p-4 shadow-sm">
            <p className="text-sm italic">
              ”Jag fick mitt första betalda samarbete tack vare Influenceros.”
            </p>
            <p className="mt-2 font-semibold">– @elin.creator</p>
          </div>
          <div className="bg-background border rounded-xl p-4 shadow-sm">
            <p className="text-sm italic">
              ”Pro-planen har betalat sig själv 10x om.”
            </p>
            <p className="mt-2 font-semibold">– @alex.style</p>
          </div>
          <div className="bg-background border rounded-xl p-4 shadow-sm">
            <p className="text-sm italic">
              ”Det har aldrig varit så enkelt att fakturera som influencer.”
            </p>
            <p className="mt-2 font-semibold">– @maria.inspo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
