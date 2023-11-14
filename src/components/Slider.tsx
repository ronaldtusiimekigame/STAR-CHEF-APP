"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// Slider items
const data = [
    { id: 1, title: "CJ's Restuarant", image: "/slide1.jpg" },
    { id: 2, title: "WELCOME TO JAVAS RESTUARANT", image: "/slide2.jpg" },
    { id: 3, title: "WELCOME TO JAVAS RESTUARANT", image: "/slide3.jpg" }
]

const Slider = () => {

    const [currentSLide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(
    //         //if value of prev is 2, assign 0
    //         () => setCurrentSlide((prev) => (prev == data.length - 1 ? 0 : prev + 1)),
    //         3000
    //     );

    //     // To prevent memory leaking, we clear interval
    //     return () => clearInterval(interval);
    // }, [])

    return (
        <div className=" flex-col flex h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
            {/* TEXT */}
            <div className="h-1/2 flex items-center justify-center flex-col gap-6 font-bold lg:px-20 lg:h-full" style={{ background: "#e6e8e1", color: "#213b5e" }}>
                <h1 className=" text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
                    {data[currentSLide].title}
                </h1>
                <Link href="/menu" className="py-4 px-8 rounded" style={{ background: "#213b5e", color: "white" }}>
                    GO TO MENU
                </Link>
            </div>

            {/* IMAGE */}
            <div className=" w-full h-1/2 relative lg:h-full">
                <Image src={data[currentSLide].image} alt="" fill className="object-cover" priority  />
            </div>
        </div>
    )
}

export default Slider