import React from "react";
import Link from "next/link";
import { FaMeetup, FaWhatsapp } from "react-icons/fa6";

const JoinUsPage = () => {
  const communityData = [
    {
      id: "meetup",
      title: "MeetUp",
      description:
        "Join us on Meetup to participate in our weekly badminton sessions and connect with like-minded players.",
      href: "https://www.meetup.com/theroyalsbc",
      icon: FaMeetup,
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      description:
        "Join us on WhatsApp to stay updated on all upcoming events, badminton activities, announcements, and important updates.",
      href: "https://chat.whatsapp.com/IBiAZO3J3UK81dJp0xpXS8",
      icon: FaWhatsapp,
    },
  ];

  return (
    <div className="bg-white py-[64px] px-4 ">
      <div className="container">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Join Our Community
        </h1>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto ">
          {communityData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="flex-1 bg-primary p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <p className="!text-white text-lg mb-6">{item.description}</p>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 font-bold flex gap-2 bg-white text-primary rounded-md w-fit hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <IconComponent className="text-xl" />
                  <span>{item.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
