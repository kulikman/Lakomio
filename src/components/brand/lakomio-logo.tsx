import Link from "next/link";

interface LakomioLogoProps {
  compact?: boolean;
  className?: string;
}

export function LakomioMark({ className = "size-9" }: { className?: string }): React.ReactElement {
  return (
    <svg className={className} viewBox="0 0 64 76" role="img" aria-label="Lakomio">
      <path
        d="M32 2C15.4 2 2 15.3 2 31.8c0 19.8 21.3 36.8 27.7 41.5a3.8 3.8 0 0 0 4.6 0C40.7 68.6 62 51.6 62 31.8 62 15.3 48.6 2 32 2Z"
        fill="currentColor"
      />
      <path d="M14 38c6-9 13-11 21-17 4-3 5-7 3-11 10 4 13 12 7 19-7 8-20 5-31 15Z" fill="#FFF4E4" />
      <path d="M14 49c10-7 21-2 31-5 5-2 8-5 10-9 1 13-7 23-23 23-9 0-15-3-18-9Z" fill="#B93A4B" />
      <circle cx="44" cy="18" r="5" fill="#C8894B" />
    </svg>
  );
}

export function LakomioLogo({ compact = false, className = "" }: LakomioLogoProps): React.ReactElement {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 text-[#3A211B] ${className}`}>
      <LakomioMark />
      {compact ? null : <span className="text-2xl font-extrabold tracking-[-0.05em]">lakomio</span>}
    </Link>
  );
}

