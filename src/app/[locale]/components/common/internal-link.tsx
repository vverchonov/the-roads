"use client";

import Link from "next/link";

export const InternalLink = (props: any) => {
  const local = window.location.pathname.slice(0, 3);

  return (
    <Link
      href={local + "/" + props.href}
      className={
        "block text-black text-xl transition translate duration-500 hover:scale-[1.1]" +
        props.classExtra
      }
    >
      {props.text}
    </Link>
  );
};
