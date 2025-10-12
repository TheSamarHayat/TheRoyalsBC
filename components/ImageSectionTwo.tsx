import Image from "next/image";
import React from "react";

const ImageSectionTwo = () => {
  return (
    <section className="bg-white">
      <div className=" py-16 flex items-center justify-center">
        <Image
          src="/images/bannerwhite.png"
          alt="bannerwhite"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default ImageSectionTwo;
