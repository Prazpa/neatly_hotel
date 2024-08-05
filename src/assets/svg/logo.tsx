import React from "react";

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="meteoconsStarFill0"
        x1={187.9}
        x2={324.1}
        y1={138.1}
        y2={373.9}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#E76B39" />
        <stop offset={0.5} stopColor="#E76B39" />
        <stop offset={1} stopColor="#E76B39fccd34" />
      </linearGradient>
    </defs>
    <path
      fill="url(#meteoconsStarFill0)"
      stroke="#E76B39"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="m105.7 263.5l107.5 29.9a7.9 7.9 0 0 1 5.4 5.4l29.9 107.5a7.8 7.8 0 0 0 15 0l29.9-107.5a7.9 7.9 0 0 1 5.4-5.4l107.5-29.9a7.8 7.8 0 0 0 0-15l-107.5-29.9a7.9 7.9 0 0 1-5.4-5.4l-29.9-107.5a7.8 7.8 0 0 0-15 0l-29.9 107.5a7.9 7.9 0 0 1-5.4 5.4l-107.5 29.9a7.8 7.8 0 0 0 0 15Z"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="-15 256 256; 15 256 256; -15 256 256"
      />
      <animate
        attributeName="opacity"
        dur="6s"
        values="1; .75; 1; .75; 1; .75; 1"
      />
    </path>
  </svg>
);

export default Logo;
