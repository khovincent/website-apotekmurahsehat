"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const obatList = [
  {
    title: "Paracetamol 500mg",
    description: "Meredakan demam, sakit kepala, dan nyeri ringan hingga sedang.",
    link: "/kontak",
    image: "/obat/paracetamol.jpg", // <-- TAMBAHKAN PATH GAMBAR
  },
  {
    title: "Amoxicillin 500mg",
    description: "Antibiotik resep untuk mengobati berbagai infeksi bakteri.",
    link: "/kontak",
    image: "/obat/amoxicillin.jpg", // <-- TAMBAHKAN PATH GAMBAR
  },
  {
    title: "Vitamin C 1000mg",
    description: "Suplemen untuk meningkatkan daya tahan tubuh dan menjaga kesehatan kulit.",
    link: "/kontak",
    image: "/obat/vitamin-c.jpg", // <-- TAMBAHKAN PATH GAMBAR
  },
  {
    title: "Obat Batuk Herbal",
    description: "Membantu meredakan batuk berdahak dan melegakan tenggorokan.",
    link: "/kontak",
    image: "/obat/obat-batuk.jpg", // <-- TAMBAHKAN PATH GAMBAR
  },
  {
    title: "Minyak Kayu Putih",
    description: "Menghangatkan tubuh, meredakan perut kembung dan gatal-gatal.",
    link: "/kontak",
    image: "/obat/minyak-kayu-putih.jpg", // <-- TAMBAHKAN PATH GAMBAR
  },
  {
    title: "Antasida Sirup",
    description: "Mengurangi gejala yang berhubungan dengan kelebihan asam lambung.",
    link: "/kontak",
    image: "/obat/antasida.jpg", // <-- TAMBAHKAN PATH GAMBAR
  },
];

export default function ObatPage() {
  return (
    <section className="flex flex-col items-center">
      <div className="text-center space-y-4 mb-4 max-w-2xl">
        <h1 className="text-4xl font-bold">Produk Unggulan Kami</h1>
        <p className="text-lg text-muted-foreground">
          Berikut adalah beberapa produk yang tersedia di apotek kami. Untuk informasi lebih lanjut atau ketersediaan produk lain, silakan hubungi kami.
        </p>
      </div>

      <HoverEffect items={obatList} />
    </section>
  );
}