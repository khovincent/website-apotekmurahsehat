import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center w-full px-4 md:px-8 lg:px-16">
        {/* Bagian Kiri: Logo & Nama Brand */}
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center gap-3">
            {/* Logo Image */}
            <div className="relative h-10 w-10">
              <Image
                src="/image.png" // Pastikan file logo.png ada di folder public
                alt="Logo Apotek Murah Sehat"
                fill
                className="object-contain"
                priority // Prioritas loading agar logo langsung muncul
              />
            </div>
            
            {/* Nama Brand */}
            <span className="font-bold text-lg text-primary hidden sm:block">
              Apotek Murah Sehat
            </span>
            {/* Tampilan Mobile: Hanya Teks 'Apotek' jika layar sangat kecil (opsional) */}
            <span className="font-bold text-lg text-primary sm:hidden">
              Apotek
            </span>
          </Link>
        </div>

        {/* Bagian Kanan: Menu Navigasi */}
        <nav className="flex items-center space-x-1">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/obat">Obat</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/BMI">Cek BMI</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/kontak">Kontak</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/map">Lokasi</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}