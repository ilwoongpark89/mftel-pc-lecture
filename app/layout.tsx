import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "상변화열전달 | Phase-Change Heat Transfer",
  description:
    "인하대학교 MFTEL 대학원 상변화열전달 강의. 비등(핵비등·임계열유속·막비등)과 물·비극성 유체의 액–기 상변화를 직관과 수식으로 다룹니다.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "상변화열전달 | Phase-Change Heat Transfer",
    description:
      "인하대학교 MFTEL 대학원 상변화열전달 강의. 비등·CHF·막비등과 비극성 유체 상변화.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
