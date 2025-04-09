// app/dashboard/layout.tsx (Dashboard Layout)

import ReactQueryProvider from '@/providers/react-query-provider'
import { DashboardSidebar } from './_components/dashboard-sidebar'

import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  return (
    <ReactQueryProvider>
      <div className="min-h-screen flex flex-col">
        {/* Lägg till Header här */}
        <Header />

        <div className="flex flex-1">
          {/* Sidebar för dashboardn */}
          <DashboardSidebar />

          <main className="flex-1 p-6">{children}</main>
        </div>

        {/* Lägg till Footer här */}
        <Footer />
      </div>
    </ReactQueryProvider>
  )
}
