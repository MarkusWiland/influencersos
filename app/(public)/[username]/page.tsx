import { notFound } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { prisma } from '@/utils/prisma'

export default async function PublicProfilePage({
  params,
}: {
  params: { clerkId: string }
}) {
  const { userId } = await auth()

  const user = await prisma.user.findUnique({
    where: { clerkId: params.clerkId },
    
  })

  if (!user) return notFound()

  const isOwner = userId === user.clerkId

  return (
    <main className="min-h-screen w-full px-6 py-16 bg-background text-foreground max-w-md mx-auto flex flex-col items-center">
      {/* Profil */}
      <div className="flex flex-col items-center text-center mb-10">
        <Avatar className="w-24 h-24 mb-4 shadow-md ring-2 ring-primary">
          <AvatarImage src={user.avatarUrl || undefined} />
          <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
        </Avatar>

        <h1 className="text-3xl font-bold tracking-tight">{user.name}</h1>
        <p className="text-muted-foreground text-sm max-w-md mt-2 leading-relaxed">
          {user.bio}
        </p>
      </div>

      {/* Länkar */}
      <section className="w-full max-w-md space-y-4">
        {user.links.map((link, i) => (
          <Card
            key={i}
            className="group relative overflow-hidden border border-primary/20 bg-muted/40 transition hover:shadow-md"
          >
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r" />
              <CardContent className="py-4 px-6 flex justify-between items-center">
                <div className="text-left">
                  <h3 className="text-base font-semibold group-hover:text-primary transition">
                    {link.title}
                  </h3>
                  <p className="text-xs text-muted-foreground break-all">
                    {link.url}
                  </p>
                </div>
                <span className="ml-4 text-muted-foreground hover:text-primary">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </CardContent>
            </Link>
          </Card>
        ))}
      </section>

      {/* CTA */}
      <div className="mt-16 text-center">
        {isOwner ? (
          <Button variant="default" className="text-sm px-6">
            Redigera min profil
          </Button>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-3">
              Intresserad av samarbete?
            </p>
            <Button variant="outline" className="text-sm px-6">
              Kontakta mig
            </Button>
          </>
        )}
      </div>
    </main>
  )
}
