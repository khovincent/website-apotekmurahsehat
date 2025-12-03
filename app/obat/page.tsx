// app/obat/page.tsx
"use client";

import { useState } from "react";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { Button } from "@/components/ui/button"; // Pastikan Anda punya komponen Button, atau ganti dengan <button> HTML biasa

// --- Tipe Data ---
type Category = 
  | "Semua"
  | "Nyeri & Demam"
  | "Flu & Batuk"
  | "Pencernaan"
  | "Otot & Sendi"
  | "Minyak Angin & Aromaterapi"
  | "Vitamin & Suplemen"
  | "Herbal"
  | "Lainnya";

interface ObatItem {
  title: string;
  description: string;
  image: string;
  category: Category;
}

// --- Daftar Obat Lengkap (Sesuai Screenshot) ---
const obatList: ObatItem[] = [
  // === Baris 1: Paracetamol & Nyeri ===
  {
    title: "Panadol (Biru)",
    description: "Paracetamol 500mg untuk sakit kepala dan demam.",
    image: "/obat/panadol-paracetamol.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Panadol Extra (Merah)",
    description: "Paracetamol + Caffeine untuk sakit kepala membandel.",
    image: "/obat/panadol-paracetamol-extra.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Panadol Flu & Batuk (Hijau)",
    description: "Meredakan gejala flu dan batuk tidak berdahak.",
    image: "/obat/panadol-flubatuk.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Feminax",
    description: "Meredakan nyeri haid dan kram perut.",
    image: "/obat/feminax-paracetamol.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Sumagesic",
    description: "Paracetamol 600mg untuk nyeri pusing dan sakit gigi.",
    image: "/obat/sumagesic-paracetamol.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Phenylpropanolamine",
    description: "Zat aktif dekongestan (Hidung tersumbat).",
    image: "/obat/phenylpropa.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Konidin",
    description: "Tablet untuk batuk berdahak dan alergi.",
    image: "/obat/konidin.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Intunal F",
    description: "Obat flu berat, demam, pusing, batuk.",
    image: "/obat/intunal-f.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Ultraflu",
    description: "Meredakan gejala flu dan demam.",
    image: "/obat/ultraflu.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Oskadon",
    description: "Obat sakit kepala dan nyeri otot.",
    image: "/obat/oskadon.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Biogesic",
    description: "Paracetamol tablet yang aman untuk lambung.",
    image: "/obat/biogesic.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Bodrex Migra",
    description: "Spesialis sakit kepala sebelah (Migrain).",
    image: "/obat/bodrex-migra.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Bodrex Extra",
    description: "Untuk sakit kepala mencengkeram.",
    image: "/obat/bodrex-extra.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Prosis",
    description: "Ibuprofen suspensi/tablet penurun panas.",
    image: "/obat/prosis-ibuprofen.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Rheumacyl",
    description: "Untuk nyeri sendi dan pegal linu.",
    image: "/obat/rheumacyl.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Sumagesic (Strip)",
    description: "Varian strip Sumagesic.",
    image: "/obat/sumagesic.jpg",
    category: "Nyeri & Demam",
  },

  // === Baris 2: Flu, Batuk & Maag ===
  {
    title: "Sanmol",
    description: "Penurun panas dan pereda nyeri.",
    image: "/obat/sanmol.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Pamol",
    description: "Paracetamol standar.",
    image: "/obat/pamol.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Sanmol Forte",
    description: "Sanmol dosis tinggi 650mg.",
    image: "/obat/sanmol-forte.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Tera-F",
    description: "Obat flu dengan Paracetamol.",
    image: "/obat/tera-f.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Demacolin",
    description: "Kombinasi obat flu yang efektif.",
    image: "/obat/demacolin.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Flucadex",
    description: "Meringankan gejala flu.",
    image: "/obat/flucadex.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Alpara",
    description: "Mengatasi flu disertai batuk.",
    image: "/obat/alpara.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Grantusif",
    description: "Antitusif dan ekspektoran (Batuk).",
    image: "/obat/grantusif.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Plantacid Forte",
    description: "Obat maag dan asam lambung tinggi.",
    image: "/obat/plantacid-forte.jpg",
    category: "Pencernaan",
  },
  {
    title: "Dexanta",
    description: "Antasida untuk nyeri lambung.",
    image: "/obat/dexanta.jpg",
    category: "Pencernaan",
  },
  {
    title: "Promag",
    description: "Ahlinya lambung, tablet kunyah.",
    image: "/obat/promag.jpg",
    category: "Pencernaan",
  },
  {
    title: "Paratusin",
    description: "Meredakan gejala flu, demam, sakit kepala.",
    image: "/obat/paratusin.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Bodrex Flu & Batuk",
    description: "Khusus flu disertai batuk.",
    image: "/obat/bodrex-flubatuk.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Decolsin",
    description: "Kapsul untuk batuk dan flu.",
    image: "/obat/decolsin.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Vitacimin",
    description: "Vitamin C hisap rasa lemon/jeruk.",
    image: "/obat/vitacimin.jpg",
    category: "Vitamin & Suplemen",
  },
  {
    title: "Diatabs",
    description: "Attapulgite untuk menyerap racun diare.",
    image: "/obat/diatabs.jpg",
    category: "Pencernaan",
  },

  // === Baris 3: Herbal, Balsem & Tenggorokan ===
  {
    title: "Antangin JRG (Sachet)",
    description: "Masuk angin? Wes ewes ewes bablas.",
    image: "/obat/antangin-jr.jpg",
    category: "Herbal",
  },
  {
    title: "Tolak Angin Cair",
    description: "Obat herbal terstandar masuk angin.",
    image: "/obat/tolakangin.jpg",
    category: "Herbal",
  },
  {
    title: "Tolak Angin Anak",
    description: "Dosis khusus anak-anak.",
    image: "/obat/tolakangin-anak.jpg",
    category: "Herbal",
  },
  {
    title: "Geliga Balsem (40g)",
    description: "Balsem otot kemasan besar.",
    image: "/obat/geliga-40g.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Geliga Balsem (20g)",
    description: "Balsem otot kemasan sedang.",
    image: "/obat/geliga-20g.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Geliga Balsem (10g)",
    description: "Balsem otot kemasan kecil.",
    image: "/obat/geliga-10g.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Balpirik (Kuning)",
    description: "Balsem ekstra kuat.",
    image: "/obat/balpirik-kuning.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Balpirik (Merah)",
    description: "Balsem hangat untuk kerokan.",
    image: "/obat/balpirik-merah.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Balpirik (Hijau)",
    description: "Balsem aromaterapi.",
    image: "/obat/balpirik-hijau.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Vital Ear Oil",
    description: "Obat tetes telinga antiseptik.",
    image: "/obat/vital-earoil.jpg",
    category: "Lainnya",
  },
  {
    title: "Forumen",
    description: "Pembersih kotoran telinga.",
    image: "/obat/forumen.jpg",
    category: "Lainnya",
  },
  {
    title: "Cooling 5 (Plus)",
    description: "Semprotan sakit tenggorokan & sariawan.",
    image: "/obat/cooling5plus.jpg",
    category: "Lainnya",
  },
  {
    title: "Cooling 5 (Cappucino)",
    description: "Pereda sakit tenggorokan rasa kopi.",
    image: "/obat/cooling5-cappucino.jpg",
    category: "Lainnya",
  },
  {
    title: "Cooling 5 (Cherry)",
    description: "Pereda sakit tenggorokan rasa buah.",
    image: "/obat/cooling5-cherry.jpg",
    category: "Lainnya",
  },
  {
    title: "Hotin Cream (60g)",
    description: "Krim panas pereda nyeri otot.",
    image: "/obat/hotincream60.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Hotin Cream (120g)",
    description: "Krim panas kemasan botol pompa.",
    image: "/obat/hotincream120.jpg",
    category: "Otot & Sendi",
  },

  // === Baris 4: Krim Otot, Batuk & Vitamin ===
  {
    title: "Hotin Strong (60g)",
    description: "Panasnya extra, cocok untuk pegal berat.",
    image: "/obat/hotincream60-strong.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Hotin Strong (120g)",
    description: "Hotin Strong kemasan besar.",
    image: "/obat/hotincream120-strong.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Hotin Aromatherapy (60g)",
    description: "Hangat dengan aroma menenangkan.",
    image: "/obat/hotincream60-aromatherapy.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Hotin Aromatherapy (120g)",
    description: "Aromaterapi kemasan besar.",
    image: "/obat/hotincream120-aromatherapy.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Hotin DCL (60g)",
    description: "Mengandung Diclofenac untuk nyeri sendi.",
    image: "/obat/hotindcl-60.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Hotin DCL (120g)",
    description: "Hotin Diclofenac kemasan besar.",
    image: "/obat/hotindcl-120.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Gastrucid",
    description: "Obat maag tablet kunyah.",
    image: "/obat/gastrucid.jpg",
    category: "Pencernaan",
  },
  {
    title: "Farsifen",
    description: "Ibuprofen 400mg tablet.",
    image: "/obat/farsifen.jpg",
    category: "Nyeri & Demam",
  },
  {
    title: "Arcapec",
    description: "Tablet obat batuk.",
    image: "/obat/arcapec.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Pharmaton Formula",
    description: "Multivitamin + Ginseng G115 untuk stamina.",
    image: "/obat/pharmaton.jpg",
    category: "Vitamin & Suplemen",
  },
  {
    title: "Bisolvon",
    description: "Bromhexine pengencer dahak.",
    image: "/obat/bisolvon.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Mucohexin",
    description: "Mukolitik (pengencer dahak) tablet.",
    image: "/obat/mucohexin.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Paracold Flu",
    description: "Tablet untuk gejala flu.",
    image: "/obat/paracoldflu.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Bodrex Flu",
    description: "Meredakan flu tanpa batuk.",
    image: "/obat/bodrex-flu.jpg",
    category: "Flu & Batuk",
  },
  {
    title: "Renovit",
    description: "Multivitamin lengkap harian.",
    image: "/obat/renovit.jpg",
    category: "Vitamin & Suplemen",
  },
  {
    title: "Neurobion Forte",
    description: "Vitamin B1, B6, B12 untuk pegal & kesemutan.",
    image: "/obat/neurobion-forte.jpg",
    category: "Vitamin & Suplemen",
  },

  // === Baris 5 & 6: Suplemen, Minyak Angin & Vitamin Spesifik ===
  {
    title: "Etabion",
    description: "Tablet tambah darah (Zat Besi).",
    image: "/obat/etabion.jpg",
    category: "Vitamin & Suplemen",
  },
  {
    title: "Imboost",
    description: "Daya tahan tubuh (Echinacea).",
    image: "/obat/imboost.jpg",
    category: "Vitamin & Suplemen",
  },
  {
    title: "Calcium Lactate",
    description: "Suplemen kalsium (tulang/gigi).",
    image: "/obat/calcium-lactate.jpg",
    category: "Vitamin & Suplemen",
  },
  {
    title: "Wellmove",
    description: "Nutrisi sendi (Glucosamine).",
    image: "/obat/wellmove.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Cap Kaki Tiga (Kaleng)",
    description: "Larutan penyegar panas dalam.",
    image: "/obat/capkakitiga.jpg",
    category: "Herbal",
  },
  {
    title: "Cap Kaki Tiga (Anak)",
    description: "Larutan penyegar khusus anak.",
    image: "/obat/capkakitiga-anak.jpg",
    category: "Herbal",
  },
  {
    title: "Salonpas",
    description: "Koyo pereda nyeri otot.",
    image: "/obat/salonpas.jpg",
    category: "Otot & Sendi",
  },
  {
    title: "Freshcare (Original)",
    description: "Minyak angin aromaterapi roll-on.",
    image: "/obat/freshcare.jpg",
    category: "Minyak Angin & Aromaterapi",
  },
  {
    title: "Safecare",
    description: "Minyak angin safe & care.",
    image: "/obat/safecare.jpg",
    category: "Minyak Angin & Aromaterapi",
  },
  {
    title: "Safecare Strong",
    description: "Versi lebih panas.",
    image: "/obat/safecare-strong.jpg",
    category: "Minyak Angin & Aromaterapi",
  },
  {
    title: "Tolak Angin Care",
    description: "Minyak angin roll-on Sidomuncul.",
    image: "/obat/tolakangin-care.jpg",
    category: "Minyak Angin & Aromaterapi",
  },
  {
    title: "Freshcare Vapobal",
    description: "Kombinasi inhaler & roll on.",
    image: "/obat/freshcare-vapobalm.jpg",
    category: "Minyak Angin & Aromaterapi",
  },
  {
    title: "Cessa (Feddrop)",
    description: "Essential oil bayi untuk demam.",
    image: "/obat/cessa-feddrop.jpg",
    category: "Minyak Angin & Aromaterapi",
  },
  {
    title: "Cessa (Happynose)",
    description: "Essential oil bayi untuk flu/hidung.",
    image: "/obat/cessa-happynose.jpg",
    category: "Minyak Angin & Aromaterapi",
  },
  {
    title: "Vitamin A",
    description: "Suplemen kesehatan mata.",
    image: "/obat/vitamin-a.jpg",
    category: "Vitamin & Suplemen",
  },
  {
    title: "Vitamin B Complex",
    description: "Vitamin B untuk metabolisme.",
    image: "/obat/vitamin-b.jpg",
    category: "Vitamin & Suplemen",
  },
  {
    title: "Vitamin D",
    description: "Untuk kesehatan tulang & imun.",
    image: "/obat/vitamin-d.jpg",
    category: "Vitamin & Suplemen",
  },
  {
    title: "Vitamin B12",
    description: "Untuk pembentukan sel darah merah.",
    image: "/obat/vitamin-b12.jpg",
    category: "Vitamin & Suplemen",
  },
];

