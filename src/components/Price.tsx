"use client"
import React, { useState, useEffect } from 'react'


type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};


const Price = ({ price, id, options }: Props) => {

  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  //Calculating the price, useeffect isnt refreshing the whole page, only the component
  useEffect(() => {
    setTotal(quantity * (options ? price + options[selected].additionalPrice : price));
  }, ([quantity, selected, options, price]))

  return (
    <div className='flex-col flex gap-4'>
      <h2 className='text-2xl font-bold'>UGX {total}</h2>

      {/* Options Container */}
      <div className='flex gap-4'>
        {options?.map((option, index) => (
          <button
            key={option.title}
            className='p-2 ring-1 ring-[#213b5e] rounded-md min-w-[6rem]'
            style={{
              background: selected === index ? "rgb(33 59 94)" : "white",
              color: selected === index ? "white" : "rgb(33 59 94)"
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* Quantity and button Container */}
      <div className="flex justify-between items-center">

        {/* Quantity div */}
        <div className='flex justify-between w-full p-3 ring-1 ring-[#213b5e]'>
          <span>Quantity</span>
          <div className='flex gap-4 items-center'>
            {/* Use a condition where if the quantity is 1, user can select less than 1 */}
            <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(prev => (prev < 3 ? prev + 1 : 3))}>{'>'}</button>
          </div>
        </div>

        {/* Cart Button */}
        <button className=' uppercase w-56 bg-[#213b5e] text-white p-3 ring-1 ring-[#213b5e]'>Add to Cart</button>

      </div>

    </div>
  )
}

export default Price