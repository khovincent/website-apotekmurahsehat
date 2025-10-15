// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local"; // <-- 1. Ganti import menjadi 'next/font/local'
import "./globals.css";

import { cn } from "@/lib/utils";
import MainLayout from "@/components/MainLayout";

// 2. Konfigurasi untuk memuat font dari file lokal
const fontSans = localFont({
  src: "../fonts/Inter-Regular.ttf", // <-- Path menuju file font Anda
  variable: "--font-sans",
});

export const metadata = {
  title: "Apotek Murah Sehat",
  description: "Solusi kesehatan terpercaya Anda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}