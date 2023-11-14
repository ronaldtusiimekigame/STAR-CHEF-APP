import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';

const NavBar = () => {

  const user = false;
  return (
    // NavBar container
    <div className="h-12 p-4 flex items-center justify-between font-semibold border-b-2 uppercase md:h-24 lg:px-20 xl:px-40" style={{ color: "#213b5e", borderBottomColor: "#a8b49e" }}>

      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-start">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/orders">Orders</Link>
      </div>

      {/* LOGO */}
      <div className=" md:flex md:h-20 md:items-center ">
        <Link href={"/"}>
          <Image src="/logo.png" alt="" width={250} height={20} />
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden flex items-center justify-end gap-4 pr-4">
        <CartIcon />
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        {!user ? (<Link href="/login">Login</Link>
        ) : (
          <Link href="/order">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  )
}

export default NavBar