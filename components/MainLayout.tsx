// components/MainLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      document.body.classList.add("homepage-bg");
    } else {
      document.body.classList.remove("homepage-bg");
    }
    return () => {
      document.body.classList.remove("homepage-bg");
    };
  }, [pathname]);

  return (
    <div
      className={cn(
        "flex flex-col",
        isHomePage ? "h-screen overflow-hidden" : "min-h-screen"
      )}
    >
      <Navbar transparent={isHomePage} />

      {/* =================================================================== */}
      {/* INI ADALAH KUNCI PERBAIKANNYA */}
      {/* Tambahkan padding kanan-kiri & atas-bawah HANYA jika BUKAN homepage. */}
      {/* =================================================================== */}
      <main
        className={cn(
          "flex-grow flex flex-col",
          !isHomePage && "px-8 md:px-16 py-12"
        )}
      >
        {children}
      </main>

      <Footer transparent={isHomePage} />
    </div>
  );
}