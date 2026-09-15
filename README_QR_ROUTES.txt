JENGALA PRINTED QR ROUTES PATCH

Copy this patch into the root of web_jengala, preserving folders.

It creates:

app/artworks/[slug]/page.tsx
app/artworks/[slug]/ArtworkPage.module.css

No changes to data/artworks/index.ts are required.

The dynamic route is generated from the existing artwork data source and
generateStaticParams() explicitly builds every artwork slug.

Printed QR URLs covered:

https://www.jengala.ar/artworks/beneath-the-crust
https://www.jengala.ar/artworks/resonance
https://www.jengala.ar/artworks/coordinates-of-silence
https://www.jengala.ar/artworks/shelter
https://www.jengala.ar/artworks/vestiges
https://www.jengala.ar/artworks/city-pulse
https://www.jengala.ar/artworks/convergence
https://www.jengala.ar/artworks/toward-the-light
https://www.jengala.ar/artworks/suspended-structure
https://www.jengala.ar/artworks/urban-signal
https://www.jengala.ar/artworks/palimpsest
https://www.jengala.ar/artworks/city-of-traces
https://www.jengala.ar/artworks/distant-light

After copying:

npm run build

Then commit + push to main so Netlify publishes the route.

IMPORTANT:
Do not reprint the cards. Their current QR slugs match this patch exactly.
