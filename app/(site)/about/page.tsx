export const metadata = {
  title: 'Om oss | Influenceros',
  description:
    'Lär känna teamet bakom Influenceros – en plattform byggd för att hjälpa kreatörer växa professionellt.',
}

export default function AboutPage() {
  return (
    <section className="py-20 container px-6 mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Om Influenceros</h1>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Influenceros är byggt med ett enda mål: att göra det enklare för
        kreatörer att driva sitt varumärke professionellt. Vi tror på
        transparens, enkelhet och smarta verktyg som sparar tid och ökar din
        inkomst.
      </p>
      <p className="mt-4 text-muted-foreground">
        Plattformen är utvecklad i Sverige och följer GDPR till punkt och
        pricka. Vi jobbar ständigt med nya funktioner – baserat på feedback från
        riktiga influencers och kreatörer.
      </p>
    </section>
  )
}
