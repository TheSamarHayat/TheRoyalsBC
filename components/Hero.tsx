import { Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-primary ">
      <div className="container pt-[100px] pb-[60px]">
        <div className="text-white flex flex-col gap-4 md:w-[60%] w-full">
          <h1 className="!text-white">The Royals Badminton Club</h1>
          <p className="!text-white">
            Dedicated to Elevating Badminton Excellence in East London with
            Passion, Diversity, Integrity, and Sportsmanship
          </p>
          <Link
            href="/join-us"
            className="px-3 py-2 font-bold flex gap-2 bg-white text-primary rounded-md w-fit hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Handshake />
            Join Us
          </Link>
          <p className="!text-white">
            The Royals Badminton Club is a vibrant community for upper
            intermediate, advanced, and expert badminton players in East London
            and Greater London. We offer a supportive environment where skilled
            players can enhance their game in a competitive yet friendly
            atmosphere.
          </p>
          <Image
            src="/images/imgone.png"
            alt="hero"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
