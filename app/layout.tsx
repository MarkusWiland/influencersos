// app/layout.tsx (Root Layout)
import { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Influenceros',
  description: 'Allt-i-ett-verktyg för influencers',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="sv">
        <Script
          src="http://localhost:3002/script.js"
          data-site="F1A0r0b9Pp"
          defer
        />
        <body>
          <div className="min-h-screen bg-background text-foreground">
            <main className="flex-1">{children}</main>
            <Toaster position="top-right" />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
