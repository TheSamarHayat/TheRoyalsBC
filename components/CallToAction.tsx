import React from "react";
import Link from "next/link";
import {
  FaUsers,
  FaCircleInfo,
  FaBullseye,
  FaLocationDot,
  FaCalendar,
  FaLightbulb,
} from "react-icons/fa6";

const CallToAction = () => {
  const actionItems = [
    { icon: FaUsers, text: "WHO WE ARE", href: "/club/who-we-are" },
    { icon: FaCircleInfo, text: "WHAT WE PLAY", href: "/club/what-we-play" },
    { icon: FaBullseye, text: "WHY WE PLAY", href: "/club/why-we-play" },
    {
      icon: FaLocationDot,
      text: "WHERE WE PLAY",
      href: "/club/where-we-play",
    },
    { icon: FaCalendar, text: "WHEN WE PLAY", href: "/club/when-we-play" },
    { icon: FaLightbulb, text: "HOW WE PLAY", href: "/club/how-we-play" },
  ];

  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {actionItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className="bg-primary text-white p-6 rounded-lg flex items-center gap-3 hover:bg-primary/90 transition-colors"
            >
              <IconComponent className="w-6 h-6" />
              <span className="font-medium">{item.text}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CallToAction;
