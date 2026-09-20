#!/bin/bash
cd "$(dirname "$0")"
PORT=8765
URL="http://127.0.0.1:${PORT}/"
echo
echo "MirrorSpeak needs a tiny local website so the browser will allow the microphone."
echo "Leave this window open while you use the app. Close it when you are done."
echo
if command -v python3 >/dev/null 2>&1; then
  PY=python3
elif command -v python >/dev/null 2>&1; then
  PY=python
else
  echo "Python was not found. Install it from https://www.python.org/downloads/ or use VS Code Live Server."
  read -r _
  exit 1
fi
echo "Starting $URL"
(sleep 1; open "$URL" 2>/dev/null || xdg-open "$URL" 2>/dev/null || true) &
"$PY" -m http.server "$PORT"
