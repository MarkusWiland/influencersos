import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo + beskrivning */}
        <div>
          <h2 className="text-xl font-bold mb-2">Influenceros</h2>
          <p className="text-muted-foreground text-sm">
            Bygg ditt influencerföretag som ett proffs. Allt du behöver – samlat
            på ett ställe.
          </p>
        </div>

        {/* Navigering */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Navigering</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/features" className="hover:underline">
                Funktioner
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline">
                Priser
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                Om oss
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* Sociala medier */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Följ oss</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                TikTok
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Influenceros. Alla rättigheter förbehållna.
      </div>
    </footer>
  )
}
