// app/actions/ai-content.ts
'use server'

import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function generateContent({
  topic,
  audience,
  platform,
}: {
  topic: string
  audience: string
  platform: string
}) {
  try {
    const result = await generateText({
      model: openai('gpt-4'),
      system: `Du är en expert på content creation för sociala medier.`,
      prompt: `
Skapa ett förslag till sociala medier utifrån detta:
Ämne: ${topic}
Målgrupp: ${audience}
Plattform: ${platform}

Returnera:
1. En content-idé
2. En caption
3. 5 relevanta hashtags
På svenska, anpassat efter plattformen.
      `,
    })

    return { result: result.text }
  } catch (err) {
    return { error: 'AI-generering misslyckades.' }
  }
}
