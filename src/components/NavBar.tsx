"use client"
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";
import { useSession } from "next-auth/react";


const Navbar = () => {
  const user = false;
  const { data: session } = useSession();

  return (
    <div className="h-12 text-[#213b5e] font-semibold p-4 flex items-center justify-between border-b-2 border-b-[#a8b49e] uppercase md:h-24 lg:px-20 xl:px-40">

      {/* LEFT LINKS */}

      {session?.user.isAdmin ? (
        <div className="md:flex gap-4 flex-1 justify-start">
          <Link href="/">Welcome Admin!</Link>
        </div>
      ) : (

        // Visible
        <div className="hidden md:flex gap-4 flex-1 justify-start">
          <Link href="/">Homepage</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>
        </div>
      )}


      {/* LOGO */}
      <div className=" md:flex md:h-20 md:items-center ">
        <Link href={"/"}>
          <Image src="/logo.png" alt="" width={250} height={20} />
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden flex items-center justify-end gap-4 pr-4">
        <Menu />
      </div>


      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
