import React from "react";
import Link from "next/link";
import { Users, Info, Target, MapPin, Calendar, Lightbulb } from "lucide-react";

const CallToAction = () => {
  const actionItems = [
    { icon: Users, text: "WHO WE ARE", href: "/who-we-are" },
    { icon: Info, text: "WHAT WE PLAY", href: "/what-we-play" },
    { icon: Target, text: "WHY WE PLAY", href: "/why-we-play" },
    { icon: MapPin, text: "WHERE WE PLAY", href: "/where-we-play" },
    { icon: Calendar, text: "WHEN WE PLAY", href: "/when-we-play" },
    { icon: Lightbulb, text: "HOW WE PLAY", href: "/how-we-play" },
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
