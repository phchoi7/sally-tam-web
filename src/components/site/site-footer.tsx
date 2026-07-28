import { IconArrowUpRight as ArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">讓學生在設計、製作與反思中成長。</p>
        <a href="mailto:sallytlww@gmail.com">
          sallytlww@gmail.com <ArrowUpRight size={18} stroke={1.5} />
        </a>
      </div>
      <div className="footer-meta">
        <p>譚良蔚 Sally Tam</p>
        <p>設計與科技、資訊科技及 STEAM 教師</p>
        <Link href="/privacy-policy">私隱政策</Link>
      </div>
    </footer>
  );
}
