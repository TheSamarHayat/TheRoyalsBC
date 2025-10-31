import React from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaUsers,
  FaCircleInfo,
  FaBullseye,
  FaLocationDot,
  FaCalendar,
  FaLightbulb,
} from "react-icons/fa6";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    text: string;
  }>;
}

const pageData = {
  "who-we-are": {
    title: "Who We Are",
    icon: FaUsers,
    description:
      "Learn about The Royals Badminton Club and our mission to promote badminton excellence in East London.",
    content: {
      subtitle: "About Us",
      sections: [
        {
          type: "paragraph",
          text: "The Royals Badminton Club (Club Registration Number: CL008352) is a non-profit community club affiliated with Badminton England, the national governing body for badminton in England. We are dedicated to promoting both mental and physical well-being through the sport of badminton.",
        },
        {
          type: "paragraph",
          text: "Our journey began in 2017 as a social group united by a shared passion for badminton. Over time, as we participated in tournaments and competitions, the need for an official identity became clear. In response, we proudly registered as The Royals Badminton Club in 2024, formalizing our commitment to fostering a supportive, competitive, and inclusive environment for players.",
        },
        {
          type: "paragraph",
          text: "Based in East London, we provide a sophisticated platform for high-intermediate, advanced, and expert players to connect, compete, and thrive.",
        },
        {
          type: "paragraph",
          text: "Join our community as we continue to inspire excellence, camaraderie, and well-being through the game we love.",
        },
        {
          type: "footer",
          text: "The Royals Badminton Club\nLondon | England | United Kingdom",
        },
      ],
    },
    comingSoon: false,
  },
  "where-we-play": {
    title: "Where We Play",
    icon: FaLocationDot,
    description:
      "Find out about our playing locations and venues across East London and Greater London.",
    content: {
      subtitle: "We Play at",
      sections: [
        {
          type: "heading",
          text: "Ark Isaac Newton Academy",
        },
        {
          type: "address",
          text: "1 Cricklefield Pl, Ilford IG1 1FY\nEssex | England | United Kingdom",
        },
        {
          type: "schedule",
          text: "Every Friday: 20:00 to 22:00 (2-Hour Session)",
        },
      ],
    },
    comingSoon: false,
  },
  "how-we-play": {
    title: "How We Play",
    icon: FaLightbulb,
    description:
      "Learn about our playing methods, training approaches, and coaching philosophy.",
    content: {
      subtitle: null,
      sections: [
        {
          type: "paragraph",
          text: "We offer an organized and enjoyable badminton experience with the following features:",
        },
        {
          type: "heading",
          text: "Game Formats:",
        },
        {
          type: "list",
          items: [
            "Men's Doubles",
            "Mixed Doubles",
            "Men's Singles (Occasionally)",
            "Competitive Matches",
          ],
        },
        {
          type: "heading",
          text: "Player Requirements:",
        },
        {
          type: "list",
          items: [
            "Adult sessions only",
            "High intermediate, advanced, and expert-level players only",
          ],
        },
        {
          type: "heading",
          text: "Shuttle Quality:",
        },
        {
          type: "paragraph",
          text: "Premium-grade feather shuttlecocks for the best playing experience",
        },
        {
          type: "heading",
          text: "Playing Model:",
        },
        {
          type: "list",
          items: [
            "Fair and Impartial rotation system to provide equal playing opportunities for all",
            "Pay-and-Play model: Only pay for the sessions you attend",
            "No membership obligations",
            "No long-term commitments",
          ],
        },
        {
          type: "heading",
          text: "Hassle-Free Experience:",
        },
        {
          type: "list",
          items: [
            "No annual registration fee",
            "No monthly subscriptions",
            "No lengthy forms to fill out",
            "First-come, first-served system",
          ],
        },
        {
          type: "heading",
          text: "Flexibility:",
        },
        {
          type: "list",
          items: [
            "Join any session listed on Meetup that fits your schedule",
            "Simply contribute to the session cost and enjoy",
          ],
        },
        {
          type: "heading",
          text: "Important Notes:",
        },
        {
          type: "paragraph",
          text: "We are unable to accommodate juniors (children) or vulnerable individuals at this time",
        },
        {
          type: "paragraph",
          text: "The environment is designed exclusively for skilled adult players seeking competitive and high-level play",
        },
        {
          type: "paragraph",
          text: "Thank you for your understanding and cooperation.",
        },
      ],
    },
    comingSoon: false,
  },
  "when-we-play": {
    title: "When We Play",
    icon: FaCalendar,
    description:
      "Check our playing schedules and session timings for different activities.",
    content: {
      subtitle: "We Play",
      sections: [
        {
          type: "schedule",
          text: "Every Friday: 20:00 to 22:00 (2-Hour Session)",
        },
        {
          type: "heading",
          text: "Venue:",
        },
        {
          type: "address",
          text: "Ark Isaac Newton Academy\n1 Cricklefield Pl, Ilford IG1 1FY\nEssex | England | United Kingdom",
        },
      ],
    },
    comingSoon: false,
  },
  "what-we-play": {
    title: "What We Play",
    icon: FaCircleInfo,
    description:
      "Discover the types of badminton activities and games we organize at The Royals Badminton Club.",
    content: {
      subtitle: null,
      sections: [],
    },
    comingSoon: true,
  },
  "why-we-play": {
    title: "Why We Play",
    icon: FaBullseye,
    description:
      "Understand our motivation and the values that drive our passion for badminton.",
    content: {
      subtitle: null,
      sections: [],
    },
    comingSoon: true,
  },
};

