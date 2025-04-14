'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Link2,
  BarChart2,
  FileText,
  Brain,
  Home,
} from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const links = [
  { href: '/dashboard', label: 'Min Dashboard', icon: Home },
  { href: '/dashboard/profile', label: 'Min profil', icon: LayoutDashboard },
  { href: '/dashboard/links', label: 'Mina länkar', icon: Link2 },
  { href: '/dashboard/stats', label: 'Statistik', icon: BarChart2 },
  { href: '/dashboard/ai', label: 'AI-content', icon: Brain },
  { href: '/dashboard/invoices', label: 'Fakturor', icon: FileText },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { user } = useUser()

  return (
    <aside className="w-64 bg-muted p-6 space-y-6 hidden md:block border-r min-h-screen">
      {/* Profil */}
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback>{user?.firstName?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{user?.fullName || 'Användare'}</p>
          <p className="text-xs text-muted-foreground">
            {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              pathname === href
                ? 'bg-primary/10 text-primary font-medium'
                : 'hover:bg-muted-foreground/5 text-muted-foreground'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
