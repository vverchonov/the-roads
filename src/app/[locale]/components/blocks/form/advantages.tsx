export const Advantages = (props: any) => {
  return (
    <div className="p-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {props.advantages.map((adv: any) => {
        return (
          <div className="flex flex-col gap-2 w-full p-2 rounded-xl">
            <img
              className="p-0 m-0 rounded-lg border h-[15vh] aspect-square w-auto mx-auto text-center"
              src={adv.icon}
              alt={adv.alt}
            />
            <p className="font-bold text-md">{adv.text}</p>
            <p className="text-sm my-auto">{adv.bigText}</p>
          </div>
        );
      })}
    </div>
  );
};
