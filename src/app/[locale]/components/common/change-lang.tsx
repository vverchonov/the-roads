"use client";

import Link from "next/link";

export const ChangeLang = (props: any) => {
  const path = window.location.pathname.substring(3);

  return (
    <Link
      href={props.locale + path}
      className="block text-white text-2xl scale-hover"
    >
      <img className="object-contain w-8" src={props.text} />
    </Link>
  );
};
