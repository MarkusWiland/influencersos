'use server'

import { prisma } from '@/utils/prisma' // Make sure this is set up
import { OpenAI } from 'openai'

// Initialize OpenAI instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

// Prompt templates (in Swedish)
const promptTemplates: Record<string, string> = {
  fashion:
    'Skapa ett övertygande affärsförslag för en ny mode-startup som fokuserar på hållbara kläder. Förslaget bör lyfta fram varumärkets unika försäljningspunkter, målgrupp och marknadstrender.',
  beauty:
    'Skriv ett övertygande förslag för ett skönhetsmärke som specialiserar sig på cruelty-free sminkprodukter. Fokusera på produktens fördelar, etiska standarder och den växande efterfrågan på hållbar skönhet.',
  tech:
    'Skapa ett affärsförslag för en ny tech-startup som lanserar en AI-driven SaaS-plattform för småföretag. Förslaget ska förklara plattformens unika funktioner, fördelar och potentiella påverkan på branschen.',
  health:
    'Skapa ett pitch för ett hälsa- och wellnessmärke som erbjuder personliga måltidsplaner och träningsrutiner. Lyft fram vikten av skräddarsydda planer och hur de bidrar till bättre allmänt välbefinnande.',
  general:
    'Skapa ett pitch för en affärsidé inom ett område du brinner för. Pitchen ska visa upp produkten, marknaden och problemet den löser.',
}

// Server action to generate AI pitch and update credits
export async function generatePitchAndUpdateCredits(
  userId: string,
  selectedTopic: string,
  userPrompt: string,
) {
  // Fetch user data
  const user = await prisma.user.findUnique({
    where: { id: userId },
  })

  if (!user) {
    throw new Error('Användaren hittades inte')
  }

  if (user.aiCredits <= 0) {
    throw new Error('Du har inte tillräckligt med krediter')
  }

  // Select the appropriate prompt based on the selected topic
  const selectedPrompt =
    promptTemplates[selectedTopic] || promptTemplates['general']
  const finalPrompt = userPrompt || selectedPrompt

  // Generate pitch using OpenAI
  const response = await openai.chat.completions.create({
    model: 'gpt-4o', // You can also use GPT-4 if you prefer
    messages: [
      {
        role: 'system',
        content:
          'Du är en expert på att generera affärspitchar. Skapa pitchar baserade på de angivna ämnena. Var kreativ och professionell. Skriv på svenska.',
      },
      {
        role: 'user',
        content: finalPrompt, // This is the user-provided prompt (could be a custom or predefined one)
      },
    ],
    temperature: 0.7,
    max_tokens: 1000,
  })

  const generatedPitch = response.choices[0].message.content

  // Deduct credits from the user
  await prisma.user.update({
    where: { id: userId },
    data: { aiCredits: user.aiCredits - 1 },
  })

  return generatedPitch
}
