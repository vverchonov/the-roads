import { useTranslations } from "next-intl";
import { Advantages } from "./advantages";
import { RegularForm } from "./regular-form";

export const ServiceContainer = (props: any) => {
  const t = useTranslations("form");

  const labels = [
    t("1"),
    t("2"),
    t("3"),
    t("4"),
    t("5"),
    t("6"),
    t("7"),
    t("8"),
  ];

  return (
    <section className="mt-16 flex flex-col gap-8 bg-white w-full text-center ">
      {/* p-4 md:p-24 */}
      <div className="w-full min-h-[30vh] bg-green-200 flex justify-center items-center">
        <p className="text-8xl font-semibold text-white text-center ">
          {props.serviceName}
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-4 p-4 md:p-24">
        <div className="w-full md:w-5/12 p-2 flex justify-center">
          <Advantages advantages={props.advantages} />
        </div>
        <div className="w-full md:w-7/12 p-2">
          <RegularForm labels={labels} />
        </div>
      </div>
    </section>
  );
};
