import {
  Brain,
  FileText,
  BarChart2,
  UserSquare,
  LayoutDashboard,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Brain,
    title: 'AI-genererade pitchar',
    desc: 'Skapa proffsiga samarbetsförslag på sekunder med vår AI-modell.',
    extra:
      'Med ett klick kan du skapa skräddarsydda förslag till varumärken baserat på din nisch, stil och målgrupp.',
  },
  {
    icon: FileText,
    title: 'Fakturering',
    desc:
      'Skapa fakturor automatiskt med korrekta uppgifter – redo att skickas.',
    extra:
      'Du får svenska fakturamallar med moms och F-skatt. Vi skapar allt åt dig – du skickar bara!',
  },
  {
    icon: BarChart2,
    title: 'Statistik & uppföljning',
    desc:
      'Se öppningsfrekvens, respons och inkomst – få kontroll på resultatet.',
    extra:
      'Följ upp vilka pitchar som öppnas, när varumärken svarar och se intäkter i realtid.',
  },
  {
    icon: UserSquare,
    title: 'Media Kit',
    desc: 'Visa upp ditt varumärke med snygg, delbar profil och statistik.',
    extra:
      'Skapa en länkbar profil med highlights, målgruppsdata och tidigare samarbeten – perfekt att skicka till brands.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    desc: 'Hantera uppdrag, leads och pågående samarbeten på ett ställe.',
    extra:
      'Följ dina samarbeten steg för steg – från pitch till publicering och faktura.',
  },
]

export default function FeaturesPage() {
  return (
    <section className="py-20 container px-6 mx-auto max-w-6xl">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Vad kan du göra med Influenceros?
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => {
          return (
            <div
              key={f.title}
              className="bg-secondary text-secondary-foreground rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 ease-in-out"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <f.icon className="w-8 h-8 text-primary mb-4" />
                  <h2 className="text-xl font-semibold mb-1">{f.title}</h2>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Redo att ta nästa steg som influencer?
        </h2>
        <p className="text-muted-foreground mb-6">
          Kom igång gratis eller uppgradera när du är redo.
        </p>
        <Button className="bg-primary text-primary-foreground px-6 py-3 text-base rounded-lg">
          Skapa konto
        </Button>
      </div>
    </section>
  )
}
