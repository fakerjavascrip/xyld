export default function Logo({ title = "Logo" }: { title?: string }) {
  return (
    <svg
      className="logo"
      width="34"
      height="34"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id="g" x1="8" y1="6" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#0EA5E9" />
        </linearGradient>
        <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="rgba(0,0,0,.35)" />
        </filter>
      </defs>

      <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#g)" filter="url(#s)" />

      <path
        d="M15 31c7-2 10-10 18-12"
        stroke="rgba(255,255,255,.92)"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M18 16c1.2 3 4.4 5.8 8.2 7.2 4 1.5 8.2 1.2 12-1.2"
        stroke="rgba(255,255,255,.78)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="16.8" cy="30.2" r="2.2" fill="rgba(255,255,255,.92)" />
    </svg>
  );
}

