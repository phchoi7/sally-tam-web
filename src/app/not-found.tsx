import Link from "next/link";

export default function NotFound() {
  return (
    <div className="contact-page section-shell">
      <div className="contact-copy">
        <p className="eyebrow">404</p>
        <h1>找不到這個頁面。</h1>
        <p>頁面可能已被移動，請返回首頁或瀏覽教學案例。</p>
        <Link className="button button-primary" href="/">
          返回首頁
        </Link>
      </div>
    </div>
  );
}
