import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, Info, Target, MapPin, Calendar, Lightbulb } from "lucide-react";

interface PageProps {
  params: {
    text: string;
  };
}

const pageData = {
  "who-we-are": {
    title: "Who We Are",
    icon: Users,
    description: "Learn about The Royals Badminton Club and our mission to promote badminton excellence in East London.",
    content: "We are a dedicated community of badminton enthusiasts committed to fostering excellence, diversity, and sportsmanship in East London and Greater London.",
    comingSoon: true,
  },
  "what-we-play": {
    title: "What We Play",
    icon: Info,
    description: "Discover the types of badminton activities and games we organize at The Royals Badminton Club.",
    content: "We focus on competitive badminton matches, training sessions, and tournaments designed for upper intermediate, advanced, and expert players.",
    comingSoon: true,
  },
  "why-we-play": {
    title: "Why We Play",
    icon: Target,
    description: "Understand our motivation and the values that drive our passion for badminton.",
    content: "We play to promote physical fitness, mental well-being, community building, and the development of badminton as a prominent sport in London.",
    comingSoon: true,
  },
  "where-we-play": {
    title: "Where We Play",
    icon: MapPin,
    description: "Find out about our playing locations and venues across East London and Greater London.",
    content: "We have multiple venues across East London and Greater London, with facilities that cater to our high-level training and competitive needs.",
    comingSoon: true,
  },
  "when-we-play": {
    title: "When We Play",
    icon: Calendar,
    description: "Check our playing schedules and session timings for different activities.",
    content: "We have regular sessions throughout the week, with specific timings for different skill levels and activities.",
    comingSoon: true,
  },
  "how-we-play": {
    title: "How We Play",
    icon: Lightbulb,
    description: "Learn about our playing methods, training approaches, and coaching philosophy.",
    content: "We emphasize technical excellence, strategic thinking, fair play, and continuous improvement through structured training and competitive play.",
    comingSoon: true,
  },
};

export default function DynamicPage({ params }: PageProps) {
  const pageInfo = pageData[params.text as keyof typeof pageData];

  if (!pageInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = pageInfo.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <IconComponent className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageInfo.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {pageInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {pageInfo.comingSoon ? (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h2>
                  <p className="text-lg text-gray-600 mb-6">{pageInfo.content}</p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
                    <span className="text-yellow-800 font-semibold">Under Development</span>
                  </div>
                  <p className="text-yellow-700">
                    We&apos;re working hard to bring you detailed information about {pageInfo.title.toLowerCase()}. 
                    Check back soon for updates!
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Return to Home
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{pageInfo.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{pageInfo.content}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(pageData).map((text) => ({
    text,
  }));
}
