import React from "react";

const CoreRegions = () => {
  const regions = [
    "Newham",
    "Redbridge",
    "Barking and Dagenham",
    "Hackney",
    "Havering",
    "Tower Hamlets",
    "Waltham Forest",
    "Thurrock",
  ];

  return (
    <section className="bg-primary text-white py-16">
      <div className="container">
        <h2 className="mb-4 !text-white">Core Regions</h2>
        <p className="!text-white mb-4">
          Most of the players at The Royals Badminton Club belong to the
          following areas: East London Boroughs
        </p>
        <ul className="space-y-4">
          {regions.map((region, index) => (
            <li key={index} className="flex items-center">
              <span className="!text-white mr-2">•</span>
              <span className="!text-white">{region}</span>
            </li>
          ))}
        </ul>
        <p className="!text-white mt-6">
          However, we welcome skilled players from all over Greater London,
          England, and the United Kingdom.
        </p>
      </div>
    </section>
  );
};

export default CoreRegions;
