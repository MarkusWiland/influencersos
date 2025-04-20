'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
  RocketIcon,
  ClipboardCopyIcon,
  Trash2Icon,
  ArrowLeftIcon,
} from 'lucide-react'

interface AIPitch {
  id: string
  title: string
  content: string
  createdAt: string
}

async function fetchPitchById(id: string): Promise<AIPitch> {
  const res = await fetch(`/api/ai/pitch/${id}`)
  if (!res.ok) throw new Error('Kunde inte hämta pitch')
  return res.json()
}

async function deletePitch(id: string) {
  const res = await fetch(`/api/ai/pitch/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Kunde inte ta bort pitch')
  return true
}

export default function AIPitchDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const router = useRouter()
  const queryClient = useQueryClient()

  const { data: pitch, isLoading, isError } = useQuery<AIPitch>({
    queryKey: ['ai-pitch', params.id],
    queryFn: () => fetchPitchById(params.id),
  })

  const mutation = useMutation({
    mutationFn: deletePitch,
    onSuccess: () => {
      toast.success('Pitch borttagen')
      queryClient.invalidateQueries({ queryKey: ['ai-pitches'] })
      router.push('/dashboard/ai/history')
    },
    onError: () => {
      toast.error('Något gick fel vid borttagning')
    },
  })

  const copyToClipboard = async () => {
    if (!pitch) return
    await navigator.clipboard.writeText(pitch.content)
    toast.success('Pitch kopierad!')
  }

  if (isLoading) return <p className="p-6">Laddar pitch...</p>
  if (isError || !pitch)
    return <p className="p-6 text-red-500">Kunde inte hitta pitch.</p>

  return (
    <div className="p-6 max-w-3xl space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <RocketIcon className="text-pink-500 w-5 h-5" />
              <h1 className="text-xl font-bold">{pitch.title}</h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push('/dashboard/ai/history')}
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Skapad {new Date(pitch.createdAt).toLocaleDateString('sv-SE')}
          </p>
        </CardHeader>

        <CardContent className="whitespace-pre-wrap text-sm">
          {pitch.content}
        </CardContent>

        <CardFooter className="flex gap-2 justify-end">
          <Button variant="outline" onClick={copyToClipboard}>
            <ClipboardCopyIcon className="w-4 h-4 mr-2" />
            Kopiera
          </Button>
          <Button
            variant="destructive"
            onClick={() => mutation.mutate(pitch.id)}
          >
            <Trash2Icon className="w-4 h-4 mr-2" />
            Ta bort
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
