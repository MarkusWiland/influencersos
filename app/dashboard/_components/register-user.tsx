import { prisma } from '@/utils/prisma'
import { currentUser } from '@clerk/nextjs/server'

import { redirect } from 'next/navigation'

export async function RegisterUser() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in') // Omdirigera om användaren inte är inloggad
  }

  // Kontrollera om användaren finns i din Prisma-databas
  let dbUser = await prisma.user.findUnique({
    where: {
      clerkId: user.id, // Hämta användaren från databasen med ClerkID
    },
  })

  // Om användaren inte finns, skapa en ny användare med data från Clerk
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkId: user.id, // Sätt ClerkID
        email: user.emailAddresses[0].emailAddress,
        username: user.username || '', // Sätt användarnamn eller tomt om inte tillgängligt
        name: user.firstName || '', // Första namn
        avatarUrl: user.imageUrl || '', // Profilbild
        role: 'USER', // Standardroll
      },
    })
  }

  return dbUser // Returnera användaren (ny eller uppdaterad)
}
