"use client";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyIcon } from "./icons/copy-icon";
import { CA } from "@/app/[locale]/urls";
import { BigText } from "./text/big-text";
import { useEffect, useState } from "react";

export const CopyCa = (props: any) => {
  const onCopy = () => {
    navigator.clipboard.writeText(CA);
    toast.success("Link copied to clipboard!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsNarrowScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const clampedText = () => {
    if (!isNarrowScreen || CA.length < 7) {
      return CA;
    }
    const start = CA.substring(0, 4);
    const end = CA.substring(CA.length - 4);
    return `${start}...${end}`;
  };

  return (
    <button
      onClick={onCopy}
      className="text-center text-xl cursor-pointer flex-row gap-4 align-center justify-center items-center select-non flex z-50"
    >
      <BigText text={`CA: ${clampedText()}`} />
      <CopyIcon />
    </button>
  );
};
