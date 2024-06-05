import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto max-z bg-blue p-4 flex flex-col gap-3 justify-center text-2xl bg-black">
      <div className="flex gap-3 justify-around w-full">
        <Link
          className="scale-hover text-white"
          href="https://www.linkedin.com/in/viacheslav-verchonov/"
          rel="noopener noreferrer"
          target="_blank"
        >
          About
        </Link>
        <Link
          className="scale-hover text-white"
          href="https://drive.google.com/file/d/10iQh9-wnpBgQxl3FbOhk0E6Tuw--4pAi/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          Agency
        </Link>
        <Link
          className="scale-hover text-white"
          href="https://github.com/vverchonov"
          rel="noopener noreferrer"
          target="_blank"
        >
          Contact
        </Link>
      </div>
      {/* <div className="flex gap-3 justify-center">email@gmail.com</div> */}
    </footer>
  );
}
