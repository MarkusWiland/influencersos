import { prisma } from '@/utils/prisma'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import AIPitchPage from './_components/ai-pitch'

export default async function AIPage() {
  // Hämta användarsession från Clerk
  const session = await auth()
  console.log("session", session)
  // Om användaren inte är inloggad, omdirigera till inloggningssidan
  if (!session?.userId) {
    redirect('/')
  }

  // Hämta användardata från Prisma baserat på Clerk's userId
  const user = await prisma.user.findUnique({
    where: { clerkId: session.userId },
    select: {
      id: true,
      username: true,
      email: true,
      plan: true,
      aiCredits: true, // Krediter som kan användas för AI-pitchar
      name: true,
      bio: true,
      avatarUrl: true,
      companyName: true,
      companyOrgNr: true,
      companyVat: true,
      companyAddress: true,
    },
  })

  // Om användaren inte finns, omdirigera till startsidan
  if (!user) {
    redirect('/')
  }

  // Skicka användardata till klientkomponenten
  return <AIPitchPage user={user} />
}
