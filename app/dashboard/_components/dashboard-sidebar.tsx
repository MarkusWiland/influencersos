'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import {
  Home,
  LayoutDashboard,
  Link2,
  BarChart2,
  FileText,
  Brain,
  ChevronRight,
  History,
  Briefcase,
  BadgeHelp,
  Settings2,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'

export function DashboardSidebar() {
  const pathname = usePathname()
  const { user } = useUser()

  const linkClass = (href: string) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
      pathname === href
        ? 'bg-primary/10 text-primary font-medium'
        : 'hover:bg-muted-foreground/5 text-muted-foreground'
    }`

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
      <nav className="space-y-2 text-sm">
        <Link href="/dashboard" className={linkClass('/dashboard')}>
          <Home className="w-4 h-4" />
          Min Dashboard
        </Link>

        <Link
          href="/dashboard/profile"
          className={linkClass('/dashboard/profile')}
        >
          <LayoutDashboard className="w-4 h-4" />
          Min profil
        </Link>

        <Link href="/dashboard/links" className={linkClass('/dashboard/links')}>
          <Link2 className="w-4 h-4" />
          Mina länkar
        </Link>

        <Link href="/dashboard/stats" className={linkClass('/dashboard/stats')}>
          <BarChart2 className="w-4 h-4" />
          Statistik
        </Link>

        {/* AI-verktyg med Collapsible */}
        <Collapsible defaultOpen={pathname.startsWith('/dashboard/ai')}>
          <CollapsibleTrigger asChild>
            <button className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-muted-foreground hover:bg-muted-foreground/5 transition">
              <Brain className="w-4 h-4" />
              AI-verktyg
              <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
            </button>
          </CollapsibleTrigger>

          <CollapsibleContent className="pl-6 mt-1 space-y-1">
            <Link
              href="/dashboard/ai/pitch"
              className={linkClass('/dashboard/ai/pitch')}
            >
              AI-pitch
            </Link>
            <Link
              href="/dashboard/ai/content"
              className={linkClass('/dashboard/ai/content')}
            >
              AI-content
            </Link>
            <Link
              href="/dashboard/ai/analytics"
              className={linkClass('/dashboard/ai/analytics')}
            >
              AI-analys
            </Link>
            <Link
              href="/dashboard/ai/history"
              className={linkClass('/dashboard/ai/history')}
            >
              Tidigare pitchar
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <Link
          href="/dashboard/campaigns"
          className={linkClass('/dashboard/campaigns')}
        >
          <Briefcase className="w-4 h-4" />
          Kampanjer
        </Link>

        <Link
          href="/dashboard/media-kit"
          className={linkClass('/dashboard/media-kit')}
        >
          <BadgeHelp className="w-4 h-4" />
          Media Kit
        </Link>

        <Link
          href="/dashboard/invoices"
          className={linkClass('/dashboard/invoices')}
        >
          <FileText className="w-4 h-4" />
          Fakturor
        </Link>

        <Link
          href="/dashboard/settings"
          className={linkClass('/dashboard/settings')}
        >
          <Settings2 className="w-4 h-4" />
          Inställningar
        </Link>
      </nav>
    </aside>
  )
}
