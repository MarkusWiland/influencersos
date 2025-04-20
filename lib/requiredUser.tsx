// lib/requiredUser.ts
import { prisma } from '@/utils/prisma'
import { auth } from '@clerk/nextjs/server'

export async function requireUser() {
  const { userId } = await auth()

  if (!userId) {
    throw new Error('Ej inloggad.')
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  })

  if (!user) {
    throw new Error('Användaren finns inte i databasen.')
  }

  return user // ✅ Returnera hela användaren
}
