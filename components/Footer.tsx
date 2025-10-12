import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getFooterData, getCurrentYear } from "@/lib/footerData";
import {
  Facebook,
  Instagram,
  Mail,
  Twitter,
  Youtube,
  Music,
  MessageCircle,
  Send,
  Phone,
} from "lucide-react";

const Footer = () => {
  const footerData = getFooterData();

  // Icon mapping
  const iconMap = {
    Facebook,
    Instagram,
    Mail,
    Twitter,
    Youtube,
    Music,
    MessageCircle,
    Phone,
    Send,
  };

  return (
    <footer className="bg-primary !text-white py-12">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center space-y-4">
            {/* Circular Logo */}
            <Image
              src={footerData.logo.src}
              alt={footerData.logo.alt}
              width={footerData.logo.width}
              height={footerData.logo.height}
              className="rounded-full"
            />
            {/* Main Title */}
            <h2 className="text-2xl font-bold !text-white">
              {footerData.title}
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="!text-white/90 text-lg leading-relaxed">
              {footerData.description}
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center gap-4">
            {footerData.socialLinks.map((social, index) => {
              const IconComponent =
                iconMap[social.icon as keyof typeof iconMap];
              return (
                <Link
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-white/20 w-full">
            <p className="!text-white/70 text-sm">
              {footerData.companyInfo
                ? `© ${footerData.companyInfo.year || getCurrentYear()} ${
                    footerData.companyInfo.name
                  }. All Rights Reserved.`
                : footerData.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
