'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-65px)] bg-background text-foreground py-16 flex flex-col items-center justify-center">
      <div className="container mx-auto flex md:flex-row items-center justify-between gap-12 px-6">
        {/* Vänster kolumn */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Bygg ditt influencerföretag som ett proffs
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            Skapa pitchar, hantera samarbeten och fakturera kunder – allt i en
            och samma plattform.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <Button className="bg-primary text-primary-foreground hover:opacity-90">
              Kom igång
            </Button>
            <Link
              href="#"
              className="text-muted-foreground hover:underline text-sm font-medium"
            >
              Se hur det funkar
            </Link>
          </div>
        </div>

        {/* Höger kolumn – illustration */}
        <div className="w-full md:w-[500px]">
          <img
            src="/hero-illustration.png"
            alt="Pitchverktyg för influencers"
            className="w-full max-w-md mx-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
