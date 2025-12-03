// components/ui/expandable-card.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

export const ExpandableCard = ({ image, title, description }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // Gunakan prop 'layout' untuk menganimasikan perubahan ukuran kartu secara otomatis
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="relative flex flex-col rounded-xl bg-slate-100 dark:bg-slate-800 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
      style={{
        // Menambahkan properti ini membantu framer-motion untuk performa yang lebih baik
        borderRadius: "0.75rem", 
      }}
    >
      {/* Gambar Produk */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Judul yang Selalu Terlihat */}
      <motion.h2 layout="position" className="text-xl font-bold p-4 text-slate-900 dark:text-slate-100">
        {title}
      </motion.h2>

      {/* Konten yang bisa diperluas */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            // Properti animasi untuk masuk dan keluar
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } }}
            exit={{ opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
            className="px-4 pb-4"
          >
            <p className="text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};