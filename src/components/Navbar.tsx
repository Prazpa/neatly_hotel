import Link from "next/link";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
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
    <Navbar className="flex h-[100px] justify-center">
      <NavbarBrand className={noto.className}>
        <Logo />
        <Link
          href="/"
          className={`${hoverStyle} text-3xl font-bold text-[#2F3E35] text-inherit`}
        >
          NEATLY
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-5 sm:flex" justify="center">
        {navItems.map(({ href, text }) => (
          <NavbarItem key={href}>
            <Link
              color="foreground"
              href={href}
              className={`text-sm hover:underline`}
            >
              {text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {session?.user ? (
          <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: `${session.user.image}`,
                  }}
                  className="transition-transform"
                  name={session.user.name || "User"}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="Profile" href={"/pages/profile"}>Profile</DropdownItem>
                <DropdownItem key="Payment">Payment Method</DropdownItem>
                <DropdownItem key="Bokking">Booking History</DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={() => signOut()}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        ) : (
          <Button
            as={Link}
            href="/pages/login"
            variant="flat"
            className={`${hoverStyle} bg-white text-sm text-orange-600`}
          >
            Login
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
