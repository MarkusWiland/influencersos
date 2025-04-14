'use client'

import React, { useState } from 'react'
import { toast } from 'sonner'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { generatePitch } from '@/actions/ai-pitch'

export default function AIPitchPage({ user }: { user: any }) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Form states
  const [name, setName] = useState(user.name || '')
  const [niche, setNiche] = useState('')
  const [followers, setFollowers] = useState(user.followers || 1000)
  const [platforms, setPlatforms] = useState<string[]>([])
  const [audience, setAudience] = useState('')
  const [brand, setBrand] = useState('')
  const [goal, setGoal] = useState('')

  const togglePlatform = (platform: string) => {
    setPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    )
  }

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault()

    if (user.credits <= 0) {
      toast.error('Du har inga krediter kvar. Vänligen köp fler.')
      return
    }

    if (!name || !niche || !followers || !platforms.length || !audience || !brand || !goal) {
      toast.error('Vänligen fyll i alla fält.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('niche', niche)
      formData.append('followers', followers.toString())
      platforms.forEach((p) => formData.append('platforms', p))
      formData.append('audience', audience)
      formData.append('brand', brand)
      formData.append('goal', goal)

      const res = await generatePitch(formData)

      if (res?.result) {
        setResult(res.result)
      } else {
        throw new Error('Ingen pitch genererades.')
      }
    } catch (err) {
      setError('Något gick fel. Försök igen.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Generera AI-pitch + media kit</h1>

      <form onSubmit={handleGenerate} className="space-y-6">
        <div>
          <Label>Namn</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div>
          <Label>Nisch</Label>
          <Input value={niche} onChange={(e) => setNiche(e.target.value)} required />
        </div>

        <div>
          <Label>Antal följare</Label>
          <Input
            type="number"
            value={followers}
            onChange={(e) => setFollowers(Number(e.target.value))}
            required
          />
        </div>

        <div>
          <Label>Plattformar</Label>
          <div className="flex gap-4">
            {['Instagram', 'TikTok', 'YouTube'].map((platform) => (
              <label key={platform} className="flex items-center gap-2">
                <Checkbox
                  checked={platforms.includes(platform)}
                  onCheckedChange={() => togglePlatform(platform)}
                />
                {platform}
              </label>
            ))}
          </div>
        </div>

        <div>
          <Label>Målgrupp</Label>
          <Textarea
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="Ex: Kvinnor 20–30 i Sverige som är intresserade av hudvård"
            required
          />
        </div>

        <div>
          <Label>Varumärke du vill pitcha till</Label>
          <Input value={brand} onChange={(e) => setBrand(e.target.value)} required />
        </div>

        <div>
          <Label>Typ av samarbete</Label>
          <Select value={goal} onValueChange={setGoal}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Välj typ av samarbete" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Samarbetstyper</SelectLabel>
                <SelectItem value="produkt">Produkt</SelectItem>
                <SelectItem value="betalt">Betalt</SelectItem>
                <SelectItem value="långsiktigt">Långsiktigt</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" disabled={loading || user.credits <= 0}>
          {loading ? 'Genererar...' : 'Generera pitch'}
        </Button>
      </form>

      {result && (
        <div className="bg-muted p-4 rounded-lg whitespace-pre-wrap mt-6 border">
          <h2 className="text-lg font-semibold mb-2">Resultat:</h2>
          {result}
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
