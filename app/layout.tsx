// app/layout.tsx
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import MainLayout from "@/components/MainLayout"; // <-- Import MainLayout

const fontSans = FontSans({
  subsets: ["latin"],
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
        {/* Panggil MainLayout di sini */}
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}