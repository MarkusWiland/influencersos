'use server'

import { z } from 'zod'
import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'

const schema = z.object({
  niche: z.string().min(1),
  platform: z.string().min(1),
  count: z.number().min(1).max(5),
})

export async function generateContentIdeas(formData: FormData) {
  const parsed = schema.safeParse({
    niche: formData.get('niche'),
    platform: formData.get('platform'),
    count: Number(formData.get('count')),
  })

  if (!parsed.success) {
    return { error: 'Ogiltiga fält' }
  }

  const { niche, platform, count } = parsed.data

  const systemPrompt = `
    Du är en expert på sociala medier och trendigt innehåll, specialiserad på att hjälpa influencers skapa engagerande content.
    Dina svar ska vara kreativa, kortfattade och plattformsanpassade.
    Du ska leverera varje idé med en idérubrik, caption och relaterade hashtags.
    Svara alltid på svenska. Anpassa tonen efter plattformen (t.ex. mer personligt på TikTok).
  `

  const userPrompt = `
    Jag är en influencer inom ${niche}, och jag vill skapa innehåll för ${platform}.
    Ge mig ${count} innehållsidéer.

    För varje idé vill jag ha:
    - En idé-titel
    - En caption som passar plattformen
    - En lista med hashtags

    Max ${count} idéer. Svara i numrerad lista, tydlig struktur.
  `

  const result = await generateText({
    model: openai('gpt-4'),
    system: systemPrompt,
    prompt: userPrompt,
  })

  return { result: result.text }
}
