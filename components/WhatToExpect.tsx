import React from "react";

const WhatToExpect = () => {
  const expectations = [
    "Participate in intense, high-level badminton.",
    "Take part in competitions designed for skilled players.",
    "Connect with dedicated badminton enthusiasts.",
    "Gain insights from experienced players to refine your techniques.",
    "Be part of an inclusive community that values diversity.",
    "Enhance your mental and physical fitness through competitive sessions.",
    "Build lasting relationships with like-minded players who share a passion for badminton.",
    "Enjoy a dynamic, engaging atmosphere that encourages excellence and sportsmanship.",
    "Have lots of fun while staying fit and active.",
    "Make new friends and enjoy socializing in a welcoming environment.",
  ];

  return (
    <section className="bg-primary text-white py-16">
      <div className="container">
        <h2 className="!text-white mb-4">What to expect:</h2>
        <ul className="space-y-4">
          {expectations.map((expectation, index) => (
            <li key={index} className="flex items-center ">
              <span className="text-white mr-2 mt-1">•</span>
              <span className="text-white">{expectation}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatToExpect;
