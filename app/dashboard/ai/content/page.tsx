import { requireUser } from '@/lib/requiredUser'
import AIContentForm from './_components/forms/ai-content-form'

export default async function AIContentPage() {
  const user = await requireUser()
  console.log('user', user)
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">AI-content</h1>
      <p className="text-muted-foreground">
        Få captions, hashtags och idéer med AI.
      </p>
      <AIContentForm user={user} />
    </div>
  )
}
