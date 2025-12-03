// components/navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center w-full px-4 md:px-8 lg:px-16">
        {/* Logo Section */}
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6">
            <span className="font-bold text-lg text-primary">
              Apotek Murah Sehat
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-1 md:space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/obat">Daftar Obat</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/kontak">Kontak</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/BMI">Kalkulator BMI</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/map">Lokasi</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}