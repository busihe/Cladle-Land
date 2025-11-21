export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Circular emblem */}
          <circle cx="24" cy="24" r="23" stroke="#0A1E3F" strokeWidth="2" fill="none" />
          
          {/* Rising arc */}
          <path
            d="M 12 32 Q 24 12 36 32"
            stroke="#F2C94C"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Abstract C+L */}
          <path
            d="M 18 24 Q 16 18 20 16"
            stroke="#0A1E3F"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 26 16 L 26 28"
            stroke="#0A1E3F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Upward arrow */}
          <path
            d="M 24 14 L 21 17 M 24 14 L 27 17"
            stroke="#F2C94C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="tracking-tight" style={{ fontWeight: 700, fontSize: '1.25rem', lineHeight: 1, color: '#0A1E3F' }}>
          Cladle Land
        </span>
        <span className="tracking-wide" style={{ fontWeight: 400, fontSize: '0.75rem', lineHeight: 1, color: '#0A1E3F', opacity: 0.7 }}>
          ENTERPRISE
        </span>
      </div>
    </div>
  );
}
