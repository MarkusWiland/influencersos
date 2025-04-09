import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})
// Definiera de bästa promptarna baserade på ämnet (på svenska)
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

export async function generatePitch(topic: string, userPrompt?: string) {
  // Välj den bästa prompten baserat på ämnet
  const selectedPrompt = promptTemplates[topic] || promptTemplates['general']

  // Om användaren har ett eget prompt, använd det istället
  const prompt = userPrompt || selectedPrompt

  // Säkerställ att prompt är en sträng, om inte, använd en default
  const finalPrompt = prompt ?? selectedPrompt

  try {
    // Anropa OpenAI API för att generera pitch
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // You can also use GPT-4 if you prefer
      messages: [
        {
          role: 'system',
          content:
            'You are an expert business pitch generator. You generate pitches based on the given topics. Be creative and professional.',
        },
        {
          role: 'user',
          content: finalPrompt, // This is the user-provided prompt (could be a custom or predefined one)
        },
      ],
    })

    // Returnera det genererade svaret
    return response.choices[0].message.content
  } catch (error) {
    console.error('Error generating pitch:', error)
    throw new Error('Failed to generate pitch')
  }
}
