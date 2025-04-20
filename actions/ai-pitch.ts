'use server'

import { PitchInput, pitchSchema } from '@/schemas/action/ai-pitch-schema'
import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'
import { prisma } from '@/utils/prisma'
import { auth } from '@clerk/nextjs/server'

export async function generatePitch(data: PitchInput, id: string) {
  const { userId } = await auth()
  if (!userId) {
    return { error: 'Du måste vara inloggad' }
  }

  const parsed = pitchSchema.safeParse(data)
  if (!parsed.success) {
    const message = parsed.error.errors.map((e) => e.message).join(', ')
    return { error: `Ogiltiga fält: ${message}` }
  }

  const {
    name,
    niche,
    followers,
    platforms,
    audience,
    brand,
    goal,
  } = parsed.data

  const systemPrompt = `
Du är en expert på influencer marketing och copywriting.
Du hjälper influencers att skriva professionella, personliga och övertygande pitchar till varumärken.
Svara alltid på svenska. Använd ett trevligt men affärsmässigt tonläge.
Returnera både en pitchtext och en kort presentation till media kit.
  `.trim()

  const userPrompt = `
Jag heter ${name} och är en influencer inom ${niche}.
Jag har ${followers} följare på ${platforms.join(', ')}.
Min målgrupp är: ${audience}.
Jag vill kontakta ${brand} för ett ${goal}-samarbete.

Skriv:
1. En pitch jag kan skicka som DM eller mail till varumärket
2. En kort presentationstext jag kan använda i mitt media kit (max 3 meningar)
  `.trim()

  try {
    const result = await generateText({
      model: openai('gpt-4'),
      system: systemPrompt,
      prompt: userPrompt,
    })

    // ✅ Spara i Prisma
    const saved = await prisma.aIPitch.create({
      data: {
        userId: id,
        title: `Pitch till ${brand} (${goal})`,
        content: result.text,
      },
    })

    return { result: result.text, id: saved.id }
  } catch (err) {
    console.error('AI-generering misslyckades:', err)
    return { error: 'AI-generering misslyckades. Försök igen senare.' }
  }
}
