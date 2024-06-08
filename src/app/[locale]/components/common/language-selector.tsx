"use client";

import { usePathname } from "next/navigation";

export const LanguageSelector = () => {
  const local = window.location.pathname.slice(1, 3);
  const path = window.location.pathname.substring(3);

  function onSelect(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${locale}${path}`;
    console.log("newPath = ", newPath);
    window.open(newPath, "_self");
  }

  return (
    <select
      value={local}
      onChange={(e: any) => {
        onSelect(e.target.value);
      }}
      id="countries"
      className="bg-transparent border-none fill-white text-white text-sm rounded-lg focus:ring-transparent focus:border-transparent"
    >
      <option value="en">eng</option>
      <option value="ua">
        <img
          className="object-contain w-8"
          src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/UA.svg"
        />
      </option>
      <option value="ru">ru</option>
    </select>
  );
};
