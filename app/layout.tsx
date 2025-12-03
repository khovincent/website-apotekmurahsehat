import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { cn } from "@/lib/utils";
import MainLayout from "@/components/MainLayout";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

// Konfigurasi font dari file lokal
const fontSans = localFont({
  src: "../fonts/Inter-Regular.ttf", // Pastikan file ini ada di folder public/fonts atau folder fonts root
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Apotek Murah Sehat - Solusi Kesehatan Keluarga",
  description: "Apotek terlengkap dan terpercaya di Yogyakarta.",
  icons: {
    icon: "/image.svg", 
    shortcut: "/image.png",
    apple: "/image.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <MainLayout>{children}</MainLayout>
        
        {/* Tombol WA Mengambang (Sangat penting untuk Mobile) */}
        <WhatsAppFloat /> 
      </body>
    </html>
  );
}