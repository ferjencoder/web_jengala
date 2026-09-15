JENGALA BRAND + ARTIST COPY PATCH

Copy the contents of this ZIP into the root of web_jengala, preserving folders.

Changed:
- app/page.tsx
  - Header/footer use /jengala.svg instead of text-rendered "jengala".
  - Adds Daniel Jensen and Maria Ester Fragala to the intro, story and artist sections.
  - Updates EN/ES footer credits.

- app/globals.css
  - Adds responsive sizing for the real SVG brand logo.

- app/layout.tsx
  - Production metadataBase changed to https://www.jengala.ar
  - Adds canonical URL.
  - Adds Daniel Jensen and Maria Ester Fragala as authors/creator.
  - Adds approved favicon metadata.

- public/
  - favicon.ico
  - favicon.svg
  - favicon-32x32.png
  - apple-touch-icon.png
  - jengala.svg
  - jengala_icon_logo.svg

No changes are made to the printed QR slugs or artwork route structure.

After copying:
  npm run build

Then:
  git add -A
  git commit -m "feat: update Jengala branding, artist credits and favicon"
  git push origin main
