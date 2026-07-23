import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "大阪・神戸 家族旅行 2026",
  description: "2026年夏、大阪・USJ・神戸をめぐる家族旅行のしおり。",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
