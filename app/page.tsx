// app/page.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <section className="flex-grow w-full relative flex flex-col items-center justify-center">
      
      {/* Background Boxes */}
      <Boxes />
      <div className="absolute inset-0 z-20 h-full w-full bg-transparent [mask-image:radial-gradient(transparent,black)] pointer-events-none" />

      {/* Konten Hero */}
      <div className="relative z-30 text-center space-y-6 px-4">
        <h1
          className={cn(
            "text-5xl font-bold tracking-tighter text-white md:text-7xl"
          )}
        >
          Pusat Obat untuk{" "}
          <span className="text-red-500">Kesehatan Anda</span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-300 md:text-xl">
          Temukan semua kebutuhan obat dan produk kesehatan Anda dengan mudah. Apotek Murah Sehat hadir untuk melayani Anda dengan cepat, lengkap, dan terpercaya.
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="relative z-30 mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button
          asChild
          size="lg"
          className="h-12 bg-red-600 px-8 text-base hover:bg-red-700"
        >
          <Link href="/obat">Lihat Obat Kami</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 border-white px-8 text-base text-black hover:bg-gray-300 hover:text-slate-900"
        >
          <Link href="/kontak">Hubungi Kami</Link>
        </Button>
      </div>
    </section>
  );
}