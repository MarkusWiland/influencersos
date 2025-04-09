// app/(public)/layout.tsx
import { ReactNode } from 'react'
import '../globals.css'
export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">{children}</div>
  )
}
