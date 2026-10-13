const sitePins = [
  { x: 160, y: 170, path: 'M330 250 Q 250 120 160 170', delay: '0s' },
  { x: 175, y: 330, path: 'M330 250 Q 260 300 175 330', delay: '-.4s' },
  { x: 250, y: 420, path: 'M330 250 Q 290 380 250 420', delay: '-.8s' },
  { x: 300, y: 110, path: 'M330 250 Q 380 150 300 110', delay: '-1.2s' },
  { x: 400, y: 360, path: 'M330 250 Q 410 300 400 360', delay: '-.6s' },
]
const meridianDelays = ['0s', '-2.33s', '-4.67s', '-7s', '-9.33s', '-11.67s']
const stars = [
  { cx: 62, cy: 96, delay: '0s' },
  { cx: 488, cy: 70, delay: '-1s' },
  { cx: 500, cy: 470, delay: '-2s' },
  { cx: 40, cy: 430, delay: '-1.5s' },
]
const centerOrigin = { transformOrigin: '270px 270px' }
const selfOrigin = { transformBox: 'fill-box', transformOrigin: 'center' } as const

/** Animated globe: install sites around the country wired back to the home shop. */
export function Globe({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 540"
      role="img"
      aria-label="Animated globe showing sign projects connected back to the home shop"
      className={className ?? 'mx-auto block h-auto w-full max-w-[540px] drop-shadow-[0_0_60px_rgba(30,167,228,.28)]'}
    >
      <defs>
        <radialGradient id="gi-sphere" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#14365e" />
          <stop offset="60%" stopColor="#0a1a30" />
          <stop offset="100%" stopColor="#07101c" />
        </radialGradient>
        <linearGradient id="gi-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1ea7e4" />
          <stop offset="65%" stopColor="#4a5fc6" />
          <stop offset="100%" stopColor="#8e3f95" />
        </linearGradient>
        <clipPath id="gi-clip">
          <circle cx="270" cy="270" r="200" />
        </clipPath>
        <symbol id="gi-wrench" viewBox="0 0 24 24">
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="gi-home" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l9-7 9 7" />
            <path d="M5 10v10h14V10" />
            <path d="M10 20v-6h4v6" />
          </g>
        </symbol>
      </defs>

      <g className="animate-globe-orbit-reverse" style={centerOrigin} opacity=".5">
        <ellipse cx="270" cy="270" rx="262" ry="84" fill="none" stroke="#2c4a6b" strokeDasharray="2 6" transform="rotate(24 270 270)" />
      </g>

      <circle cx="270" cy="270" r="200" fill="url(#gi-sphere)" />

      <g clipPath="url(#gi-clip)" fill="none" stroke="#1ea7e4" strokeOpacity=".28">
        <ellipse cx="270" cy="270" rx="200" ry="34" />
        <ellipse cx="270" cy="200" rx="187" ry="30" />
        <ellipse cx="270" cy="340" rx="187" ry="30" />
        <ellipse cx="270" cy="135" rx="148" ry="22" />
        <ellipse cx="270" cy="405" rx="148" ry="22" />
        {meridianDelays.map((delay) => (
          <ellipse
            key={delay}
            className="animate-globe-meridian"
            style={{ ...selfOrigin, animationDelay: delay }}
            cx="270"
            cy="270"
            rx="200"
            ry="200"
          />
        ))}
      </g>

      <circle cx="270" cy="270" r="200" fill="none" stroke="url(#gi-rim)" strokeWidth="2.5" />

      <g fill="none" stroke="url(#gi-rim)" strokeWidth="1.6" strokeLinecap="round">
        {sitePins.map((pin) => (
          <path key={pin.path} className="animate-globe-dash" strokeDasharray="5 9" style={{ animationDelay: pin.delay }} d={pin.path} />
        ))}
      </g>

      <g>
        {sitePins.map((pin) => (
          <g key={`${pin.x}-${pin.y}`}>
            <circle cx={pin.x} cy={pin.y} r="12.5" fill="#0e1828" stroke="url(#gi-rim)" strokeWidth="2" />
            <use href="#gi-wrench" x={pin.x - 7} y={pin.y - 7} width="14" height="14" style={{ color: '#63c3f0' }} />
          </g>
        ))}
      </g>

      <g>
        <circle className="animate-globe-pulse" style={selfOrigin} cx="330" cy="250" r="18" fill="none" stroke="#b06cc8" strokeWidth="2" />
        <circle cx="330" cy="250" r="20" fill="#07101c" stroke="url(#gi-rim)" strokeWidth="3" />
        <use href="#gi-home" x="319" y="239" width="22" height="22" style={{ color: '#ffffff' }} />
      </g>

      <g className="animate-globe-orbit" style={centerOrigin}>
        <ellipse cx="270" cy="270" rx="245" ry="70" fill="none" stroke="url(#gi-rim)" strokeOpacity=".55" strokeWidth="1.2" transform="rotate(-18 270 270)" />
        <circle cx="515" cy="270" r="4" fill="#63c3f0" transform="rotate(-18 270 270)" />
      </g>

      <g fill="#cfeaf9">
        {stars.map((star) => (
          <circle key={star.cx} className="animate-twinkle" style={{ animationDelay: star.delay }} cx={star.cx} cy={star.cy} r="1.5" />
        ))}
      </g>

      <g fontFamily="Figtree Variable, sans-serif" fontSize="13" fontWeight="600">
        <rect x="356" y="237" width="96" height="26" rx="13" fill="#0e1828" stroke="#1f3552" />
        <text x="404" y="254.5" textAnchor="middle" fill="#e8f0f8">Home shop</text>
        <rect x="52" y="128" width="96" height="26" rx="13" fill="#0e1828" stroke="#1f3552" />
        <text x="100" y="145.5" textAnchor="middle" fill="#63c3f0">Your sites</text>
      </g>
    </svg>
  )
}
