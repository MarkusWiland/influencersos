export default function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Det här får du med Influenceros
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              AI-genererade pitchar
            </h3>
            <p className="text-muted-foreground">
              Skriv skräddarsydda förslag till varumärken på några sekunder.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Samarbetsverktyg</h3>
            <p className="text-muted-foreground">
              Håll koll på uppdrag, deadlines och kommunikation på ett ställe.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Fakturor & avtal</h3>
            <p className="text-muted-foreground">
              Skapa och skicka fakturor automatiskt, med stöd för moms och GDPR.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
