import Link from "next/link";
import { InternalLink } from "./internal-link";
import { useTranslations } from "next-intl";
import { ChangeLang } from "./change-lang";

const Navbar = () => {
  const t = useTranslations("navbar");
  return (
    <nav className="max-z bg-blue fixed w-full z-20 top-0 start-0 bg-green-600">
      <div className="flex flex-wrap items-center justify-between p-4">
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse scale-hover text-white text-2xl"
          href="/"
        >
          THE ROADS
        </Link>

        <div className="flex md:order-2 space-x-3 items-center md:space-x-0 rtl:space-x-reverse">
          <div className="flex gap-3 justify-center">
            <ChangeLang text={"eng"} locale={"/en"} />
            <ChangeLang text={"ua"} locale={"/ua"} />
            <ChangeLang text={"ru"} locale={"/ru"} />
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center m-auto justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <InternalLink text={t("1")} href={"/airport"} />
            </li>
            <li>
              <InternalLink text={t("2")} href={"/city"} />
            </li>
            <li>
              <InternalLink text={t("3")} href={"/hourly"} />
            </li>
            <li>
              <InternalLink text={t("4")} href={"/sober-driver"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
