// app/actions/generatePitch.ts
"use server"

import { z } from 'zod'
import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'

const schema = z.object({
  name: z.string().min(1),
  niche: z.string().min(1),
  followers: z.coerce.number().min(1),
  platforms: z.array(z.string()).nonempty(),
  audience: z.string().min(1),
  brand: z.string().min(1),
  goal: z.string().min(1),
})

export async function generatePitch(formData: FormData) {
  const data = {
    name: formData.get('name'),
    niche: formData.get('niche'),
    followers: formData.get('followers'),
    platforms: formData.getAll('platforms'),
    audience: formData.get('audience'),
    brand: formData.get('brand'),
    goal: formData.get('goal'),
  }

  const parsed = schema.safeParse(data)
  if (!parsed.success) return { error: 'Ogiltiga fält' }

  const { name, niche, followers, platforms, audience, brand, goal } = parsed.data

  const systemPrompt = `
    Du är en expert på influencer marketing och copywriting. Du hjälper influencers att skriva professionella, personliga och övertygande pitchar till varumärken.
    Svara alltid på svenska. Skriv i ett trevligt men affärsmässigt tonläge.
    Returnera både pitchtext och kort presentation till media kit.
  `

  const userPrompt = `
    Jag heter ${name} och är en influencer inom ${niche}.
    Jag har ${followers} följare på ${platforms.join(', ')}.
    Min målgrupp är: ${audience}.
    Jag vill kontakta ${brand} för ett ${goal}-samarbete.

    Skriv:
    1. En pitch jag kan skicka som DM eller mail till varumärket
    2. En kort presentationstext jag kan använda i mitt media kit (max 3 meningar)
  `

  const result = await generateText({
    model: openai('gpt-4'),
    system: systemPrompt,
    prompt: userPrompt,
  })

  return { result: result.text }
}