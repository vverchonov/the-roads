import { useTranslations } from "next-intl";

export const VehiclesBlock = () => {
  const t = useTranslations("vehicles");
  return (
    <div className="min-h-[20vh] flex flex-col gap-8 px-4 md:px-24 w-full max-w-[2000px]">
      <h2 className="text-5xl font-semibold text-black text-center">
        {t("1")}
      </h2>
      <div className="flex flex-col md:flex-row gap-8 bg-transparent w-full text-center">
        <div className="md:w-1/2 w-full gap-4 p-4 justify-center items-center flex flex-col md:flex-row">
          <img
            alt={t("4")}
            className="object-contain rounded-lg h-[25vh] aspect-video border"
          />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">{t("2")}</p>
            <p className="text-xl">{t("3")}</p>
          </div>
        </div>
        <div className="md:w-1/2 w-full gap-4 p-4 justify-center items-center flex flex-col md:flex-row">
          <img
            alt={t("7")}
            className="object-contain rounded-lg h-[25vh] w-auto aspect-video border"
          />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">{t("5")}</p>
            <p className="text-xl">{t("6")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
