'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { generateContentIdeas } from '@/app/actions/generateContent'

type FormValues = {
  niche: string
  platform: string
  count: number
}

export default function AiContentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const [result, setResult] = useState<string | null>(null)

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData()
    formData.append('niche', data.niche)
    formData.append('platform', data.platform)
    formData.append('count', data.count.toString())

    const res = await generateContentIdeas(formData)
    if (res.result) setResult(res.result)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label className="block mb-1 font-medium">Nisch</label>
        <input
          {...register('niche', { required: true })}
          placeholder="Ex: Mode, träning"
          className="w-full border rounded px-3 py-2"
        />
        {errors.niche && <span className="text-red-500 text-sm">Obligatoriskt</span>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Plattform</label>
        <input
          {...register('platform', { required: true })}
          placeholder="Ex: TikTok, Instagram"
          className="w-full border rounded px-3 py-2"
        />
        {errors.platform && <span className="text-red-500 text-sm">Obligatoriskt</span>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Antal idéer (max 5)</label>
        <input
          type="number"
          {...register('count', { required: true, min: 1, max: 5 })}
          defaultValue={3}
          className="w-full border rounded px-3 py-2"
        />
        {errors.count && (
          <span className="text-red-500 text-sm">Välj ett tal mellan 1 och 5</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-black text-white px-4 py-2 rounded hover:opacity-90"
      >
        {isSubmitting ? 'Genererar...' : 'Generera innehåll'}
      </button>

      {result && (
        <div className="whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm">
          {result}
        </div>
      )}
    </form>
  )
}
