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
    <section className="mt-16 flex flex-col gap-8 bg-white w-full text-center justify-center">
      <div className="w-full min-h-[30vh] bg-green-200 flex justify-center items-center">
        <p className="text-8xl font-semibold text-white text-center ">
          {props.serviceName}
        </p>
      </div>
      <div className="flex flex-col max-w-[2000px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-4 px-4 md:px-24">
          <div className="w-full lg:w-8/12 p-2 justify-center flex">
            <Advantages advantages={props.advantages} />
          </div>
          <div className="w-full lg:w-4/12 flex p-2">
            <RegularForm extraFields={props.form} labels={labels} />
          </div>
        </div>
      </div>
    </section>
  );
};
