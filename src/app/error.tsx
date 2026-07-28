"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="contact-page section-shell">
      <div className="contact-copy">
        <p className="eyebrow">Error</p>
        <h1>頁面暫時未能顯示。</h1>
        <p>你可以再試一次，或先返回首頁。</p>
        <div className="hero-actions">
          <button
            className="button button-primary"
            type="button"
            onClick={reset}
          >
            再試一次
          </button>
          <Link className="text-link" href="/">
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
}
