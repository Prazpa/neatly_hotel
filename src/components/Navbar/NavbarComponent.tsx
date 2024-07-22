import Link from "next/link";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/react";

const NavbarComponent = () => {
  return (
    <Navbar className="h-[100px]">
      <NavbarBrand>
        <p className="text-3xl font-bold text-[#2F3E35] text-inherit">NEATLY</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About Neatly
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Service & Facilities
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Room & Suits
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button as={Link} color="primary" href="/login" variant="flat" className="text-orange-600">
          Login
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
