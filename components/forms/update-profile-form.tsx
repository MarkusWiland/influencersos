'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../ui/form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Button } from '../ui/button'
import { toast } from 'sonner'

import { Loader2 } from 'lucide-react'
import { revalidatePath } from 'next/cache'
import { updateProfile } from '@/actions/update-profile-action'
import { ProfileFormData, profileSchema } from '@/schemas/profile'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export default function UploadForm() {
  const [pending, setPending] = useState(false)

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      bio: '',
      avatar: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    const validated = profileSchema.safeParse(values)
    if (!validated.success) return

    setPending(true)
    const toastId = toast.loading('Uppdaterar profil...')

    try {
      const result = await updateProfile(validated.data)
      if (!result) {
        toast.error('Profil kunde inte uppdateras!')
        throw new Error('Du kunde inte uppdatera profilen...')
      }

      toast.success('Profil uppdaterad!')
      revalidatePath('/')
    } catch (error) {
      toast.dismiss(toastId)
      toast.error('Något gick fel. Försök igen.')
    } finally {
      toast.dismiss(toastId)
      setPending(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Namn</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ditt namn" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Kort beskrivning" rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profilbild (URL)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="https://..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={pending}
          className="flex items-center gap-2"
        >
          {pending && <Loader2 className="animate-spin h-4 w-4" />}
          {pending ? 'Uppdaterar profil...' : 'Spara'}
        </Button>
      </form>
    </Form>
  )
}
