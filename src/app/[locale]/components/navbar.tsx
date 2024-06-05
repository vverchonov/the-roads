import Link from "next/link";

const Navbar = () => {
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
            <Link
              className="scale-hover text-white text-2xl"
              href="https://www.linkedin.com/in/viacheslav-verchonov/"
              rel="noopener noreferrer"
              target="_blank"
            >
              eng
            </Link>
            <Link
              className="scale-hover text-white text-2xl"
              href="https://drive.google.com/file/d/10iQh9-wnpBgQxl3FbOhk0E6Tuw--4pAi/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              ukr
            </Link>
            <Link
              className="scale-hover text-white text-2xl"
              href="https://github.com/vverchonov"
              rel="noopener noreferrer"
              target="_blank"
            >
              ru
            </Link>
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
              <Link
                href="/"
                className="block text-white text-2xl scale-hover"
                aria-current="page"
              >
                Airport
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-white text-2xl scale-hover"
              >
                City
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block text-white text-2xl scale-hover"
              >
                Hourly
              </Link>
            </li>
            <li>
              <Link
                href="/404-page-you-can-type-any-url-and-get-it"
                className="block text-white text-2xl scale-hover"
              >
                Ontario
              </Link>
            </li>
            <li>
              <Link
                href="/404-page-you-can-type-any-url-and-get-it"
                className="block text-white text-2xl scale-hover"
              >
                Special
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
