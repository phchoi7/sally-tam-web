# 譚良蔚 Sally Tam × Christian Choi 教育科技產品作品集

Sally Tam 的教育科技 Product Owner 作品集，記錄 NFC
梅記智能超市、校園房間預約及教師當值生成產品。Christian Choi 以 Tech
Consultant 身份支援技術架構、實作訓練、除錯與部署。

網站只把 Sally Tam 與 Christian Choi 建立為 SEO 人物實體。獲帶領團隊以匿名集體方式呈現；機構名稱只作必要產品情境，不作品牌主體。

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

- `/` Sally Tam Product Owner 定位、Christian Choi 技術協作及代表產品
- `/project/nfc-smartmart` NFC 梅記智能超市完整產品時間線
- `/project/school-room-booking-system` 校園房間預約系統案例
- `/project/teacher-duty-scheduler` 教師智能當值生成系統案例
- `/project` 全部產品與教學案例
- `/about` Sally 的專業歷程及兩人的協作模式
- `/contact` 教育科技產品合作聯絡

網站不公開獲帶領團隊姓名、出生日期、住址、內部校務資料或生產環境憑證。
