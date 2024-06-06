import { useTranslations } from "next-intl";
import Link from "next/link";
import { InternalLink } from "./InternalLink";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="mt-auto max-z bg-blue p-4 flex flex-col gap-3 justify-center text-2xl bg-black">
      <div className="flex gap-3 justify-around w-full">
        <InternalLink text={t("1")} href={"/about"} />
        <InternalLink text={t("2")} href={"/agency"} />
        <InternalLink text={t("3")} href={"/contact"} />
      </div>
      {/* <div className="flex gap-3 justify-center">email@gmail.com</div> */}
    </footer>
  );
}
