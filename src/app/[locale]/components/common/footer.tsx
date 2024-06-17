import { useTranslations } from "next-intl";
import { InternalLink } from "./internal-link";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="mt-auto max-z bg-blue p-4 flex flex-col gap-3 justify-center text-2xl bg-stone-900">
      <div className="flex gap-3 justify-around w-full max-w-[2000px] mx-auto">
        <InternalLink classExtra={"text-white"} text={t("1")} href={"/about"} />
        <InternalLink
          classExtra={"text-white"}
          text={t("2")}
          href={"/agency"}
        />
        <InternalLink
          classExtra={"text-white"}
          text={t("3")}
          href={"/contact"}
        />
      </div>
    </footer>
  );
}
