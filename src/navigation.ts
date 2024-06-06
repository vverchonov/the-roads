import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";
export const defaultLocale = "en" as const;
export const locales = ["en", "ua", "ru"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    ua: "/pathnames",
    ru: "/pathnames",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  });
