import Link from "next/link";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar } from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";
import noto from "@/assets/fonts";
import Logo from "@/assets/svg/logo";

const hoverStyle = `hover:border hover:border-white hover:rounded-lg hover:border-[3px]`;

const NavbarComponent = () => {
  const { data: session } = useSession(); 

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
        {session?.user ? (
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => signOut()}>
            <Avatar 
              src={session.user.image || "https://i.pravatar.cc/300"} 
              size="md"
              color="primary"
            />
            <span>{session.user.name || "User"}</span>
          </div>
        ) : (
          <Button
            as={Link}
            href="/pages/login"
            variant="flat"
            className={`${hoverStyle} text-orange-600 text-sm bg-white`}
          >
            Login
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
