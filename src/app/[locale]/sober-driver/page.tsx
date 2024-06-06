import { useTranslations } from "next-intl";
import { ServiceContainer } from "../components/blocks/form/service-container";

const SoberDriverPage = () => {
  const t = useTranslations("sober");

  const advantages = [
    {
      icon: "",
      alt: t("2") + " icon",
      text: t("2"),
      bigText: t("9"),
    },
    {
      icon: "",
      alt: t("3") + " icon",
      text: t("3"),
      bigText: t("10"),
    },
    {
      icon: "",
      alt: t("4") + " icon",
      text: t("4"),
      bigText: t("11"),
    },
    {
      icon: "",
      alt: t("5") + " icon",
      text: t("5"),
      bigText: t("12"),
    },
    {
      icon: "",
      alt: t("6") + " icon",
      text: t("6"),
      bigText: t("13"),
    },
    {
      icon: "",
      alt: t("7") + " icon",
      text: t("6"),
      bigText: t("14"),
    },
    {
      icon: "",
      alt: t("8") + " icon",
      text: t("6"),
      bigText: t("15"),
    },
  ];

  return <ServiceContainer advantages={advantages} serviceName={t("1")} />;
};

export default SoberDriverPage;
