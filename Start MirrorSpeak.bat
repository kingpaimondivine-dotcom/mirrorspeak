@echo off
setlocal
cd /d "%~dp0"

echo.
echo MirrorSpeak needs a tiny local website so the browser will allow the microphone.
echo This window is that local website. Leave it open while you use the app.
echo Close this window when you are done.
echo.

set PORT=8765
set URL=http://127.0.0.1:%PORT%/

where py >nul 2>nul && set PY=py && goto :serve
where python >nul 2>nul && set PY=python && goto :serve
where python3 >nul 2>nul && set PY=python3 && goto :serve

echo Python was not found on this PC.
echo.
echo Easier options:
echo   1. Install Python from https://www.python.org/downloads/
echo      On the installer, check "Add python.exe to PATH"
echo   2. Or install VS Code and the "Live Server" extension, then
echo      right-click index.html and choose "Open with Live Server"
echo.
pause
exit /b 1

:serve
echo Starting at %URL%
echo.
start "" "%URL%"
%PY% -m http.server %PORT%
if errorlevel 1 (
  echo.
  echo Could not start the local server. Is port %PORT% already in use?
  pause
)
