import type { Metadata } from "next";
import { Geist, Geist_Mono, Bonbon, Itim } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bonbon = Bonbon({
  variable: "--font-bonbon",
  subsets: ["latin"],
  weight: "400"
});

const itim = Itim({
  variable: "--font-itim",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "⋆｡𖦹°⭒˚｡⋆",
  description: "haiiiiiiiiii :3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bonbon.variable} ${itim.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col m-[0px] p-[0px]">{children}</body>
    </html>
  );
}
