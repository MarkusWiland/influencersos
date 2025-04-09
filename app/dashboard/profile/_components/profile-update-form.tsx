'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProfileFormData, profileSchema } from '@/schemas/profile'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { updateProfile } from '@/actions/update-profile-action'
import { toast } from 'sonner'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export type User = {
  name: string | null
  bio: string | null
  companyName: string | null
  companyOrgNr: string | null
  companyVat: string | null
  companyAddress: string | null
  username: string
  email: string
  avatarUrl: string | null
  plan: 'FREE' | 'PRO' | 'PREMIUM'
  role: 'USER' | 'ADMIN'
}

interface ProfileUpdateFormProps {
  user: User
}

export default function ProfileUpdateForm({ user }: ProfileUpdateFormProps) {
  const [pending, setPending] = useState(false)

  // Formulär med Zod och React Hook Form
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      bio: user?.bio || '',
      avatar: user?.avatarUrl || '',
      companyName: user?.companyName || '',
      companyOrgNr: user?.companyOrgNr || '',
      companyVat: user?.companyVat || '',
      companyAddress: user?.companyAddress || '',
    },
  })

  const { watch } = form

  // Real-time watch values
  const watchedValues = watch()

  const onSubmit = async (values: ProfileFormData) => {
    try {
      setPending(true)
      await updateProfile(values)
      toast.success('Profilen har uppdaterats!')
    } catch (error) {
      if (error instanceof Error && error.message !== 'NEXT_REDIRECT') {
        toast.error('Något gick fel. Försök igen.')
      }
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Redigera din profil</h1>

      {/* Layout med två kolumner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulär Sektion */}
        <div className="space-y-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fullt namn</FormLabel>
                      <FormControl>
                        <Input placeholder="Skriv ditt namn" {...field} />
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
                        <Textarea
                          placeholder="Skriv din bio"
                          {...field}
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profilbild URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Lägg till en URL för din profilbild"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Företagsinformation */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Företagsnamn</FormLabel>
                      <FormControl>
                        <Input placeholder="Företagets namn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyOrgNr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organisationsnummer</FormLabel>
                      <FormControl>
                        <Input placeholder="Organisationsnummer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyVat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Momsregistreringsnummer</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Momsregistreringsnummer"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Företagsadress</FormLabel>
                      <FormControl>
                        <Input placeholder="Adress" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" disabled={pending} className="w-full">
                {pending ? 'Sparar...' : 'Spara ändringar'}
              </Button>
            </form>
          </Form>
        </div>

        {/* Förhandsgranskning Sektion */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Förhandsgranskning</h2>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={watchedValues.avatar} />
              <AvatarFallback>{watchedValues.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{watchedValues.name}</h3>
              <p className="text-sm text-muted-foreground">
                {watchedValues.bio}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <p>
              <strong>Företagsnamn:</strong> {watchedValues.companyName}
            </p>
            <p>
              <strong>Organisationsnummer:</strong> {watchedValues.companyOrgNr}
            </p>
            <p>
              <strong>Momsregistreringsnummer:</strong>{' '}
              {watchedValues.companyVat}
            </p>
            <p>
              <strong>Adress:</strong> {watchedValues.companyAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