export default async function DynamicPage({ params }: PageProps) {
  const { text } = await params;
  const pageInfo = pageData[text as keyof typeof pageData];

  if (!pageInfo) {
    notFound();
  }

  const IconComponent = pageInfo.icon;

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <Link
            href="/"
            className="inline-flex items-center !text-white/80 hover:!text-white transition-colors mb-8 cursor-pointer"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <IconComponent className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="!text-white mb-4">{pageInfo.title}</h1>
            <p className="text-xl !text-white/90 max-w-2xl mx-auto">
              {pageInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="container mx-auto">
            {pageInfo.comingSoon ? (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-gray-800 mb-4">Coming Soon</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We are working hard to bring you detailed information about{" "}
                    {pageInfo.title.toLowerCase()}. Check back soon for updates!
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
                    <span className="text-yellow-800 font-semibold">
                      Under Development
                    </span>
                  </div>
                  <p className="text-yellow-700">
                    We&apos;re working hard to bring you detailed information
                    about {pageInfo.title.toLowerCase()}. Check back soon for
                    updates!
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                  >
                    <FaArrowLeft className="w-4 h-4 mr-2" />
                    Return to Home
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8">
                {pageInfo.content.subtitle && (
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {pageInfo.content.subtitle}
                  </h2>
                )}
                <div className="space-y-6">
                  {pageInfo.content.sections.map((section, index) => {
                    if (section.type === "paragraph") {
                      return (
                        <p
                          key={index}
                          className="text-lg text-gray-600 leading-relaxed"
                        >
                          {section.text}
                        </p>
                      );
                    }
                    if (section.type === "heading") {
                      return (
                        <h3
                          key={index}
                          className="text-xl font-semibold text-gray-800 mt-6 mb-3"
                        >
                          {section.text}
                        </h3>
                      );
                    }
                    if (
                      section.type === "list" &&
                      "items" in section &&
                      section.items
                    ) {
                      return (
                        <ul
                          key={index}
                          className="list-disc list-inside space-y-2 text-gray-600"
                        >
                          {section.items.map(
                            (item: string, itemIndex: number) => (
                              <li key={itemIndex} className="text-lg">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      );
                    }
                    if (section.type === "address") {
                      return (
                        <div
                          key={index}
                          className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                        >
                          <p className="text-lg text-gray-700 whitespace-pre-line">
                            {section.text}
                          </p>
                        </div>
                      );
                    }
                    if (section.type === "schedule") {
                      return (
                        <div
                          key={index}
                          className="bg-primary/10 border border-primary/20 rounded-lg p-4"
                        >
                          <p className="text-lg font-semibold text-primary">
                            {section.text}
                          </p>
                        </div>
                      );
                    }
                    if (section.type === "footer") {
                      return (
                        <div
                          key={index}
                          className="pt-6 mt-6 border-t border-gray-200"
                        >
                          <p className="text-lg text-gray-700 whitespace-pre-line text-center">
                            {section.text}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>

                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                  >
                    <FaArrowLeft className="w-4 h-4 mr-2" />
                    Return to Home
                  </Link>
                </div>
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
