import { CarouselMy } from "./components/blocks/carousel";

export default function Home() {
  return (
    <div className="w-full flex mt-32 justify-center items-center font-bold">
      <div className="max-w-screen-2xl w-full ">
        <CarouselMy />
      </div>
    </div>
  );
}
