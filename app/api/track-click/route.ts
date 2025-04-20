// app/api/track-click/route.ts
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'

export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) {
    return new Response('Not authorized', { status: 401 })
  }

  const { link } = await req.json()

  if (!link || typeof link !== 'string') {
    return new Response('Invalid link', { status: 400 })
  }

  await prisma.linkClick.create({
    data: {
      userId,
      link,
    },
  })

  return new Response('Klick loggat', { status: 200 })
}
