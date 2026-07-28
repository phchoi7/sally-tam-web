import {
  IconArrowUpRight as ArrowUpRight,
  IconMail as Mail,
} from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡",
  description: "聯絡譚良蔚，交流課程設計、STEAM 教育及學生創科項目。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="contact-page section-shell">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h1>一起讓學習連結真實世界。</h1>
        <p>
          歡迎交流設計與科技、資訊科技、跨學科 STEAM
          課程、學生比賽指導及學習科技應用。
        </p>
      </div>
      <a className="contact-card" href="mailto:sallytlww@gmail.com">
        <Mail size={31} stroke={1.3} />
        <span>電郵</span>
        <strong>sallytlww@gmail.com</strong>
        <ArrowUpRight className="contact-arrow" size={32} stroke={1.3} />
      </a>
    </div>
  );
}
