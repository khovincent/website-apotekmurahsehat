"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false); // State untuk menu mobile
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => pathname === path;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Obat", href: "/obat" },
    { name: "Cek BMI", href: "/BMI" },
    { name: "Kontak", href: "/kontak" },
    { name: "Lokasi", href: "/map" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between w-full px-4 md:px-8 lg:px-16">
        
        {/* --- LOGO (Kiri) --- */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 md:gap-3" onClick={closeMenu}>
            <div className="relative h-8 w-8 md:h-10 md:w-10 flex-shrink-0">
              <Image
                src="/image.png"
                alt="Logo Apotek"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* PERBAIKAN: Selalu tampilkan nama lengkap "Apotek Murah Sehat" */}
            {/* Menggunakan text-sm di mobile agar muat, text-lg di desktop */}
            <span className="font-bold text-sm md:text-lg text-primary whitespace-nowrap">
              Apotek Murah Sehat
            </span>
          </Link>
        </div>

        {/* --- MENU DESKTOP --- */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={isActive(item.href) ? "default" : "ghost"}
              asChild
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>

        {/* --- TOMBOL HAMBURGER MOBILE --- */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* --- DROPDOWN MENU MOBILE --- */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-950 border-b shadow-lg animate-in slide-in-from-top-5">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}