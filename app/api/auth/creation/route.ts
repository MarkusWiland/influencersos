// app/api/registerOrUpdateUser/route.ts
import { currentUser } from '@clerk/nextjs/server'
import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = await currentUser()

  if (!user) {
    return new Response('User not logged in', { status: 401 })
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      clerkId: user.id, // ClerkID
    },
  })

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        username: user.username || '',
        name: user.firstName || '', // Första namn
        avatarUrl: user.imageUrl || '', // Profilbild
        role: 'USER', // Standardroll
      },
    })
  }

  return NextResponse.redirect('http://localhost:3000')
}
