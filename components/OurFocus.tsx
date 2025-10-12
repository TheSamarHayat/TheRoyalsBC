import React from "react";
import Image from "next/image";

const OurFocus = () => {
  const focusPoints = [
    {
      title: "Excellence:",
      description:
        "Dedicated to assisting players in East and Greater London in enhancing their badminton skills.",
    },
    {
      title: "Community:",
      description: "Uniting top players from across London.",
    },
    {
      title: "Competition:",
      description:
        "Organizing high-level matches that challenge and inspire players.",
    },
    {
      title: "Inclusivity:",
      description: "Embracing diversity in all its forms.",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="container">
        <div className="grid grid-cols-5 gap-8 items-center">
          {/* Logo Section - 40% width */}
          <div className="col-span-2 flex justify-center">
            <Image
              src="/images/logoblue.png"
              alt="The Royals Badminton Club Logo"
              width={300}
              height={300}
              className="rounded-full w-full h-auto max-w-[300px]"
            />
          </div>

          {/* Content Section - 60% width */}
          <div className="col-span-3">
            <h2 className="mb-4">Our Focus</h2>
            <ul className="space-y-4">
              {focusPoints.map((point, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-gray-600 mr-2 mt-1">•</span>
                  <span className="text-gray-600">
                    <span className="font-semibold text-gray-800">
                      {point.title}
                    </span>
                    <span className="ml-2">{point.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFocus;
