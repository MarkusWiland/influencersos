import { prisma } from '@/utils/prisma'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const { userId: clerkId } = await auth()

  if (!clerkId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { clerkId },
  })

  if (!user) {
    return new NextResponse('User not found', { status: 404 })
  }

  const pitches = await prisma.aIPitch.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
    },
  })

  return NextResponse.json(pitches)
}
