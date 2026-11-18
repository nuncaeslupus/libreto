#!/usr/bin/env bash
# Join the intro, the screen sections in order and the end into ../walkthrough-d8.md,
# then write screens-d8.md (the document create_reader.py reads).
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
{ cat "$here/sections/_intro.md"; for f in $(ls "$here"/sections/s[0-9][0-9]-*.md | sort); do echo; cat "$f"; done; echo; cat "$here/sections/_end.md"; } > "$here/../walkthrough-d8.md"
python3 "$here/make-screens.py" "$here/../walkthrough-d8.md" 8
