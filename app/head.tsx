// app/head.tsx
import Script from 'next/script'

export default function Head() {
  return (
    <>
      <title>Influenceros</title>
      <meta name="description" content="Allt-i-ett-verktyg för influencers" />
      <Script
        src="http://localhost:3002/script.js"
        data-site="Dcbh2DGcNb"
        defer
      />
    </>
  )
}
