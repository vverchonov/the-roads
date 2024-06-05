export const VehiclesBlock = () => {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-24 w-full">
      <h2 className="text-5xl font-semibold text-black text-center">
        Our Vehicles
      </h2>
      <div className="m-h-[50vh] flex flex-col md:flex-row gap-8 bg-transparent w-full text-center">
        <div className="md:w-1/2 w-full gap-4 p-4 justify-center flex flex-col md:flex-row">
          <img alt={"minivan image"} className="object-contain" />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Minivan</p>
            <p className="text-xl">11 person</p>
          </div>
        </div>
        <div className="md:w-1/2 w-full gap-4 p-4 justify-center flex flex-col md:flex-row">
          <img alt={"suv/sedan image"} className="object-contain" />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">SUV/Sedan</p>
            <p className="text-xl">3-4 person</p>
          </div>
        </div>
      </div>
    </div>
  );
};
