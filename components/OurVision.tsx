import React from "react";

const OurVision = () => {
  const visionPoints = [
    "Provide a sophisticated platform for high-level competition.",
    "Establish a network of top badminton talent in London.",
    "Develop an inclusive environment that appreciates the diversity of our members.",
  ];

  return (
    <section className="bg-primary text-white py-16">
      <div className="container">
        <h2 className="mb-4 !text-white">Our Vision</h2>
        <p className="!text-white mb-4">
          The Royals Badminton Club aims to: Promote badminton in East and
          Greater London.
        </p>
        <ul className="space-y-4">
          {visionPoints.map((point, index) => (
            <li key={index} className="flex items-center">
              <span className="!text-white mr-2">•</span>
              <span className="!text-white">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurVision;
