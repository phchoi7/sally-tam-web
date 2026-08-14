import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "譚良蔚 Sally Tam 教育專業作品集",
    short_name: "Sally Tam",
    description:
      "譚良蔚 Sally Tam 的資訊及通訊科技教育、STEAM 教學與校本數字教育作品集。",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f0e8",
    theme_color: "#17382e",
    lang: "zh-Hant-HK",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
