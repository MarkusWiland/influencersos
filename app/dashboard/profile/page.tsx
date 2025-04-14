import { prisma } from '@/utils/prisma'
import { redirect } from 'next/navigation'
import ProfileUpdateForm from './_components/profile-update-form'
import { requireUser } from '@/lib/requiredUser'

async function getUserData(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      clerkId: id,
    },
    select: {
      username: true,
      email: true,
      name: true,
      bio: true,
      avatarUrl: true,
      plan: true,
      role: true,
      companyName: true,
      companyOrgNr: true,
      companyVat: true,
      companyAddress: true,
    },
  })

  if (!user) {
    redirect('/')
  }
  return user
}

export default async function ProfilePage() {
  const userId = await requireUser()
  console.log("userId", userId)
  const userData = await getUserData(userId.userId)
  console.log("userData", userData)

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Min profil</h1>
      <ProfileUpdateForm user={userData} />
    </div>
  )
}
