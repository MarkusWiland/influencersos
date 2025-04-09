'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { toast } from 'sonner'

type LinkItem = {
  title: string
  url: string
}

export default function DashboardLinks() {
  const { user } = useUser()
  const [links, setLinks] = useState<LinkItem[]>([])
  const { register, handleSubmit, reset } = useForm<LinkItem>()

  const onSubmit = (data: LinkItem) => {
    if (!data.title || !data.url) return toast.error('Fyll i alla fält')
    setLinks((prev) => [...prev, data])
    toast.success('Länk tillagd!')
    reset()
  }

  const publicUrl = `http://localhost:3000/${user?.username || user?.id}`

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Mina länkar</h1>
        <Button
          variant="outline"
          onClick={() => {
            navigator.clipboard.writeText(publicUrl)
            toast.success('Länk kopierad!')
          }}
        >
          Kopiera länk
        </Button>
      </div>

      <p className="text-muted-foreground text-sm">
        Din publika länk:{' '}
        <a href={publicUrl} target="_blank" className="underline">
          {publicUrl}
        </a>
      </p>

      {/* Ny länk */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <Label htmlFor="title">Titel</Label>
          <Input
            id="title"
            placeholder="Ex: Mitt senaste samarbete"
            {...register('title')}
          />
        </div>
        <div>
          <Label htmlFor="url">URL</Label>
          <Input id="url" placeholder="https://..." {...register('url')} />
        </div>
        <div className="md:col-span-2">
          <Button type="submit">Lägg till länk</Button>
        </div>
      </form>

      {/* Lista */}
      {links.length > 0 ? (
        <div className="space-y-4">
          {links.map((link, i) => (
            <Card
              key={i}
              className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <p className="font-medium">{link.title}</p>
                <a
                  href={link.url}
                  className="text-sm text-muted-foreground break-all"
                  target="_blank"
                >
                  {link.url}
                </a>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setLinks((prev) => prev.filter((_, index) => index !== i))
                }
              >
                Ta bort
              </Button>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">
          Du har inte lagt till några länkar än.
        </p>
      )}
    </div>
  )
}
