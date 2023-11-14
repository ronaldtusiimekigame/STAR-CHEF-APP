"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    return (
        <Link href="/cart" className="flex items-center gap-4">

            <div className="relative w-6 h-6 md:w-5 md:h-5">
                <Image src="/cart.png" alt="" fill />
            </div>
            
            {/* Visible on medium to big screens only */}
            <span className="hidden md:block sm:block">Cart (3)</span>
        </Link>
    )
}

export default CartIcon