import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BASE_BACKGROUND_COLOR } from "@/model/const";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BACKSTAGETALKS",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased p-5`}
        style={{ background: BASE_BACKGROUND_COLOR }}
      >
        {children}
      </body>
    </html>
  );
}
