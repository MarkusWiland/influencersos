import { z } from 'zod'

export const profileSchema = z.object({
  name: z.string().min(1, { message: 'Namn är obligatoriskt' }),
  bio: z.string().min(1, { message: 'Bio är obligatoriskt' }),
  avatar: z.string().url().optional(),
  companyName: z.string().min(1, { message: 'Företagsnamn är obligatoriskt' }),
  companyOrgNr: z
    .string()
    .min(1, { message: 'Organisationsnummer är obligatoriskt' }),
  companyVat: z.string().min(1, { message: 'VAT-nummer är obligatoriskt' }),
  companyAddress: z.string().min(1, { message: 'Adress är obligatorisk' }),
})

export type ProfileFormData = z.infer<typeof profileSchema>
