export default function AudienceSection() {
  return (
    <section className="py-20 bg-background text-foreground border-t">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Influenceros passar dig som...
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left max-w-5xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold mb-2">...är ny influencer</h3>
            <p className="text-muted-foreground">
              Kom igång snabbt med pitchmallar, AI-hjälp och färdiga fakturor.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              ...driver ditt eget varumärke
            </h3>
            <p className="text-muted-foreground">
              Samla samarbeten, statistik och ekonomi på ett ställe.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              ...jobbar som agent eller manager
            </h3>
            <p className="text-muted-foreground">
              Hantera flera profiler och skapa pitchar åt dina kreatörer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
