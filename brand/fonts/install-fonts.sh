#!/usr/bin/env bash
# OPTIONAL — install the vendored brand fonts into the current user's font directory.
#
# You do NOT need this to render brand assets: brand/scripts/render-og.mjs uses
# fonts.conf to expose these files for a single command. Install only if you want
# the fonts available inside design tools when editing the SVG by hand.
#
# User-level only — never writes outside $HOME, never needs root.
set -euo pipefail

FONTS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST="${XDG_DATA_HOME:-$HOME/.local/share}/fonts/ethereumclassic"

mkdir -p "$DEST"
find "$FONTS_DIR" -name '*.ttf' -exec cp {} "$DEST/" \;

# The OFL requires the license to travel with the fonts. Name-spaced by family,
# since both files are called OFL.txt.
for fam in inter jetbrains-mono; do
  [ -f "$FONTS_DIR/$fam/OFL.txt" ] && cp "$FONTS_DIR/$fam/OFL.txt" "$DEST/OFL-$fam.txt"
done

fc-cache -f "$DEST" >/dev/null
echo "Installed to $DEST"
fc-list : family | tr ',' '\n' | sort -u | grep -ixE "inter variable|jetbrains mono" | sed 's/^/  /'
