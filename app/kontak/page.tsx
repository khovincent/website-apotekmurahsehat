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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Import Textarea
import { Mail, Phone, MapPin } from "lucide-react"; // Import ikon

export default function KontakPage() {
  return (
    // Section pembungkus untuk menengahkan Card
    <section className="flex justify-center">
      {/* Card ini berfungsi sebagai 'outline' untuk seluruh konten */}
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Hubungi Kami</CardTitle>
          <CardDescription>
            Punya pertanyaan atau butuh informasi lebih lanjut? Silakan isi form di bawah atau hubungi kami langsung.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Kolom Kiri: Informasi Kontak dengan Ikon */}
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
                  <p className="text-muted-foreground">(021) 123-4567</p>
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

            {/* Kolom Kanan: Formulir Kontak */}
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Nama</Label>
                <Input id="name" type="text" placeholder="Nama Lengkap Anda" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@anda.com" />
              </div>
              <div>
                <Label htmlFor="message">Pesan Anda</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                />
              </div>
              <Button type="submit" className="w-full">
                Kirim Pesan
              </Button>
            </form>
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