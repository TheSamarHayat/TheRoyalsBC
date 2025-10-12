import React from "react";

const OurGoal = () => {
  const goals = [
    "Contribute to society by providing a positive and constructive alternative platform for young individuals, steering them away from negative influences such as drugs and crime.",
    "Promote an active lifestyle through badminton that improves the physical, mental, and social well-being of local communities.",
    "Create opportunities for skill development, encouraging individuals to reach their full potential in the sports and daily life.",
    "Work towards making badminton a prominent sport in Greater London and beyond, contributing to its local, national and international recognition.",
    "Instill the principles of law-abiding behavior and disciplined living in people's minds through a sophisticated game like badminton.",
    "Advocate for healthy living and physical activity as essential components of a thriving society. A healthy society is established only when each individual is healthy.",
    "Develop the ability to overcome personal shortcomings by acknowledging your defeats and appreciating the victories of others by celebrating their achievements.",
    "Commit to building an environment where everyone feels welcomed and valued.",
    "Promote love, affection, strength, brotherhood, and cooperation with each other. Letting each other know that we are incomplete without each other.",
    "Establish a network of talented individuals who inspire and motivate others.",
    "Foster a culture in which individuals respect one another, engage in positive interactions, and encourage collaboration.",
    "Build partnerships with local organizations to promote the growth of badminton, healthy activities and community engagement.",
    "Cultivate a culture of discipline, teamwork, and perseverance both on and off the court.",
    "Raise awareness of badminton as a sport that promotes physical health, mental resilience, and social connections.",
    "Support the development of future leaders and mentors within the badminton community.",
    "Create an atmosphere of love, tolerance, and brotherhood in our society and community through a wonderful activity like badminton.",
    "Eliminate negative attitudes within our community and society, ensuring that every individual can succeed in the world of sports and in their everyday lives.",
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-4">Our Goal</h2>
        <ul className="space-y-4">
          {goals.map((goal, index) => (
            <li key={index} className="flex items-center">
              <span className="text-gray-600 mr-2">•</span>
              <span className="text-gray-600">{goal}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurGoal;
