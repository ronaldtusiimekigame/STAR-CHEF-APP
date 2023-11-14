import Image from 'next/image'
import React from 'react'

const Offer = () => {
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]">
            {/* TEXT */}
            <div className="flex-1 flex flex-col justify-center items-center gap-8 p-6">
                <h1 className=" text-white text-5xl font-bold xl:text-6xl">Offer Of The Day 🎉</h1>
                <p className="text-white text-4xl  xl:text-4xl text-center">The Delicious Burger & Fries Combo for only Ugx 5,000</p>
                <button className="rounded-md py-3 px-6 font-bold" style={{ background: "#a8b49e", color: "white" }}> ORDER NOW </button>
            </div>

            {/* IMAGE */}
            <div className="flex-1 relative w-full md:h-full">
                <Image src="/offerProduct.png" alt='' fill className="object-contain" />
            </div>
        </div>
    )
}

export default Offer