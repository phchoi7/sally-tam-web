import { IconArrowUpRight as ArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">由教育問題定義，到可靠產品落地。</p>
        <a href="mailto:sallytlww@gmail.com">
          sallytlww@gmail.com <ArrowUpRight size={18} stroke={1.5} />
        </a>
      </div>
      <div className="footer-meta">
        <p>譚良蔚 Sally Tam × Christian Choi</p>
        <p>Education Technology Product Owner × Tech Consultant</p>
        <a href="https://christianchoi.com">christianchoi.com</a>
        <Link href="/privacy-policy">私隱政策</Link>
      </div>
    </footer>
  );
}
