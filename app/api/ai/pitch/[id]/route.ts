import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { userId: clerkId } = await auth()

  if (!clerkId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  // Hämta intern User baserat på Clerk-ID
  const user = await prisma.user.findUnique({
    where: { clerkId },
  })

  if (!user) {
    return new NextResponse('User not found', { status: 404 })
  }

  // Hämta AI-pitch som tillhör den användaren
  const pitch = await prisma.aIPitch.findFirst({
    where: {
      id: params.id,
      userId: user.id,
    },
  })

  if (!pitch) {
    return new NextResponse('Pitch not found', { status: 404 })
  }

  return NextResponse.json(pitch)
}
