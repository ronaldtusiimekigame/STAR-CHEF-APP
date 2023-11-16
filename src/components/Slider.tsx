"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useSession } from "next-auth/react";

const data = [
  { id: 1, title: "Star-Chef Restuarant", image: "/slide1.jpg" },
  { id: 2, title: "Star-Chef Restuarant", image: "/slide2.jpg" },
  { id: 3, title: "Star-Chef Restuarant", image: "/slide3.jpg" },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: session } = useSession();
  const user = false;

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //     4000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
        {/* A condition */}
        {session?.user.isAdmin ? (

          <div className="h-[100%] flex flex-1 items-center justify-center flex-col gap-6 font-bold lg:px-20 lg:h-full bg-[#e6e8e1] text-[#213b5e]">
            <h1 className="flex text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
              Admin Dashboard
            </h1>

            <div className="flex flex-wrap justify-center gap-4">
            <Link href="/orders" className="py-4 px-8 w-[1/3] rounded bg-[#213b5e] text-white">
              Manage Orders
            </Link>

            <Link href="/add" className="py-4 px-8 w-[1/3] rounded bg-[#213b5e] text-white">
              Add Product
            </Link>

            <Link href="/menu" className="py-4 px-8 w-[1/3] rounded bg-[#213b5e] text-white">
              Choose a Product to Remove
            </Link>
            </div>

          </div>

        ) : (
          <>
            {/* Text Container */}
            <div className="h-1/2 flex items-center justify-center flex-col gap-6 font-bold lg:px-20 lg:h-full bg-[#e6e8e1] text-[#213b5e]">
              <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
                {data[currentSlide].title}
              </h1>

              <Link
                href="/menu"
                className="py-4 px-8 rounded"
                style={{ background: "#213b5e", color: "white" }}
              >
                GO TO MENU
              </Link>

            </div>

            {/* Image COntainer */}
            <div className="w-full h-1/2 relative lg:h-full">
              <Image
                src={data[currentSlide].image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </>
        )}
      </div >
    </>
  );
};


export default Slider;
