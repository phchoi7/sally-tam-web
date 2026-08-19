import Link from "next/link";

const links = [
  { href: "/project", label: "實踐案例" },
  { href: "/about", label: "關於我" },
  { href: "/contact", label: "聯絡" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="譚良蔚 Sally Tam 首頁">
        <span>譚良蔚</span>
        <small>Sally Tam</small>
      </Link>
      <nav aria-label="主要導覽">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
