@echo off
echo ========================================
echo   Quinn Boyle Portfolio - Web Server
echo ========================================
echo.
echo Starting web server on http://localhost:8080
echo.
echo Your portfolio will automatically open in your browser.
echo Press Ctrl+C to stop the server when you're done.
echo.
echo ========================================
echo.

cd /d "%~dp0"

REM Start the server
npx live-server --port=8080 --open=/index.html

