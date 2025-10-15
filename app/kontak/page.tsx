// app/kontak/page.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"; // Import ikon MessageSquare untuk WhatsApp

export default function KontakPage() {
  const whatsAppNumber = "6282241130725"; // Format: 62... (tanpa + atau 0 di depan)
  const whatsAppLink = `https://wa.me/${whatsAppNumber}`;

  return (
    <section className="flex justify-center">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Hubungi Kami</CardTitle>
          <CardDescription>
            Punya pertanyaan atau butuh informasi lebih lanjut? Hubungi kami langsung melalui kontak di bawah ini.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Kolom Kiri: Informasi Kontak (Tetap Sama) */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Informasi Langsung</h3>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Alamat</p>
                  <p className="text-muted-foreground">
                    Jl. Babarsari, Tambak Bayan, Caturtunggal, Depok, Sleman, Daerah Istimewa Yogyakarta
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Telepon</p>
                  <p className="text-muted-foreground">082241130725</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">apotekmurahsehat@gmail.com</p>
                </div>
              </div>
            </div>

            {/* ====================================================== */}
            {/* Kolom Kanan: Diubah Menjadi Tombol WhatsApp */}
            {/* ====================================================== */}
            <div className="flex flex-col justify-center items-center text-center space-y-4 p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Punya Pertanyaan Cepat?</h3>
              <p className="text-muted-foreground">
                Klik tombol di bawah untuk langsung memulai percakapan dengan kami melalui WhatsApp.
              </p>
              <Button asChild size="lg" className="w-full">
                <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat via WhatsApp
                </a>
              </Button>
            </div>
            
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Jam Aktif 08:00 - 17:00
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}