// app/map/page.tsx

export default function MapPage() {
  return (
    <section className="flex flex-col items-center">
      <div className="text-center space-y-4 mb-8 max-w-2xl">
        <h1 className="text-4xl font-bold">Temukan Kami</h1>
        <p className="text-lg text-muted-foreground">
          Kunjungi lokasi apotek kami di Babarsari untuk mendapatkan pelayanan langsung dari apoteker terpercaya kami.
        </p>
      </div>

      <div className="w-full h-[500px] border rounded-lg overflow-hidden shadow-lg">
        <iframe
          // URL dari Anda sudah saya masukkan di sini
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.150698118823!2d110.40757287476579!3d-7.773840292245642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5900253bde7b%3A0xb29bc35c002a820!2sApotek%20Murah%20Sehat%20Babarsari!5e0!3m2!1sen!2sid!4v1760376023324!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Apotek Murah Sehat Babarsari di Google Maps"
        ></iframe>
      </div>
    </section>
  );
}