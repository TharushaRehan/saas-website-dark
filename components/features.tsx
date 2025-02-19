import { features } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map(({ title, description }) => (
            <Feature key={title} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border border-white/30 rounded-xl px-5 py-10 text-center">
      <div className="inline-flex bg-white text-black w-fit rounded-lg justify-center items-center p-3">
        <Image
          src={"/assets/icons/ecosystem.svg"}
          alt="image"
          width={20}
          height={20}
        />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};
