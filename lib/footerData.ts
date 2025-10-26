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
      href: "https://www.facebook.com/bctheroyals",
      label: "Facebook",
    },
    {
      icon: "Instagram",
      href: "https://www.instagram.com/theroyalsbc",
      label: "Instagram",
    },
    {
      icon: "Threads",
      href: "https://www.threads.net/@theroyalsbc",
      label: "Threads",
    },
    {
      icon: "Twitter",
      href: "https://x.com/TheRoyalsBC",
      label: "X (Twitter)",
    },
    {
      icon: "Youtube",
      href: "https://youtube.com/@theroyalsbc",
      label: "YouTube",
    },
    {
      icon: "TikTok",
      href: "https://www.tiktok.com/@theroyalsbc?_t=8qcQdnL42Hh&_r=1",
      label: "TikTok",
    },
    {
      icon: "Meetup",
      href: "https://www.meetup.com/theroyalsbc",
      label: "Meetup",
    },
    {
      icon: "WhatsApp",
      href: "https://chat.whatsapp.com/IBiAZO3J3UK81dJp0xpXS8",
      label: "WhatsApp",
    },
    {
      icon: "Telegram",
      href: "https://t.me/theroyalsbc",
      label: "Telegram",
    },
    {
      icon: "Tumblr",
      href: "https://www.tumblr.com/theroyalsbc",
      label: "Tumblr",
    },
  ],
  copyright: `© ${getCurrentYear()}. All Rights Reserved.`,
  companyInfo: {
    name: "The Royals Badminton Club",
    year: getCurrentYear(),
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
