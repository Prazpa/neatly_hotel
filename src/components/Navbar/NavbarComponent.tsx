import Link from "next/link";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, } from "@nextui-org/react";
import { Noto_Serif } from "next/font/google";

const noto = Noto_Serif({ subsets: ["latin"] });

const hoverStyle = `hover:border hover:border-white hover:rounded-lg hover:border-[3px]`

const NavbarComponent = () => {
  return (
    <Navbar className="h-[100px] flex justify-center">
      <NavbarBrand className={noto.className} >
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
        <Link href={"/"} className={`${hoverStyle} text-3xl font-bold text-[#2F3E35] text-inherit`}>NEATLY</Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-5 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#introduction" className={`hover:underline text-sm`}>About Neatly</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#service" className={`hover:underline text-sm`}>Service & Facilities</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#rooms" className={`hover:underline  text-sm`}>Room & Suites</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          color="primary"
          href="/login"
          variant="flat"
          className={`${hoverStyle } text-orange-600 text-sm`}
        >
          Login
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
