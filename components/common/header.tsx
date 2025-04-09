'use client'

import Link from 'next/link'
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-background sticky top-0 z-50">
      {/* Vänster: Logotyp */}
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Influenceros
        </Link>
      </div>

      {/* Mitten: Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <Link href="/features" className="hover:underline">
          Funktioner
        </Link>
        <Link href="/pricing" className="hover:underline">
          Priser
        </Link>
        <Link href="/about" className="hover:underline">
          Om oss
        </Link>
        <SignedIn>
          <Link href="/dashboard" className="hover:underline font-medium">
            Dashboard
          </Link>
        </SignedIn>
      </nav>

      {/* Höger: Auth */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <Button size="sm" variant="outline">
              Logga in
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  )
}
