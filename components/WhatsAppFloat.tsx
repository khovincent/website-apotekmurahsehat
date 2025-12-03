"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  // Ganti dengan nomor WhatsApp apotek Anda (format 62...)
  const phoneNumber = "6282241130725"; 
  const message = "Halo, saya ingin menanyakan ketersediaan obat...";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      // Class 'fixed bottom-6 right-6' membuatnya menempel di pojok kanan bawah
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-500 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
      <span className="font-semibold hidden md:inline">Chat Apoteker</span>
    </a>
  );
}