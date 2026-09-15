@echo off
setlocal
cd /d "%~dp0"

echo.
echo ==========================================
echo   Preparing Jengala artwork images
echo ==========================================
echo.

py -c "import PIL" >nul 2>&1
if errorlevel 1 (
    echo Pillow is not installed. Installing it...
    py -m pip install pillow
    if errorlevel 1 (
        echo.
        echo ERROR: Could not install Pillow.
        pause
        exit /b 1
    )
)

py scripts\prepare_artworks.py
if errorlevel 1 (
    echo.
    echo ERROR: Artwork preparation failed.
    pause
    exit /b 1
)

echo.
echo Running production build...
call npm run build
if errorlevel 1 (
    echo.
    echo ERROR: Build failed.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   ARTWORK UPDATE READY
echo ==========================================
echo.
echo New web images are in public\artworks
echo.
pause
