from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'data' / 'artworks'
TARGET = ROOT / 'public' / 'artworks'

TARGET.mkdir(parents=True, exist_ok=True)

files = sorted(
    SOURCE.glob('artwork_*.png'),
    key=lambda path: int(path.stem.split('_')[1]),
)

if len(files) != 13:
    raise SystemExit(
        f'Expected 13 PNG artworks in {SOURCE}, found {len(files)}.'
    )

total_before = 0
total_after = 0

for source in files:
    number = int(source.stem.split('_')[1])
    target = TARGET / f'artwork-{number:02d}.webp'

    with Image.open(source) as image:
        image = image.convert('RGB')
        image.save(target, 'WEBP', quality=86, method=6)

    before = source.stat().st_size
    after = target.stat().st_size
    total_before += before
    total_after += after

    print(
        f'{source.name} -> {target.name} '
        f'({before / 1024 / 1024:.2f} MB -> {after / 1024 / 1024:.2f} MB)'
    )

print()
print(
    f'Total: {total_before / 1024 / 1024:.2f} MB '
    f'-> {total_after / 1024 / 1024:.2f} MB'
)
