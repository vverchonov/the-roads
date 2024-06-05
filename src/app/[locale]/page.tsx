import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("InitialPopup");
  return <div className="text-black">1</div>;
}
