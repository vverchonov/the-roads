"use client";
import Link from "next/link";

export const LogoLink = () => {
  const local = window ? window.location.pathname.slice(0, 3) : "";

  return (
    <Link
      href={local}
      className="flex items-center space-x-3 rtl:space-x-reverse scale-hover text-white text-2xl"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 107 18.3"
        width="146"
        height="25"
        className="uk-svg"
      >
        <g>
          <g>
            <polygon
              className="st0"
              points="57.5,18 57.7,11.8 58.8,11.8 59,18 		"
            ></polygon>
            <polygon
              className="st0"
              points="57.9,8.3 58.1,2.1 58.5,2.1 58.7,8.3 		"
            ></polygon>
          </g>
          <g>
            <path
              className="st0"
              d="M25.9,5.5c0,2.4-1.4,3.9-3.5,4.4v0.4c1.3,0.4,2.3,1.5,3.3,4.1l1.5,3.6h-6l-2.2-5.8h-3.9V18H9.8V0.3h10
			C23.3,0.3,25.9,2,25.9,5.5z M18.8,8.3c1,0,1.7-0.5,1.7-1.8c0-1.2-0.7-1.7-1.7-1.7h-3.6v3.5H18.8z"
            ></path>
            <path
              className="st0"
              d="M38,0c5.4,0,9.5,2.4,9.5,9.2c0,6.7-4.1,9.2-9.5,9.2c-5.4,0-9.5-2.4-9.5-9.2C28.5,2.4,32.5,0,38,0z M38,13.9
			c2.9,0,4-1.1,4-4.7s-1.1-4.7-4-4.7s-4,1.1-4,4.7S35.1,13.9,38,13.9z"
            ></path>
            <path
              className="st0"
              d="M87.4,9.2c0,6.7-4,8.9-9.3,8.9h-7.7V0.3h7.7C83.4,0.3,87.4,2.4,87.4,9.2z M78.1,13.6c2.8,0,3.8-1.1,3.8-4.4
			s-1-4.4-3.8-4.4h-2.4v8.8H78.1z"
            ></path>
            <path
              className="st0"
              d="M98.1,0c4.8,0,7.7,1.6,8.3,5.9l-5.5,0.8c-0.1-1.8-0.9-2.3-2.8-2.3c-1.9,0-2.4,0.4-2.4,1.2
			c0,0.7,0.4,1,1.4,1.2l3.7,0.5c2.9,0.4,6.1,1.2,6.1,5.4c0,3.7-3.2,5.6-8.6,5.6c-5.2,0-8.2-1.6-8.9-5.9l5.5-0.8
			c0.1,1.8,0.9,2.3,3.3,2.3c2.2,0,2.8-0.3,2.8-1.3c0-0.8-0.5-1-1.5-1.1L96.1,11C93,10.6,90,9.6,90,5.6C90,1.9,93.2,0,98.1,0z"
            ></path>
          </g>
          <g>
            <path
              className="st1"
              d="M1.6,12.8v1.7h4.3v1.8H1.6V18H0v-5.3H1.6z"
            ></path>
            <path
              className="st1"
              d="M2.1,10.1V8H0V6.2h5.9V8H3.7v2.1h2.2v1.8H0v-1.8H2.1z"
            ></path>
            <path
              className="st1"
              d="M1.5,0.4v2.9h0.7V0.8h1.3v2.5h0.8v-3h1.5v4.8H0V0.4H1.5z"
            ></path>
          </g>
          <g>
            <polygon
              className="st1"
              points="62.4,18 68.2,18 62,0.3 60.1,0.3 		"
            ></polygon>
            <polygon
              className="st1"
              points="54.2,18 56.5,0.3 54.5,0.3 48.3,18 54.1,18 		"
            ></polygon>
          </g>
        </g>
      </svg>
    </Link>
  );
};
