# 譚良蔚 Sally Tam 教師作品集

譚良蔚的個人教師網站，集中呈現設計與科技、資訊科技、數學及
STEAM 教學經驗、跨學科課程、學生創科成果與專業發展。

## 技術

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4 與原生 CSS
- Motion
- Yarn 1

## 本機開發

```bash
yarn install
yarn dev
```

開啟 [http://localhost:3000](http://localhost:3000)。

## 檢查

```bash
yarn tsc --noEmit
yarn build
```

## 網站網址

如正式網址並非 `https://sallytam.hk`，請在部署環境設定：

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

此變數會同步用於 canonical、Open Graph、robots.txt、sitemap.xml
及結構化資料。

## 主要內容

- `/` 教師定位、教學理念、代表案例與專業肯定
- `/project` 教學案例索引
- `/project/[slug]` 教學案例詳情
- `/about` 教學經歷、學歷及培訓
- `/contact` 專業聯絡

網站內容來自 Sally Tam 的履歷資料。出生日期、住址及諮詢人資料不會公開。
