// Renders emoji country flags as Twemoji SVG images.
// Emoji regional indicator sequences don't render on Windows (Segoe UI Emoji
// intentionally omits them). Twemoji works on all OS/browser combinations.

const TWEMOJI = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg'

const FLAG_MAP: Record<string, string> = {
  '🇺🇸': '1f1fa-1f1f8', // US
  '🇪🇺': '1f1ea-1f1fa', // EU
  '🇯🇵': '1f1ef-1f1f5', // JP
  '🇬🇧': '1f1ec-1f1e7', // GB
  '🇦🇺': '1f1e6-1f1fa', // AU
  '🇰🇷': '1f1f0-1f1f7', // KR
  '🇸🇬': '1f1f8-1f1ec', // SG
  '🇮🇳': '1f1ee-1f1f3', // IN
  '🇧🇷': '1f1e7-1f1f7', // BR
  '🇹🇷': '1f1f9-1f1f7', // TR
  '🇦🇪': '1f1e6-1f1ea', // AE
  '🇨🇦': '1f1e8-1f1e6', // CA
  '🇭🇰': '1f1ed-1f1f0', // HK
  '🇨🇭': '1f1e8-1f1ed', // CH
  '🇿🇦': '1f1ff-1f1e6', // ZA
}

interface FlagImgProps {
  emoji: string
  size?: number
  className?: string
}

export function FlagImg({ emoji, size = 20, className = '' }: FlagImgProps) {
  const code = FLAG_MAP[emoji]
  if (!code) return <span aria-hidden="true">{emoji}</span>
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${TWEMOJI}/${code}.svg`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`shrink-0 ${className}`.trim()}
    />
  )
}
