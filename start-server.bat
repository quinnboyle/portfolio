@echo off
echo Starting local web server...
echo.
echo Your portfolio will be available at:
echo http://localhost:8080
echo.
echo Press Ctrl+C to stop the server
echo.

cd /d "%~dp0"

REM Try npx http-server first
where npx >nul 2>nul
if %errorlevel% equ 0 (
    npx http-server -p 8080 -o
) else (
    REM Fallback: try python
    where python >nul 2>nul
    if %errorlevel% equ 0 (
        python -m http.server 8080
    ) else (
        echo ERROR: Neither Node.js nor Python found!
        echo.
        echo Please install Node.js from https://nodejs.org/
        echo OR
        echo Simply double-click index.html to open it in your browser
        pause
    )
)

