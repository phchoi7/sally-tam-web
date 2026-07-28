import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "私隱政策",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="policy-page section-shell">
      <h1>私隱政策</h1>
      <p>
        本網站用作展示譚良蔚的專業教學經驗及教學案例，不設帳戶系統，亦不會於網站表格收集個人資料。
      </p>
      <h2>網站分析</h2>
      <p>
        網站可能使用私隱友善的基本瀏覽統計，以了解頁面表現。統計資料不會用作辨識個別訪客。
      </p>
      <h2>聯絡</h2>
      <p>
        如你透過電郵主動聯絡，所提供的資料只會用作回覆該次查詢。你可電郵至
        <a href="mailto:sallytlww@gmail.com"> sallytlww@gmail.com</a> 查詢。
      </p>
    </article>
  );
}
