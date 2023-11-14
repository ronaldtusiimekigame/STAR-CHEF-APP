//This file handles menu for mobile devices
"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'

// We dont include cart and login because they are special components with additional functionality
const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Contact", url: "/menu" },
]

const Menu = () => {
    const [open, setOpen] = useState(false);

    //Temporary
    const user = false;
    return (
        <div>
            {!open ? (
                <Image src={'/open.png'} alt='Menu text' width={20} height={20} onClick={() => (setOpen(true))} />
            ) : (
                <Image src={'/close.png'} alt='Menu text' width={20} height={20} onClick={() => (setOpen(false))} />
            )}

            {/* We use total height of 100vh - 6rem because navbar and notification are 3rem each, also so that their is no overflow of the menu.
            z-0 for the menu to be ontop of other items */}
            {open && (
                <div className=' text-white absolute left-0 w-full top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10' style={{ background: "#a8b49e" }}>

                    {links.map(item => (
                        <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
                    ))}

                    {!user ? (<Link href="/login" onClick={() => setOpen(false)}>Login</Link>
                    ) : (
                        <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>)}

                    <Link href="/cart">
                        <CartIcon />
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Menu