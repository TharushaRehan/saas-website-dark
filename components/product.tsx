"use client";

import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <section className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div
          className="flex justify-center"
          // style={{
          //   opacity: opacity,
          //   rotateX: rotateX,
          //   transformPerspective: "800px",
          // }}
        >
          <Image
            src={"/assets/images/app-screen.png"}
            alt="product screenshot"
            className="mt-14 w-full"
            width={1000}
            height={1000}
            //ref={appImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
