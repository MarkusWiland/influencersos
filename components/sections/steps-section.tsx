export default function StepsSection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Kom igång i tre enkla steg
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-5xl font-bold mb-4 text-primary">1</div>
            <h3 className="text-xl font-semibold mb-2">Skapa ett konto</h3>
            <p className="text-muted-foreground">
              Registrera dig på några sekunder – helt gratis.
            </p>
          </div>
          <div>
            <div className="text-5xl font-bold mb-4 text-primary">2</div>
            <h3 className="text-xl font-semibold mb-2">
              Skapa din första pitch
            </h3>
            <p className="text-muted-foreground">
              Använd vårt AI-verktyg för att skriva ett proffsigt
              samarbetsförslag.
            </p>
          </div>
          <div>
            <div className="text-5xl font-bold mb-4 text-primary">3</div>
            <h3 className="text-xl font-semibold mb-2">
              Hantera och fakturera
            </h3>
            <p className="text-muted-foreground">
              Följ upp samarbeten och skicka fakturor direkt från plattformen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
