import Link from "next/link";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, } from "@nextui-org/react";
import noto from "@/assets/fonts"
import Logo from "@/assets/svg/logo";

const hoverStyle = `hover:border hover:border-white hover:rounded-lg hover:border-[3px]`

const NavbarComponent = () => {
  const navItems = [
    { href: "#introduction", text: "About Neatly" },
    { href: "#service", text: "Service & Facilities" },
    { href: "#rooms", text: "Room & Suites" },
  ];

  return (
    <Navbar className="h-[100px] flex justify-center">
      <NavbarBrand className={noto.className}>
        <Logo />
        <Link href="/" className={`${hoverStyle} text-3xl font-bold text-[#2F3E35] text-inherit`}>
          NEATLY
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-5 sm:flex" justify="center">
        {navItems.map(({ href, text }) => (
          <NavbarItem key={href}>
            <Link color="foreground" href={href} className={`hover:underline text-sm`}>
              {text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          color="primary"
          href="/pages/login"
          variant="flat"
          className={`${hoverStyle} text-orange-600 text-sm`}
        >
          Login
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;


