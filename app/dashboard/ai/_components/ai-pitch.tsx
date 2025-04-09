// app/dashboard/ai-pitch/page.tsx (Client component)
'use client'

import React, { useState } from 'react'
import { toast } from 'sonner'
// Import the server action
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { generatePitchAndUpdateCredits } from '@/actions/ai-pitch'

export default function AIPitchPage({ user }: { user: any }) {
  const [selectedTopic, setSelectedTopic] = useState<string>('general')
  const [userPrompt, setUserPrompt] = useState<string>('')
  const [generatedPitch, setGeneratedPitch] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleGeneratePitch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (user.credits <= 0) {
      toast.error('Du har inga krediter kvar. Vänligen köp fler.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Call the server action to generate pitch and update credits
      const generated = await generatePitchAndUpdateCredits(
        user.id,
        selectedTopic,
        userPrompt,
      )
      setGeneratedPitch(generated)
    } catch (err) {
      setError(
        'Något gick fel vid genereringen av pitchen. Försök igen senare.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Generera din AI-pitch</h1>

      {/* Visa krediter */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Dina krediter</h2>
        <p className="text-sm text-muted-foreground">
          Du har {user.credits} krediter kvar.
        </p>
      </div>

      {/* Formulär för att skapa pitch */}
      <form onSubmit={handleGeneratePitch} className="space-y-6">
        <div>
          <Label htmlFor="topic" className="block text-lg font-semibold">
            Välj ett ämne
          </Label>
          <Select value={selectedTopic} onValueChange={setSelectedTopic}>
            <SelectTrigger className="w-full border rounded-md p-2">
              <SelectValue placeholder="Välj ett ämne" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Ämnen</SelectLabel>
                <SelectItem value="fashion">Mode</SelectItem>
                <SelectItem value="beauty">Skönhet</SelectItem>
                <SelectItem value="tech">Teknik</SelectItem>
                <SelectItem value="health">Hälsa</SelectItem>
                <SelectItem value="general">Allmänt</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="userPrompt" className="block text-lg font-semibold">
            Anpassad pitch (valfritt)
          </label>
          <Textarea
            id="userPrompt"
            className="border rounded-md p-2 w-full"
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            placeholder="Skriv din egen pitch här..."
            rows={3}
          />
        </div>

        <div className="flex justify-center gap-6">
          <Button
            type="submit"
            className="w-full"
            disabled={loading || user.credits <= 0}
          >
            {loading ? 'Skapar pitch...' : 'Skapa pitch'}
          </Button>
        </div>
      </form>

      {/* Visar den genererade pitchen */}
      {generatedPitch && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Din Pitch:</h2>
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <p>{generatedPitch}</p>
          </div>
        </div>
      )}

      {/* Visar felmeddelande om något går fel */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
