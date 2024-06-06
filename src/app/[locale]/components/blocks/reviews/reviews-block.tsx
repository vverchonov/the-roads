"use client";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useWidth } from "../../common/hooks/useWidth";
import { Rating, Review } from "./review";

const testimonials = [
  {
    name: "Ahmed Hussein",
    starRating: Rating.FIVE,
    comment: `I had the team over at luxury design signs help me install some exterior signs! The process was really smooth and efficient and the results were phenomenal! The Sign looked really good and the brightness level on It was perfect.

    For my next sign, I already know who to call - Luxury Design Signs!`,
    link: "https://maps.app.goo.gl/mMPESweNtCjsWFaAA",
  },
  {
    name: "Cass Arraial",
    starRating: Rating.FIVE,
    comment: `Thank you to the Luxury Design Signs’ team for working so quickly, and so well with one of my clients & I. Not only were they over the moon with how the sign looked, but we’ve received so many compliments from customers as well!

    Will definitely continue to work with the LDS team!!`,
    link: "https://maps.app.goo.gl/gTjXU2chKTwWHeyM6",
  },
  {
    name: "Candice Pirali- Figurova",
    starRating: Rating.FIVE,
    comment: `The most outstanding service. Hands down the best sign company I have ever worked with. They went the extra mile to ensure I received my signs in time for my store opening on two occasions. I highly recommend them!`,
    link: "https://maps.app.goo.gl/xNiJvDfW681PCPDH7",
  },
  {
    name: "Ksenia Pavluchkova",
    starRating: Rating.FIVE,
    comment: `Vlad really helped me bring my idea to life. Really happy with my new window decal design 😍 …`,
    link: "https://maps.app.goo.gl/FHbKfE1cvH4HjhPaA",
  },
];

export const ReviewsBlock = () => {
  const windowWidth = useWidth();
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (window.innerWidth < 840) {
      setSettings({ ...settings, slidesToShow: 1 });
    }
  }, []);

  useLayoutEffect(() => {
    if (windowWidth === 0) {
      return;
    }
    if (windowWidth < 840) {
      if (settings.slidesToShow !== 1)
        setSettings({ ...settings, slidesToShow: 1 });
    } else {
      if (settings.slidesToShow !== 3)
        setSettings({ ...settings, slidesToShow: 3 });
    }
  }, [windowWidth]);

  const slider = useCallback(() => {
    return (
      <Slider {...settings} className="gap-y-2">
        {testimonials.map((item, key) => {
          return <Review review={item} key={windowWidth} />;
        })}
      </Slider>
    );
  }, [settings]);

  return (
    <section className="min-h-[40vh] flex flex-col gap-8 bg-white w-full text-center p-4 md:p-24">
      <h2 className="text-5xl font-semibold text-black">Testimonials</h2>
      {slider()}
    </section>
  );
};
