import React from "react";
import UserCard from "./ui/UserCard";

const CoachingServices = () => {
  const coaches = [
    {
      image: "/images/hongze.png",
      name: "Hongze Wu",
      position: "Coach",
      phone: "+44 7765 813008",
      email: "hongze@theroyalsbc.co.uk",
      readMoreRoute: "/coach/hongze-wu",
    },
    {
      image: "/images/William.png",
      name: "William Jones",
      position: "Coach",
      phone: "+44 7415 250285",
      email: "william@theroyalsbc.co.uk",
      readMoreRoute: "/coach/william-jones",
    },
    {
      image: "/images/Rohail.png",
      name: "Rohail Haseeb",
      position: "Coach",
      phone: "+44 7495 954244",
      email: "rohail@theroyalsbc.co.uk",
      readMoreRoute: "/coach/rohail-haseeb",
    },
  ];

  return (
    <section className="bg-primary !text-white py-16">
      <div className="container">
        <h2 className="mb-4 !text-white">Coaching Services</h2>

        <div className="mb-4 space-y-2 !text-white">
          <p className="!text-white">
            At The Royals Badminton Club, we currently do not offer individual
            or group coaching services under the club&apos;s official capacity.
          </p>
          <p className="!text-white">
            However, we understand the importance of skill development and
            members seeking to enhance their badminton skills are welcome to
            contact our affiliated coaches directly to arrange private coaching
            sessions independently.
          </p>
          <p className="!text-white">
            Our affiliated coaches are not only highly skilled players and
            exceptional trainers but also individuals of strong moral character,
            embodying kindness, humility, and professionalism.
          </p>
          <p className="!text-white">
            They prioritize respect, integrity, and fostering a supportive
            environment in all their interactions, ensuring that players feel
            valued and encouraged.
          </p>
          <p className="!text-white">
            With a commitment to creating an inclusive and empowering
            atmosphere, our affiliated coaches are dedicated to helping players
            reach their full potential.
          </p>
          <p className="!text-white">
            For inquiries, please contact our affiliated coaches directly:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {coaches.map((coach, index) => (
            <UserCard
              key={index}
              image={coach.image}
              name={coach.name}
              position={coach.position}
              phone={coach.phone}
              email={coach.email}
              readMoreRoute={coach.readMoreRoute}
              theme="blue"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingServices;
