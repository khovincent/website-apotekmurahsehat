"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Clock, MapPin, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Data Produk ---
const products = [
  { title: "Panadol Biru", link: "/obat", thumbnail: "/obat/panadol-paracetamol.jpg" },
  { title: "Tolak Angin Cair", link: "/obat", thumbnail: "/obat/tolakangin.jpg" },
  { title: "Imboost Force", link: "/obat", thumbnail: "/obat/imboost.jpg" },
  { title: "Promag Tablet", link: "/obat", thumbnail: "/obat/promag.jpg" },
  { title: "Hotin Cream", link: "/obat", thumbnail: "/obat/hotincream120.jpg" },
  { title: "Vitacimin", link: "/obat", thumbnail: "/obat/vitacimin.jpg" },
  { title: "Sanmol Tablet", link: "/obat", thumbnail: "/obat/sanmol.jpg" },
  { title: "Freshcare", link: "/obat", thumbnail: "/obat/freshcare.jpg" },
  { title: "Konidin", link: "/obat", thumbnail: "/obat/konidin.jpg" },
  { title: "Bodrex Migra", link: "/obat", thumbnail: "/obat/bodrex-migra.jpg" },
  { title: "Cap Kaki Tiga", link: "/obat", thumbnail: "/obat/capkakitiga.jpg" },
  { title: "Neurobion Forte", link: "/obat", thumbnail: "/obat/neurobion-forte.jpg" },
  { title: "Cooling 5 Spray", link: "/obat", thumbnail: "/obat/cooling5plus.jpg" },
  { title: "Geliga Balsem", link: "/obat", thumbnail: "/obat/geliga-40g.jpg" },
  { title: "Ultraflu", link: "/obat", thumbnail: "/obat/ultraflu.jpg" },
];

export default function Home() {
  // --- State ---
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);
  const [currentDay, setCurrentDay] = useState<number | null>(null); // Tambahkan ini untuk menghindari error Hydration

  // --- Logic Cek Jadwal ---
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Minggu, 1 = Senin, ..., 6 = Sabtu
      const hour = now.getHours();
      
      setCurrentDay(day); // Simpan hari ke state

      let open = false;
      // Logika Jadwal:
      if (day >= 1 && day <= 5) {
        // Senin (1) - Jumat (5): 08:00 - 21:00
        if (hour >= 8 && hour < 21) open = true;
      } else if (day === 6) {
        // Sabtu (6): 08:00 - 19:00
        if (hour >= 8 && hour < 19) open = true;
      }
      // Minggu (0) tutup
      
      setIsOpenNow(open);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Update tiap 1 menit
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-slate-50 dark:bg-black">
      {/* --- 1. Hero Parallax Section --- */}
      <HeroParallax products={products} />

      {/* --- 2. Section Informasi & Jam Operasional --- */}
      <section className="relative z-10 w-full px-4 pb-24 -mt-20 pointer-events-none">
        <div className="container mx-auto pointer-events-auto">
          {/* Card Utama */}
          <div className="rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-between backdrop-blur-sm bg-white/90 dark:bg-slate-900/90">
            
            {/* Kiri: Teks Sambutan & CTA */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Kesehatan Anda, <br className="hidden lg:block" /> Prioritas Kami.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Kami menyediakan obat-obatan lengkap dan terjamin keasliannya.
                Kunjungi kami untuk konsultasi dan kebutuhan kesehatan keluarga Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link href="/obat">
                  <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full font-semibold bg-red-600 hover:bg-red-700 text-white">
                    Lihat Katalog Obat <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/map">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 rounded-full border-slate-300 dark:border-slate-700">
                    <MapPin className="h-4 w-4" /> Cek Lokasi
                  </Button>
                </Link>
              </div>
            </div>

            {/* Kanan: Kartu Jam Operasional */}
            <div className="w-full max-w-md bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              
              {/* Header Status */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 dark:bg-red-900/30 rounded-xl text-red-600 dark:text-red-400">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Jam Buka</h3>
                </div>

                {isOpenNow !== null && (
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${
                      isOpenNow
                        ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                        : "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
                    }`}>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpenNow ? "bg-green-500" : "bg-red-500"}`}></span>
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isOpenNow ? "bg-green-600" : "bg-red-600"}`}></span>
                    </span>
                    {isOpenNow ? "Sedang Buka" : "Sedang Tutup"}
                  </div>
                )}
              </div>
              
              {/* Daftar Jam - Menggunakan currentDay state */}
              <div className="space-y-4 text-base">
                <StatusRow 
                  day="Senin - Jumat" 
                  hours="08:00 - 21:00" 
                  // Highlight jika buka DAN hari ini antara Senin(1) - Jumat(5)
                  isOpen={isOpenNow === true && currentDay !== null && currentDay >= 1 && currentDay <= 5} 
                />
                <StatusRow 
                  day="Sabtu" 
                  hours="08:00 - 19:00" 
                  // Highlight jika buka DAN hari ini Sabtu(6)
                  isOpen={isOpenNow === true && currentDay === 6} 
                />
                <StatusRow 
                  day="Minggu & Libur" 
                  hours="Tutup" 
                  isClosedPermanent 
                />
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
                Waktu mengacu pada jam perangkat Anda.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

// --- Komponen StatusRow ---
function StatusRow({ day, hours, isOpen = false, isClosedPermanent = false }: { day: string; hours: string; isOpen?: boolean; isClosedPermanent?: boolean }) {
    return (
      <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-3 last:border-0 last:pb-0">
        <span className="text-slate-700 dark:text-slate-300 flex items-center gap-2">
          {isOpen && <CheckCircle2 className="h-4 w-4 text-green-500" />}
          {isClosedPermanent && <XCircle className="h-4 w-4 text-red-400" />}
          {day}
        </span>
        <span className={`font-semibold ${isClosedPermanent ? "text-red-500" : "text-slate-900 dark:text-white"}`}>
          {hours}
        </span>
      </div>
    )
}