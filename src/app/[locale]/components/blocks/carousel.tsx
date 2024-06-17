"use client";
import { Carousel } from "react-responsive-3d-carousel";

export const CarouselMy = () => {
  return (
    <Carousel
      autoPlay
      interval={5000}
      pauseOnHover
      selectable
      isShadow={false}
      spread="wide"
      showArrows={false}
    >
      <div className="flex flex-col text-center gap-2">
        <img
          alt="img 1"
          className="object-contain aspect-video border rounded-lg  bg-white "
        />
        <p className="text-black">some text</p>
      </div>
      <div className="flex flex-col text-center gap-2">
        <img
          alt="img 2"
          className="object-contain aspect-video border rounded-lg  bg-white "
        />
        <p className="text-black">some text 2</p>
      </div>
      <div className="flex flex-col text-center gap-2">
        <img
          alt="img 3"
          className="object-contain aspect-video border rounded-lg  bg-white "
        />
        <p className="text-black">some text 3</p>
      </div>
    </Carousel>
  );
};
