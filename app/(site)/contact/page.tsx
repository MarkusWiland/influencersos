export const metadata = {
  title: 'Kontakta oss | Influenceros',
  description:
    'Har du frågor eller förslag? Kontakta teamet bakom Influenceros så hör vi av oss!',
}

export default function ContactPage() {
  return (
    <section className="py-20 container px-6 mx-auto max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Kontakta oss</h1>
      <p className="text-muted-foreground mb-8 text-lg">
        Fyll i formuläret nedan eller skicka ett mail till{' '}
        <a className="underline" href="mailto:kontakt@influenceros.se">
          kontakt@influenceros.se
        </a>
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Ditt namn"
          className="w-full px-4 py-3 border rounded-md bg-background"
        />
        <input
          type="email"
          placeholder="Din e-post"
          className="w-full px-4 py-3 border rounded-md bg-background"
        />
        <textarea
          rows={5}
          placeholder="Ditt meddelande"
          className="w-full px-4 py-3 border rounded-md bg-background"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md"
        >
          Skicka meddelande
        </button>
      </form>
    </section>
  )
}
