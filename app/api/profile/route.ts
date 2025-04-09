// app/api/links/route.ts
import { prisma } from '@/utils/prisma'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import { z } from 'zod'

const linkSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
})

const updateSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  url: z.string().url().optional(),
})

export async function GET() {
  const { userId } = auth()
  if (!userId)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const links = await prisma.link.findMany({ where: { userId } })
  return NextResponse.json(links)
}

export async function POST(req: Request) {
  const { userId } = auth()
  if (!userId)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const parsed = linkSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const link = await prisma.link.create({
    data: {
      title: parsed.data.title,
      url: parsed.data.url,
      userId,
    },
  })

  return NextResponse.json({ success: true, data: link })
}

export async function PATCH(req: Request) {
  const { userId } = auth()
  if (!userId)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const parsed = updateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const updated = await prisma.link.update({
    where: { id: parsed.data.id, userId },
    data: parsed.data,
  })

  return NextResponse.json({ success: true, data: updated })
}

export async function DELETE(req: Request) {
  const { userId } = auth()
  if (!userId)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const { id } = z.object({ id: z.string() }).parse(body)

  await prisma.link.delete({ where: { id, userId } })

  return NextResponse.json({ success: true })
}
