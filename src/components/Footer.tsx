import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 flex items-center justify-between font-semibold" style={{background: "#a8b49e", color: "#213b5e"}}>
      <Link href="/">Star-Chef RESTUARANT</Link>
      <p>© 2023 Group1. All Rights Reserved</p>
    </div>
  )
}

export default Footer