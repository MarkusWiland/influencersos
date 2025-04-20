import { requireUser } from '@/lib/requiredUser'
import AIPitchForm from './_component/ai-pitch-form'

export default async function AIPitchPage() {
  const user = await requireUser() // T.ex. Clerk eller egen auth

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">AI-pitch</h1>
      <p className="text-muted-foreground">
        Skapa en övertygande pitch som du kan skicka till varumärken.
      </p>

      <AIPitchForm user={user} />
    </div>
  )
}
