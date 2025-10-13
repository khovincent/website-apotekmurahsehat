import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar({ transparent }: { transparent?: boolean }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        transparent
          ? "bg-transparent text-white"
          : "border-b bg-background/95 backdrop-blur"
      )}
    >
      <div className="flex h-16 items-center w-full px-8 md:px-16">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6">
            <span
              className={cn(
                "font-bold text-lg",
                transparent ? "text-white" : "text-primary"
              )}
            >
              Apotek Murah Sehat
            </span>
          </Link>
        </div>
        <nav className="flex items-center space-x-2">
          <Button variant="ghost" asChild className={cn(transparent && "hover:bg-white/10")}>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild className={cn(transparent && "hover:bg-white/10")}>
            <Link href="/obat">Daftar Obat</Link>
          </Button>
          <Button variant="ghost" asChild className={cn(transparent && "hover:bg-white/10")}>
            <Link href="/kontak">Kontak</Link>
          </Button>
          <Button variant="ghost" asChild className={cn(transparent && "hover:bg-white/10")}>
            <Link href="/map">Lokasi</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}