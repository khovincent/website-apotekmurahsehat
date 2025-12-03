"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle } from "lucide-react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      {/* Judul Utama */}
      <h1 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-white text-center tracking-tight">
        Apotek Murah Sehat <br />
        <span className="text-red-600 dark:text-red-400">
          Solusi Kesehatan Keluarga
        </span>
      </h1>

      {/* Deskripsi */}
      <p className="max-w-2xl text-base md:text-xl mt-8 text-slate-600 dark:text-slate-300 mx-auto text-center leading-relaxed">
        Temukan semua kebutuhan obat dan produk kesehatan Anda dengan mudah. 
        Kami hadir melayani dengan cepat, lengkap, dan terpercaya.
      </p>

      {/* Tombol Aksi (Buttons) */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        
        {/* Tombol 1: Lihat Produk (Primary) */}
        <Button 
          asChild 
          size="lg" 
          className="h-12 px-8 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-500/25 transition-all duration-300 font-medium text-base group"
        >
          <Link href="/obat" className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" /> 
            Lihat Katalog Obat
          </Link>
        </Button>

        {/* Tombol 2: Hubungi Kami (Secondary/Outline) */}
        <Button 
          asChild 
          variant="outline" 
          size="lg" 
          className="h-12 px-8 rounded-full border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-300 text-base font-medium"
        >
          <Link href="/kontak" className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Hubungi Kami
          </Link>
        </Button>

      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
          draggable={false}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};