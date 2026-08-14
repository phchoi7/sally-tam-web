import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "私隱政策",
  description:
    "了解 sally-tam.com 如何使用 Vercel 網站分析及速度數據，以及處理訪客主動提供的電郵聯絡資料。",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { url: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="policy-page section-shell">
      <h1>私隱政策</h1>
      <p>
        本網站用作展示譚良蔚 Sally Tam 主導、Christian Choi
        提供技術顧問支援的教育科技產品，不設帳戶系統，亦不會於網站表格收集個人資料。
      </p>
      <h2>網站分析</h2>
      <p>
        本網站使用 Vercel Analytics 及 Speed
        Insights，收集匯總的頁面瀏覽、裝置及網站效能資料，以了解內容使用情況及改善載入速度。網站擁有人不會利用這些資料識別個別訪客；資料處理亦受
        Vercel 的私隱政策約束。
      </p>
      <h2>聯絡</h2>
      <p>
        如你透過電郵主動聯絡，所提供的資料只會用作回覆該次查詢。你可電郵至
        <a href="mailto:sallytlww@gmail.com"> sallytlww@gmail.com</a> 查詢。
      </p>
    </article>
  );
}
