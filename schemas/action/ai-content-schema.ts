import { z } from 'zod'

export const contentSchema = z.object({
  topic: z.string().min(2, 'Ämne krävs'),
  audience: z.string().min(2, 'Målgrupp krävs'),
  platform: z.string().min(2, 'Plattform krävs'),
})

export type ContentInput = z.infer<typeof contentSchema>
