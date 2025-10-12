export interface CoachData {
  name: string;
  slug: string;
  position: string;
  phone: string;
  email: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  contactInformation: string;
  coachingExpertise: string[];
  summary: string;
  qualifications: string[];
  availability: string[];
  competitiveAchievements: string[];
  coachingPhilosophy: string[];
  keyQualities: string[];
}

export const coachesData: CoachData[] = [
  {
    name: "Hongze Wu",
    slug: "hongze-wu",
    position: "Coach",
    phone: "+447765 813008",
    email: "hongze@theroyalsbc.co.uk",
    image: "/images/hongze.png",
    title: "Coach Hongze Wu",
    subtitle: "Gold Medalist Coach - China",
    description:
      "With over 7 years of professional competition experience and 8 years of dedicated coaching expertise, Coach Hongze is a distinguished badminton coach specializing in competitive strategies and advanced technique improvements.",
    contactInformation: "",
    coachingExpertise: [
      "Strategic coaching in competitive badminton",
      "Specialization in backhand technique refinement",
      "Experience coaching players at all levels, from beginners to higher intermediate",
      "Focus on preparing athletes for competitive success",
    ],
    summary:
      "Coach Hongze’s deep understanding of professional badminton, combined with his extensive coaching experience, makes him an exceptional choice for players looking to improve their skills, master strategies, and gain a competitive edge in the sport.",
    qualifications: [],
    availability: [],
    competitiveAchievements: [
      "Gold Medalist – Men's Singles and Team Competitions, 3rd Ji'An Municipal Games",
      "Silver Medalist – Men's Doubles, 3rd Ji'An Municipal Games",
      "4th Place – Jiangxi Provincial Games",
    ],
    coachingPhilosophy: [],
    keyQualities: [
      "Expert in badminton techniques and strategies",
      "Clear communicator with constructive feedback",
      "Patient and adaptable to player needs",
      "Encouraging, positive, and goal-oriented",
      "Detail-oriented, focusing on technical improvements",
      "Strong leadership and team-building skills",
      "Knowledgeable in fitness and injury prevention",
      "Strategic mindset with game analysis expertise",
      "Supportive mentor for mental and emotional aspects",
      "Innovative and open to new training methods",
      "Skilled in sports psychology",
    ],
  },
  {
    name: "William Jones",
    slug: "william-jones",
    position: "Coach",
    phone: "07415 250285",
    email: "william@theroyalsbc.co.uk",
    image: "/images/William.png",
    title: "Coach William Jones",
    subtitle: "Professional Badminton Coach",
    description:
      "Coach William Jones combines his extensive competitive experience with a passion for coaching to provide high-quality instruction tailored to each player's needs. His background as a national-level player and his dedication to continuous improvement make him an excellent choice for badminton players looking to elevate their game.",
    contactInformation: "",
    coachingExpertise: [],
    summary: "",
    qualifications: [
      "UKCC Level 2 Badminton Coach",
      "Coach William Jones combines his extensive competitive experience with a passion for coaching to provide high-quality instruction tailored to each player's needs. His background as a national-level player and his dedication to continuous improvement make him an excellent choice for badminton players looking to elevate their game.",
    ],
    availability: [
      "Available for coaching all levels",
      "Specific availability confirmed upon enquiry",
    ],
    competitiveAchievements: [
      "Junior England National Squad member (2010-2019)",
      "Three U19 National titles",
      "Nine Junior U19 International tournament victories",
      "Semi-finalist in Men's Doubles at the 2023 English National Championships",
    ],
    coachingPhilosophy: [
      "William is dedicated to helping players of all ages and levels develop their skills and enhance their gameplay. His coaching approach focuses on:",
      "Tailor-made sessions to meet individual needs",
      "Technical improvements",
      "Strategic development",
      "Mental readiness",
    ],
    keyQualities: [],
  },
  {
    name: "Rohail Haseeb",
    slug: "rohail-haseeb",
    position: "Coach",
    phone: "+447495954244",
    email: "rohail@theroyalsbc.co.uk",
    image: "/images/Rohail.png",
    title: "Coach Rohail Haseeb",
    subtitle: "Pakistan",
    description:
      "Coach Rohail Haseeb is dedicated to fostering player development, helping athletes achieve their full potential on and off the court. His experience as a national-level player combined with his comprehensive coaching approach makes him an excellent choice for badminton players looking to elevate their game across all aspects of the sport.",
    contactInformation: "",
    coachingExpertise: [
      "Expert Doubles Specialist: Advanced doubles tactics and strategies, focusing on coordination, positioning, and tactical play.",
      "Technical Proficiency: Refinement of key badminton skills, including footwork, racket control, and shot precision.",
      "Competitive Mindset Training: Instilling mental toughness, game analysis, and adaptability under pressure.",
      "Tailored Coaching: Personalized sessions for beginners to advanced players, focusing on individual growth in both singles and doubles play.",
      "Physical Conditioning and Injury Prevention: Integration of fitness training to enhance endurance, agility, and strength, with emphasis on injury prevention.",
    ],
    summary:
      "Coach Rohail Haseeb is dedicated to fostering player development, helping athletes achieve their full potential on and off the court. His experience as a national-level player combined with his comprehensive coaching approach makes him an excellent choice for badminton players looking to elevate their game across all aspects of the sport.",
    qualifications: [],
    availability: [],
    competitiveAchievements: [],
    coachingPhilosophy: [],
    keyQualities: [],
  },
];

export function getCoachBySlug(slug: string): CoachData | undefined {
  return coachesData.find((coach) => coach.slug === slug);
}

export function getAllCoaches(): CoachData[] {
  return coachesData;
}
