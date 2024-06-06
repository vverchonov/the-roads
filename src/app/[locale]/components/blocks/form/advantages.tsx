export const Advantages = (props: any) => {
  return (
    <div className="p-6 flex flex-col md:flex-row gap-4">
      {props.advantages.map((adv: any) => {
        return (
          <div className="flex flex-col justify-center gap-2 w-full md:w-1/2">
            <img src={adv.icon} alt={adv.alt} />
            <p className="font-bold">{adv.text}</p>
            <p>{adv.bigText}</p>
          </div>
        );
      })}
    </div>
  );
};
