import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2026년 스승의 날",
  description: "2026 선린인터넷고등학교 학생회 스승의 날 이벤트",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "2026년 스승의 날",
    description: "2026 선린인터넷고등학교 학생회 스승의 날 이벤트",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}