import { Button } from '@/components/ui/button'

export default function PricingSection() {
  return (
    <section className="py-20 bg-background text-foreground border-t">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prisplaner för alla
        </h2>
        <p className="text-muted-foreground mb-12">
          Börja gratis. Uppgradera när du växer.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Gratis</h3>
            <p className="text-muted-foreground mb-4">
              Perfekt för dig som vill testa
            </p>
            <p className="text-3xl font-bold mb-4">0 kr/mån</p>
            <ul className="text-sm mb-6 space-y-2 text-left">
              <li>✅ AI-pitchar</li>
              <li>✅ 3 samarbeten / månad</li>
              <li>✅ 1 fakturamall</li>
            </ul>
            <Button className="w-full">Kom igång gratis</Button>
          </div>
          <div className="border-2 border-primary rounded-xl p-6 bg-secondary">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-muted-foreground mb-4">
              För den seriösa influencern
            </p>
            <p className="text-3xl font-bold mb-4">199 kr/mån</p>
            <ul className="text-sm mb-6 space-y-2 text-left">
              <li>✅ Obegränsat med samarbeten</li>
              <li>✅ Eget media kit</li>
              <li>✅ Automatisk fakturering</li>
            </ul>
            <Button className="w-full bg-primary text-primary-foreground hover:opacity-90">
              Uppgradera
            </Button>
          </div>
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Agentur</h3>
            <p className="text-muted-foreground mb-4">För team & managers</p>
            <p className="text-3xl font-bold mb-4">Från 999 kr/mån</p>
            <ul className="text-sm mb-6 space-y-2 text-left">
              <li>✅ Hantera flera kreatörer</li>
              <li>✅ Delade pitchar & mappar</li>
              <li>✅ Export till PDF & Excel</li>
            </ul>
            <Button className="w-full">Kontakta oss</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
