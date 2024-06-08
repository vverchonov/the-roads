"use client";
import Link from "next/link";

export const LogoLink = () => {
  const local = window.location.pathname.slice(0, 3);

  return (
    <Link
      href={local}
      className="flex items-center space-x-3 rtl:space-x-reverse scale-hover text-white text-2xl"
    >
      THE ROADS
    </Link>
  );
};
