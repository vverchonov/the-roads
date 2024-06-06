import { useTranslations } from "next-intl";
import { ServiceContainer } from "../components/blocks/form/service-container";

const HourlyPage = () => {
  const t = useTranslations("hourly");

  const advantages = [
    {
      icon: "",
      alt: t("2") + " icon",
      text: t("2"),
      bigText: t("6"),
    },
    {
      icon: "",
      alt: t("3") + " icon",
      text: t("3"),
      bigText: t("7"),
    },
    {
      icon: "",
      alt: t("4") + " icon",
      text: t("4"),
      bigText: t("8"),
    },
    {
      icon: "",
      alt: t("5") + " icon",
      text: t("5"),
      bigText: t("9"),
    },
  ];

  return <ServiceContainer advantages={advantages} serviceName={t("1")} />;
};

export default HourlyPage;
