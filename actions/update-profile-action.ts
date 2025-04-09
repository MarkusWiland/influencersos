// app/actions/profile/update-profile-action.ts
'use server'

import { ProfileFormData, profileSchema } from '@/schemas/profile'
import { prisma } from '@/utils/prisma'
import { auth } from '@clerk/nextjs/server'

export async function updateProfile(data: ProfileFormData) {
  const { userId } = await auth()
  if (!userId) throw new Error('Unauthorized')

  const parsed = profileSchema.safeParse(data)
  if (!parsed.success) throw new Error('Invalid input')

  const updated = await prisma.user.update({
    where: { id: userId },
    data: {
      name: parsed.data.name,
      bio: parsed.data.bio,
      avatarUrl: parsed.data.avatar,
    },
  })

  return { success: true, data: updated }
}
