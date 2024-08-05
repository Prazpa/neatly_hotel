import Link from "next/link";
import React from "react";
import noto from "@/assets/fonts"

function FooterComponent() {
  return (
    <div className="h-[485px] w-full bg-[#2F3E35] px-[80px] py-[50px] text-white">
      <div className="flex h-[300px] gap-[300px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex">
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
                  <stop offset={0} stopColor="#E76B39"></stop>
                  <stop offset={0.5} stopColor="#E76B39"></stop>
                  <stop offset={1} stopColor="#E76B39fccd34"></stop>
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
                ></animateTransform>
                <animate
                  attributeName="opacity"
                  dur="6s"
                  values="1; .75; 1; .75; 1; .75; 1"
                ></animate>
              </path>
            </svg>
            <Link
              href={"#cover"}
              className={`${noto.className} text-[30px] font-bold text-[#2F3E35] text-inherit`}
            >
              NEATLY
            </Link>
          </div>
          <div className="flex flex-col gap-[40px]">
            <span>Neatly Hotel</span>
            <span>The best hotel for rising your experience</span>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] w-[500px]">
          <h1>Contact</h1>
          <div className="flex items-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M1 2h8.58l1.487 6.69l-1.86 1.86a14.1 14.1 0 0 0 4.243 4.242l1.86-1.859L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.196a20.1 20.1 0 0 1-5.954-5.954A19.9 19.9 0 0 1 1 3zm2.027 2a17.9 17.9 0 0 0 2.849 8.764a18.1 18.1 0 0 0 5.36 5.36A17.9 17.9 0 0 0 20 20.973v-4.949l-4.053-.9l-2.174 2.175l-.663-.377a16.07 16.07 0 0 1-6.032-6.032l-.377-.663l2.175-2.174L7.976 4z"
              ></path>
            </svg>
            <span>+66 99 999 9999</span>
          </div>

          <div className="flex items-center gap-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
              ></path>
            </svg>
            <span>contact@neatlyhotel.com</span>
          </div>

          <div className="flex items-center gap-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"
              ></path>
              <circle
                cx={256}
                cy={192}
                r={48}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
              ></circle>
            </svg>
            <span>
              188 Phaya Thia Rd, Thung Phaya Thai, Ratchathewi, Bangkok 10400
            </span>
          </div>

        </div>
      </div>
      <hr/>
      {/* logo */}
      <div className="flex justify-between items-end py-0">
        <div className="flex">
          {/* Facebook */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
              ></path>
            </svg>
          </div>

          {/* instagram */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              ></path>
            </svg>
          </div>

          {/* Twitter */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
              ></path>
            </svg>
          </div>
        </div>

        <div>
          <span>Copyright © 2022 Neatly Hotel</span>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
