import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCoachBySlug } from "@/lib/coachData";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";

interface CoachPageProps {
  params: {
    name: string;
  };
}

export default function CoachPage({ params }: CoachPageProps) {
  const coach = getCoachBySlug(params.name);

  if (!coach) {
    notFound();
  }

  return (
    <div className=" bg-gray-50">
      <section className="bg-primary text-white py-16">
        <div className="container">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-center">
            <div className="md:col-span-3 hidden md:flex justify-center md:justify-start">
              <Image
                src={coach.image}
                alt={coach.name}
                width={300}
                height={300}
                className="rounded-lg shadow-2xl w-full max-w-[300px] h-auto"
              />
            </div>

            <div className="md:col-span-7 text-center md:text-left">
              <h1 className="!text-white text-3xl md:text-4xl font-bold mb-2">
                {coach.title}
              </h1>
              <p className="text-xl !text-white/90 mb-4 font-medium">
                {coach.subtitle}
              </p>
              <p className="text-lg mb-6 !text-white leading-relaxed">
                {coach.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <Link
                    href={`tel:${coach.phone}`}
                    className="hover:text-white/80 transition-colors !text-white text-lg"
                  >
                    {coach.phone}
                  </Link>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <Link
                    href={`mailto:${coach.email}`}
                    className="hover:text-white/80 transition-colors !text-white text-lg"
                  >
                    {coach.email}
                  </Link>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="!text-white text-lg">
                    East London & Greater London
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {coach.qualifications && coach.qualifications.length > 0 && (
        <section className="!bg-white pt-16">
          <div className="container">
            <h2 className="mb-4">Qualifications</h2>
            <ul className="space-y-4">
              {coach.qualifications.map((qualification, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">{qualification}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {coach.availability && coach.availability.length > 0 && (
        <section className="!bg-white pt-16">
          <div className="container">
            <h2 className="mb-4">Availability</h2>
            <ul className="space-y-4">
              {coach.availability.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {coach.competitiveAchievements &&
        coach.competitiveAchievements.length > 0 && (
          <section className="!bg-white pt-16">
            <div className="container">
              <h2 className="mb-4">Competitive Achievements</h2>
              <ul className="space-y-4">
                {coach.competitiveAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      {coach.coachingPhilosophy && coach.coachingPhilosophy.length > 0 && (
        <section className="!bg-white pt-16">
          <div className="container">
            <h2 className="mb-4">Coaching Philosophy</h2>
            <p className="text-gray-600 mb-4">{coach.coachingPhilosophy[0]}</p>
            <ul className="space-y-4">
              {coach.coachingPhilosophy.slice(1).map((philosophy, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">{philosophy}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {coach.coachingExpertise && coach.coachingExpertise.length > 0 && (
        <section className="!bg-white pt-16">
          <div className="container">
            <h2 className="mb-4">Coaching Expertise</h2>
            <ul className="space-y-4">
              {coach.coachingExpertise.map((expertise, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">{expertise}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {coach.keyQualities && coach.keyQualities.length > 0 && (
        <section className="!bg-white pt-16">
          <div className="container">
            <h2 className="mb-4">Key Qualities</h2>
            <ul className="space-y-4">
              {coach.keyQualities.map((quality, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-600">{quality}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {coach.summary && (
        <section className="!bg-white pt-16">
          <div className="container">
            <p className="text-lg mb-8">{coach.summary}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const { getAllCoaches } = await import("@/lib/coachData");
  const coaches = getAllCoaches();

  return coaches.map((coach) => ({
    name: coach.slug,
  }));
}
