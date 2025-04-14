'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { generatePitch } from '@/app/actions/generatePitch'

type FormValues = {
  name: string
  niche: string
  followers: number
  platforms: string[]
  audience: string
  brand: string
  goal: string
}

export default function PitchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const [result, setResult] = useState<string | null>(null)

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => formData.append(key, v))
      } else {
        formData.append(key, value.toString())
      }
    })

    const res = await generatePitch(formData)
    if (res.result) setResult(res.result)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl">
      <input {...register('name', { required: true })} placeholder="Namn" />
      <input {...register('niche', { required: true })} placeholder="Nisch" />
      <input
        type="number"
        {...register('followers', { required: true, min: 1 })}
        placeholder="Antal följare"
      />

      <fieldset>
        <legend>Plattformar</legend>
        <label>
          <input type
