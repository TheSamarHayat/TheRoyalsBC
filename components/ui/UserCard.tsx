import React from "react";
import Image from "next/image";
import Link from "next/link";

interface UserCardProps {
  image: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  readMoreRoute?: string;
  theme?: "white" | "blue";
}

const UserCard: React.FC<UserCardProps> = ({
  image,
  name,
  position,
  phone,
  email,
  readMoreRoute,
  theme = "white",
}) => {
  // Theme-based styling
  const isBlueTheme = theme === "blue";

  const containerClasses = isBlueTheme
    ? "w-[250px] bg-primary  rounded-lg"
    : "w-[250px] bg-white  rounded-lg";

  const nameClasses = isBlueTheme ? "!text-white mb-2" : "text-gray-800 mb-2";

  const positionClasses = isBlueTheme
    ? "!text-white/70 mb-2"
    : "text-gray-600 mb-2";

  const contactInfoLabelClasses = isBlueTheme
    ? "font-semibold !text-white !font-bold mb-1"
    : "font-semibold text-gray-800 !font-bold mb-1";

  const phoneClasses = isBlueTheme
    ? "!text-white/70 mb-1"
    : "text-gray-600 mb-1";

  const emailClasses = isBlueTheme ? "!text-white/70" : "text-gray-600";

  const readMoreClasses = isBlueTheme
    ? "!text-white hover:text-white/80 transition-colors"
    : "text-primary hover:text-primary/80 transition-colors";

  return (
    <div className={containerClasses}>
      <div className="text-start">
        <div className="mb-4">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <h4 className={nameClasses}>{name}</h4>
        <p className={positionClasses}>{position}</p>
        <div className="text-left">
          <p className={contactInfoLabelClasses}>Contact Info:</p>
          <p className={phoneClasses}>
            <Link
              href={`tel:${phone}`}
              className="hover:opacity-80 transition-opacity"
            >
              {phone}
            </Link>
          </p>
          <p className={emailClasses}>
            <Link
              href={`mailto:${email}`}
              className="hover:opacity-80 transition-opacity"
            >
              {email}
            </Link>
          </p>
          {readMoreRoute && (
            <p className="mt-1">
              <Link href={readMoreRoute} className={readMoreClasses}>
                Read More
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
