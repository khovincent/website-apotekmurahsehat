// components/Footer.tsx
import { cn } from "@/lib/utils";

export default function Footer({ transparent }: { transparent?: boolean }) {
  return (
    <footer
      className={cn(
        "w-full",
        transparent ? "bg-transparent" : "border-t bg-muted/40"
      )}
    >
      {/* 
        Layout disederhanakan menjadi 'justify-center' karena hanya ada 
        satu item sekarang (teks copyright).
      */}
      <div className="w-full px-8 md:px-16 py-8 flex items-center justify-center">
        <p
          className={cn(
            "text-sm",
            transparent ? "text-slate-400" : "text-muted-foreground"
          )}
        >
          © {new Date().getFullYear()} Apotek Murah Sehat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}