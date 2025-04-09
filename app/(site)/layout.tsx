// app/(site)/layout.tsx
import { ReactNode } from 'react'

import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

export const metadata = {
  title: 'Influenceros | Publika Sidor',
  description: 'Välkommen till Influenceros – din plattform för influencers.',
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
