import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,#FEECFF,#FECAFF,#FEB5FF,#FFDBE7,#FFF4D6,#F3FCD7,#D2F5EE,#C3EFFF,#FBEFFF)]">
      <div className="container">
        <p className="font-medium">
          <span className="hidden md:inline">
            This page is included in a free SaaS Website Kit.{" "}
          </span>
          <Link
            href={"#"}
            className="cursor-pointer hover:underline hover:underline-offset-4"
          >
            View the complete Kit{" "}
            <ArrowRight className="inline-flex" size={14} />{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
