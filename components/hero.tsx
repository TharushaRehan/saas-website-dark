"use client";

import Image from "next/image";
import cursorImage from "/assets/images/cursor.png";
import messageImage from "/assets/images/message.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-white bg-[linear-gradient(to_bottom,#000000,#200D42,#4F21A1,#A46EDB)] py-[72px] sm:py-24 overflow-clip">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex gap-x-3 border py-1 px-2 rounded-lg border-white/30">
            <p className="text-white/60">Version 2.0 is here</p>
            <Link href={"#"} className="group">
              Read more{" "}
              <ArrowRight
                className="inline-flex transition-all duration-300 ease-out group-hover:translate-x-1"
                size={14}
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task <br /> at a Time
            </h1>
            <motion.div className="absolute right-[476px] top-[108px] hidden sm:inline">
              <Image
                src={"/assets/images/cursor.png"}
                alt=""
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div className="absolute top-[56px] left-[498px] hidden sm:inline">
              <Image
                src={"/assets/images/cursor.png"}
                alt=""
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
