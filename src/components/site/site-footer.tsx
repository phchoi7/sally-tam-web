import { IconArrowUpRight as ArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">
          由教育現場出發，以資訊科技連結學習與實踐。
        </p>
        <a href="mailto:sallytlww@gmail.com">
          sallytlww@gmail.com <ArrowUpRight size={18} stroke={1.5} />
        </a>
      </div>
      <div className="footer-meta">
        <p>譚良蔚 Sally Tam</p>
        <p>ICT Education / STEAM / School-based Digital Education</p>
        <Link href="/privacy-policy">私隱政策</Link>
      </div>
    </footer>
  );
}
