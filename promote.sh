#!/usr/bin/env bash
set -euo pipefail

choice="${1:-}"

case "$choice" in
  1|orbit|prototype-1|prototype-1-orbit-board)
    id="prototype-1-orbit-board"
    ;;
  2|sticker|prototype-2|prototype-2-sticker-wall)
    id="prototype-2-sticker-wall"
    ;;
  3|control|deck|prototype-3|prototype-3-control-deck)
    id="prototype-3-control-deck"
    ;;
  4|stars|constellation|prototype-4|prototype-4-constellation)
    id="prototype-4-constellation"
    ;;
  5|arcade|prototype-5|prototype-5-arcade-grid)
    id="prototype-5-arcade-grid"
    ;;
  *)
    echo "Usage: ./promote.sh <prototype>"
    echo
    echo "Options:"
    echo "  prototype-1-orbit-board"
    echo "  prototype-2-sticker-wall"
    echo "  prototype-3-control-deck"
    echo "  prototype-4-constellation"
    echo "  prototype-5-arcade-grid"
    exit 1
    ;;
esac

printf 'window.ACTIVE_WEBSITE_PROTOTYPE = "%s";\n' "$id" > active-prototype.js
echo "Promoted $id. Open index.html to see the selected landing page."
