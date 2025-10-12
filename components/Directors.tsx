import React from "react";
import UserCard from "./ui/UserCard";

const Directors = () => {
  const directors = [
    {
      image: "/images/directorone.jpeg",
      name: "Intizar Ahmad",
      position: "Director",
      phone: "+44 7774411430",
      email: "intizar@theroyalsbc.co.uk",
      readMoreRoute: "/director/intizar-ahmad",
    },
    {
      image: "/images/directortwo.png",
      name: "Moiz Ahmed",
      position: "Director",
      phone: "+44 7947 567274",
      email: "moiz@theroyalsbc.co.uk",
      readMoreRoute: "/director/moiz-ahmed",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Directors
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {directors.map((director, index) => (
            <UserCard
              key={index}
              image={director.image}
              name={director.name}
              position={director.position}
              phone={director.phone}
              email={director.email}
              // readMoreRoute={director.readMoreRoute}
              theme="white"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directors;
