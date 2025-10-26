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
  professionalExperience: string;
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
    phone: "+44 7765 813008",
    email: "hongze@theroyalsbc.co.uk",
    image: "/images/hongze.png",
    title: "Coach Hongze Wu (David)",
    subtitle: "Gold Medalist Badminton Coach (China)",
    description:
      "Coach Hongze Wu is a Gold Medalist Badminton Coach from China, recognized for his deep understanding of technical precision and strategic gameplay. With over 15 years of combined playing and coaching experience, he trains athletes to perform at their peak through detailed technique correction and tactical development.",
    contactInformation: "📞 +44 7765 813008",
    professionalExperience:
      "Coach Hongze Wu is a Gold Medalist Badminton Coach from China, recognized for his deep understanding of technical precision and strategic gameplay. With over 15 years of combined playing and coaching experience, he trains athletes to perform at their peak through detailed technique correction and tactical development. Coach Hongze has successfully trained players at all levels — from beginners to tournament-level competitors — with a special focus on advanced backhand techniques and match strategy.",
    coachingExpertise: [
      "Advanced technical refinement and shot precision",
      "Competitive match strategy and tactical development",
      "Footwork, balance, and court positioning training",
      "Preparation for local and national tournaments",
      "Player fitness, agility, and endurance improvement",
    ],
    summary: "",
    qualifications: [
      "Certified Badminton Coach (China)",
      "7 years of professional competition experience",
      "8 years of dedicated coaching expertise",
      "Proven track record in advanced technical and strategic coaching",
    ],
    availability: [],
    competitiveAchievements: [
      "🥇 Gold Medalist – Men's Singles & Team Competitions, 3rd Ji'An Municipal Games",
      "🥈 Silver Medalist – Men's Doubles, 3rd Ji'An Municipal Games",
      "🏅 4th Place – Jiangxi Provincial Games",
    ],
    coachingPhilosophy: [],
    keyQualities: [
      "Expert in modern badminton techniques and strategies",
      "Clear communicator with constructive feedback",
      "Patient, detail-oriented, and supportive coach",
      "Strong leadership and game analysis skills",
      "Encouraging and innovative approach to player development",
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
    subtitle: "UKCC Level 2 Badminton Coach",
    description:
      "Coach William Jones is a passionate and highly skilled UKCC Level 2 Badminton Coach based in Ilford, London. With a strong background in national and international competition, William brings technical mastery and strategic insight to his sessions.",
    contactInformation: "📞 07415 250285",
    professionalExperience:
      "Coach William Jones is a passionate and highly skilled UKCC Level 2 Badminton Coach based in Ilford, London. With a strong background in national and international competition, William brings technical mastery and strategic insight to his sessions. He provides tailor-made badminton coaching for players of all ages. His approach emphasizes technical precision, game intelligence, and mental readiness for competition.",
    coachingExpertise: [
      "Tailor-made one-to-one badminton coaching",
      "Technical refinement and strategic development",
      "Game analysis and match preparation",
      "Confidence building and mental toughness training",
      "Footwork, agility, and endurance improvement",
    ],
    summary: "",
    qualifications: [
      "UKCC Level 2 Certified Badminton Coach (UK)",
      "15 years of competitive playing experience",
      "8 years of professional coaching experience",
      "Trained under elite national coaches and international players",
    ],
    availability: [],
    competitiveAchievements: [
      "Junior England National Squad Member (2010–2019)",
      "🏆 Three-time U19 National Champion",
      "🌍 Nine Junior U19 International Tournament Victories",
      "🥉 Semi-finalist – Men's Doubles, 2023 English National Championships",
    ],
    coachingPhilosophy: [],
    keyQualities: [
      "Clear and motivational communicator",
      "Strong technical and tactical understanding",
      "Adaptable to each player's individual goals",
      "Focused on long-term growth and consistency",
      "Positive, encouraging, and disciplined coaching style",
    ],
  },
  {
    name: "Rohail Haseeb",
    slug: "rohail-haseeb",
    position: "Coach",
    phone: "+44 7495 954244",
    email: "rohail@theroyalsbc.co.uk",
    image: "/images/Rohail.png",
    title: "Coach Rohail Haseeb",
    subtitle: "Certified Coach by the Pakistan Badminton Federation",
    description:
      "Coach Rohail Haseeb is a National Badminton Player of Pakistan, known for his expertise in doubles strategy and performance coaching. With a strong competitive background and international exposure, he provides a dynamic and disciplined coaching environment.",
    contactInformation: "📞 +44 7495 954244",
    professionalExperience:
      "Coach Rohail Haseeb is a National Badminton Player of Pakistan, known for his expertise in doubles strategy and performance coaching. With a strong competitive background and international exposure, he provides a dynamic and disciplined coaching environment. Rohail's approach focuses on technical mastery, mental strength, and physical conditioning, helping players improve precision, endurance, and match awareness.",
    coachingExpertise: [
      "Advanced doubles tactics and coordination training",
      "Technical refinement: footwork, racket control, and shot accuracy",
      "Match analysis and tactical gameplay planning",
      "Mental preparation and competitive mindset building",
      "Physical fitness and injury prevention integration",
    ],
    summary: "",
    qualifications: [
      "Certified by the Pakistan Badminton Federation",
      "National-level competitive badminton player",
      "Extensive doubles specialization and tactical expertise",
      "Experienced in coaching both singles and doubles players",
    ],
    availability: [],
    competitiveAchievements: [
      "🥇 Gold Medalist – Men's Doubles, U19 National Championships (2016–2017)",
      "🥇 Gold Medalist – Men's Doubles, 73rd Punjab Games (2022)",
      "🥈 Silver Medalist – All Pakistan Intervarsity (2022)",
      "🥇 Gold Medalist – Men's Doubles, Gujranwala District Championships (2020–2022)",
      "🥇 Gold Medalist – Men's Doubles, Gujranwala Divisional Championships (2021–2022)",
    ],
    coachingPhilosophy: [],
    keyQualities: [
      "Doubles specialist with strategic insight",
      "Energetic, motivational, and disciplined coaching style",
      "Focused on both mental and physical development",
      "Empowers players with confidence and resilience",
      "Dedicated to long-term player growth and success",
    ],
  },
];

export function getCoachBySlug(slug: string): CoachData | undefined {
  return coachesData.find((coach) => coach.slug === slug);
}

export function getAllCoaches(): CoachData[] {
  return coachesData;
}
