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
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer transparent={isHomePage} />
      
      {/* Chatbot diletakkan di sini, tanpa provider */}
    </div>
  );
}