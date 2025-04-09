import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skydda alla API-rutter och specifika sidor
    '/(api|dashboard)(.*)',
  ],
}
