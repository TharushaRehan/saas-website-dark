"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/assets/images/acme.png", alt: "Acme Logo" },
  { src: "/assets/images/quantum.png", alt: "Quantum Logo" },
  { src: "/assets/images/echo.png", alt: "Echo Logo" },
  { src: "/assets/images/celestial.png", alt: "Celestial Logo" },
  { src: "/assets/images/pulse.png", alt: "Pulse Logo" },
  { src: "/assets/images/apex.png", alt: "Apex Logo" },
];

const Logos = () => {
  return (
    <section className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trust by the world&apos;s most innovative teams
        </h2>
        <div className="mt-9 relative flex w-full flex-col items-center justify-center overflow-hidden">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-16 pr-16"
          >
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                key={alt}
                className="flex-none h-8 w-auto"
                width={100}
                height={100}
              />
            ))}
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                key={alt}
                className="flex-none h-8 w-auto"
                width={100}
                height={100}
              />
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
        </div>
      </div>
    </section>
  );
};

export default Logos;
