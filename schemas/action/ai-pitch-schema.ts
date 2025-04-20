import { z } from 'zod'

export const pitchSchema = z.object({
  name: z.string().min(1, 'Namn krävs'),
  niche: z.string().min(1, 'Nisch krävs'),
  title: z.string().min(3, 'Title måste ha minst 3 tecken.'),
  followers: z.coerce.number().min(1, 'Följare måste vara minst 1'),
  platforms: z.string().array().nonempty('Minst en plattform krävs'),
  audience: z.string().min(1, 'Målgrupp krävs'),
  brand: z.string().min(1, 'Varumärke krävs'),
  goal: z.string().min(1, 'Typ av samarbete krävs'),
})

export type PitchInput = z.infer<typeof pitchSchema>
