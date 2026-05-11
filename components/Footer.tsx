import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-4 pb-6 px-4 flex flex-col items-center gap-2 border-t border-cream-dark mt-4">
      <nav className="flex items-center gap-4 text-xs font-body text-ink-faint">
        <Link
          href="/privacy"
          className="hover:text-ink transition-colors underline underline-offset-2"
        >
          개인정보 처리방침
        </Link>
        <span className="text-cream-dark select-none">|</span>
        <Link
          href="/terms"
          className="hover:text-ink transition-colors underline underline-offset-2"
        >
          이용약관
        </Link>
      </nav>
      <p className="text-xs font-body text-ink-faint/60 select-none">
        © 2026 Teachers Day. All rights reserved.
      </p>
    </footer>
  );
}