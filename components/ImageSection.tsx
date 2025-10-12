import Image from "next/image";
import React from "react";

const ImageSection = () => {
  return (
    <section className="bg-white">
      <div className="bg-primary py-16 flex items-center justify-center">
        <Image
          src="/images/bannerblue.png"
          alt="bannerblue"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default ImageSection;
