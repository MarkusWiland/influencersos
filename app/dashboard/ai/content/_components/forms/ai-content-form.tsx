'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { generateContent } from '@/actions/ai-content'
import { ContentInput, contentSchema } from '@/schemas/action/ai-content-schema'

export default function AIContentForm({ user }: { user: any }) {
  const [result, setResult] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  const form = useForm<ContentInput>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      topic: '',
      audience: '',
      platform: '',
    },
  })

  const onSubmit = async (values: ContentInput) => {
    if (user.aiCredits <= 0) {
      toast.error('Du har inga krediter kvar.')
      return
    }

    setPending(true)
    setResult(null)
    const toastId = toast.loading('Genererar innehåll...')

    try {
      const res = await generateContent(values)
      toast.dismiss(toastId)

      if (res?.error) {
        toast.error(res.error)
      } else {
        setResult(res.result)
        toast.success('Innehåll genererat!')
      }
    } catch (err) {
      toast.dismiss(toastId)
      toast.error('Något gick fel.')
    } finally {
      setPending(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-background p-6 rounded-xl border"
      >
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vad vill du skapa content om?</FormLabel>
              <FormControl>
                <Input
                  placeholder="T.ex. hållbar mode, gymträning..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="audience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vilken är din målgrupp?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex: Kvinnor 25–35 i Sverige som gillar hudvård"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="platform"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plattform</FormLabel>
              <FormControl>
                <Input placeholder="Instagram, TikTok, YouTube..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={pending}>
          {pending ? 'Genererar...' : 'Generera content'}
        </Button>
      </form>

      {result && (
        <div className="bg-muted p-4 mt-6 rounded-lg whitespace-pre-wrap border">
          <h2 className="text-lg font-semibold mb-2">Resultat:</h2>
          {result}
        </div>
      )}
    </Form>
  )
}
