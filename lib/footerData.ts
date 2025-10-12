export interface FooterData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  socialLinks: {
    icon: string;
    href: string;
    label: string;
  }[];
  copyright: string;
  companyInfo?: {
    name: string;
    year: number;
  };
}

export const footerData: FooterData = {
  logo: {
    src: "/images/logoblue.png",
    alt: "The Royals Badminton Club",
    width: 200,
    height: 200,
  },
  title: "The Royals BC",
  description:
    "Connecting advanced badminton players across East and Greater London, The Royals Badminton Club offers high-level competition and a vibrant, inclusive community.",
  socialLinks: [
    {
      icon: "Facebook",
      href: "https://facebook.com/theroyalsbc",
      label: "Facebook",
    },
    {
      icon: "Instagram",
      href: "https://instagram.com/theroyalsbc",
      label: "Instagram",
    },
    { icon: "Mail", href: "mailto:info@theroyalsbc.co.uk", label: "Email" },
    {
      icon: "Twitter",
      href: "https://twitter.com/theroyalsbc",
      label: "Twitter",
    },
    {
      icon: "Youtube",
      href: "https://youtube.com/@theroyalsbc",
      label: "YouTube",
    },
    { icon: "Music", href: "https://tiktok.com/@theroyalsbc", label: "TikTok" },
    {
      icon: "MessageCircle",
      href: "https://medium.com/@theroyalsbc",
      label: "Medium",
    },
    { icon: "Phone", href: "https://wa.me/447765813008", label: "WhatsApp" },
    { icon: "Send", href: "https://t.me/theroyalsbc", label: "Telegram" },
  ],
  copyright: "© 2024. All Rights Reserved.",
  companyInfo: {
    name: "The Royals Badminton Club",
    year: 2024,
  },
};

export function getFooterData(): FooterData {
  return footerData;
}

export function updateFooterData(updates: Partial<FooterData>): FooterData {
  return { ...footerData, ...updates };
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function generateCopyright(companyName: string, year?: number): string {
  const currentYear = year || getCurrentYear();
  return `© ${currentYear} ${companyName}. All Rights Reserved.`;
}
