# Jengala artwork patch

Copy these files into the project root, preserving folders.

Expected source images:
`data/artworks/artwork_1.png` through `data/artworks/artwork_13.png`

Then run:

`prepare_artworks.bat`

The script:
1. Converts the 13 PNG masters to optimized WebP files in `public/artworks`.
2. Keeps the original PNG masters untouched.
3. Runs `npm run build`.

The website uses:
- `data/artworks/index.ts` for public artwork metadata.
- `public/artworks/artwork-01.webp` ... `artwork-13.webp` for browser images.

The internal "Visual assessment" notes are intentionally NOT included in the public website data.
