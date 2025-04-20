'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { z } from 'zod'

import { generatePitch } from '@/actions/ai-pitch'
import { Form } from '@/components/ui/form'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { PitchInput, pitchSchema } from '@/schemas/action/ai-pitch-schema'

const PLATFORM_OPTIONS = ['Instagram', 'TikTok', 'YouTube']

export default function AIPitchPage({ user }: { user: any }) {
  const [result, setResult] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  const form = useForm<PitchInput>({
    resolver: zodResolver(pitchSchema),
    defaultValues: {
      name: user.name || '',
      niche: '',
      followers: user.followers || 0,
      platforms: [],
      audience: '',
      brand: '',
      goal: '',
    },
  })

  const onSubmit = async (values: PitchInput) => {
    if (user.aiCredits <= 0) {
      toast.error('Du har inga krediter kvar.')
      return
    }

    setPending(true)
    setResult(null)

    const toastId = toast.loading('Genererar pitch...')

    try {
      const res = await generatePitch(values)
      toast.dismiss(toastId)

      if (res?.error) {
        toast.error(res.error)
      } else {
        setResult(res.result)
        toast.success('Pitch genererad!')
      }
    } catch (error) {
      console.error(error)
      toast.dismiss(toastId)
      toast.error('Något gick fel.')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Generera AI-pitch + media kit</h1>

      <p className="text-sm text-muted-foreground">
        Du har <span className="font-semibold">{user.aiCredits}</span> krediter
        kvar.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 bg-background p-6 rounded-xl border"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Namn</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="niche"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nisch</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="followers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Antal följare</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="platforms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Plattformar</FormLabel>
                <div className="flex flex-wrap gap-4">
                  {PLATFORM_OPTIONS.map((platform) => (
                    <label key={platform} className="flex items-center gap-2">
                      <Checkbox
                        checked={field.value.includes(platform)}
                        onCheckedChange={(checked) => {
                          const newValue = checked
                            ? [...field.value, platform]
                            : field.value.filter((p) => p !== platform)
                          field.onChange(newValue)
                        }}
                      />
                      {platform}
                    </label>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="audience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Målgrupp</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ex: Kvinnor 20–30 i Sverige..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Varumärke</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Typ av samarbete</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Välj samarbete" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="produkt">Produkt</SelectItem>
                    <SelectItem value="betalt">Betalt</SelectItem>
                    <SelectItem value="långsiktigt">Långsiktigt</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={pending}>
            {pending ? 'Genererar...' : 'Generera pitch'}
          </Button>
        </form>
      </Form>

      {result && (
        <div className="bg-muted p-4 rounded-lg whitespace-pre-wrap mt-6 border">
          <h2 className="text-lg font-semibold mb-2">Resultat:</h2>
          {result}
        </div>
      )}
    </div>
  )
}
