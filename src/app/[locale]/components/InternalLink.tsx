"use client";

import Link from "next/link";

export const InternalLink = (props: any) => {
  const local = window.location.pathname.slice(0, 3);

  return (
    <Link
      href={local + "/" + props.href}
      className="block text-white text-2xl scale-hover"
    >
      {props.text}
    </Link>
  );
};
