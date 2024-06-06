import { Advantages } from "./advantages";
import { RegularForm } from "./regular-form";

export const ServiceContainer = (props: any) => {
  return (
    <section className="min-h-screen mt-16 flex flex-col gap-8 bg-white w-full text-center ">
      {/* p-4 md:p-24 */}
      <div className="w-full min-h-[30vh] bg-green-200 flex justify-center items-center">
        <p className="text-8xl font-semibold text-white text-center ">
          {props.serviceName}
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-4 p-4 md:p-24">
        <div className="w-full md:w-5/12 p-2 border flex justify-center">
          <Advantages advantages={props.advantages} />
        </div>
        <div className="w-full md:w-7/12 p-2">
          <RegularForm />
        </div>
      </div>
    </section>
  );
};