// Daftar Kategori Unik untuk Tombol Filter
const categories: Category[] = [
  "Semua",
  "Nyeri & Demam",
  "Flu & Batuk",
  "Pencernaan",
  "Otot & Sendi",
  "Vitamin & Suplemen",
  "Herbal",
  "Minyak Angin & Aromaterapi",
  "Lainnya",
];

export default function ObatPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");

  // Logic Filtering
  const filteredObat =
    activeCategory === "Semua"
      ? obatList
      : obatList.filter((item) => item.category === activeCategory);

  return (
    <section className="flex flex-col items-center py-16 px-4 bg-slate-50 dark:bg-black min-h-screen">
      <div className="text-center space-y-4 mb-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Katalog Obat Lengkap
        </h1>
        <p className="text-lg text-muted-foreground">
          Temukan obat yang Anda butuhkan berdasarkan kategori.
        </p>
      </div>

      {/* --- Bagian Filter Kategori --- */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-5xl">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-6 transition-all ${
              activeCategory === cat
                ? "bg-red-600 hover:bg-red-700 text-white shadow-md"
                : "bg-white hover:bg-slate-100 dark:bg-slate-900"
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* --- Bagian Grid Produk --- */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredObat.length > 0 ? (
          filteredObat.map((obat, index) => (
            <ExpandableCard
              key={`${obat.title}-${index}`}
              title={obat.title}
              description={obat.description}
              image={obat.image}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-slate-500">
            Tidak ada produk ditemukan di kategori ini.
          </div>
        )}
      </div>
    </section>
  );
}