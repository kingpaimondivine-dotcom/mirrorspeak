# MirrorSpeak

Live forward + backward voice tool, plus a gym for learning **100% reversed** speech (sample-accurate waveform flip).

**Repository:** https://github.com/kingpaimondivine-dotcom/mirrorspeak

After GitHub Pages is on (Settings → Pages → Deploy from branch `main` / root), the live app is:

- Translator: https://kingpaimondivine-dotcom.github.io/mirrorspeak/
- Gym: https://kingpaimondivine-dotcom.github.io/mirrorspeak/trainer.html

That `https` address is what you send people. The microphone works there.

## Run it on your own computer

Do not double-click the HTML file. Browsers block the microphone on `file://`.

**Windows:** double-click `Start MirrorSpeak.bat` and leave that window open.  
**Mac:** double-click `Start-MirrorSpeak.command`.

Or from this folder:

```bash
python3 -m http.server 8765
```

Then open http://127.0.0.1:8765/

Chrome or Edge works best for live captions. Allow the microphone when asked.

## What it is / is not

It reverses real audio and can guess a phonetic mirror of captions. It is not a hidden-message decoder.

Ancient Greek uses reconstructed Classical Attic values. Ancient Egyptian uses classroom Egyptological readings — vowels are conventional, not recovered tapes.
