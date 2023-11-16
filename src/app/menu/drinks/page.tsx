import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { ProductType } from '@/types/types'


const getData = async (drinks: string) => {
  const res = await fetch("http://localhost:3000/api/products?cat=drinks", {
    // Not catching for development purposes
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("FAILED!");
  }

  return res.json()
}

type Props = {
  params: { drinks: string }
}

const page = async ({ params }: Props) => {

  const products: ProductType[] = await getData(params.drinks)
    return (
        <div className='flex flex-wrap' style={{ color: '#213b5e' }}>
          {products.map((item) => (
    
            // {/* We use a feature in tailwind called group  that allows us to group hover*/}
            <Link className="w-full h-[80vh] border-r-2 border-b-2 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group "href={`/product/${item.id}`} key={item.id}>
    
              {/* IMAGE CONTAINER */}
              {item.img && (
                <div className="relative h-[80%]">
                  <Image src={item.img} alt={item.title} fill className="object-contain" />
                </div>
              )}
    
              {/* TEXT CONTAINER */}
              <div className="flex items-center justify-between font-bold:">
                <h1 className="text-2xl uppercase p-2 font-semibold">{item.title}</h1>
                <h2 className="group-hover:hidden tex-xl font-semibold">UGX {item.price}</h2>
                <button className="hidden group-hover:block uppercase p-2 rounded-md" style={{ background: "#213b5e", color: "white" }}>Add to Cart</button>
              </div>
    
            </Link>
          ))}
        </div>
    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
    
        //   {/* Title of the page */}
        //   <Typography variant='h4' sx={{ color: "#213b5e" }}>
        //     Select From a Variety
        //   </Typography>
    
        //   {/* Menu card items */}
        //   <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    
        //     {lunch.map(item => (
        //       <div className="relative" key={item.id}>
        //         <Card key={item.id} sx={{ maxWidth: '500px', display: 'flex', m: 3 }}>
    
        //           <Link key={item.id} href={`/product/${item.id}`} className='group'>
        //             <CardActionArea>
        //               <CardMedia
        //                 sx={{ minHeight: '400px' }}
        //                 component={'img'}
        //                 src={item.img}
        //                 alt={item.title}
        //               />
    
    
        //               <CardContent>
        //                 {/* NOTE: removed fontweight: 600 */}
        //                 <Typography variant='h5' gutterBottom component='div' sx={{ color: "#213b5e" }}>{item.title}</Typography>
        //                 <Typography variant='body2'>{item.desc}</Typography>
        //                 <Typography variant='body2' style={{ fontWeight: "600" }}> Price: UGX {item.price}</Typography>
        //                 <button className="hidden group-hover:block absolute uppercase p-2 rounded-md right-0" style={{ background: "#a8b49e", color: "white" }}>Add to Cart</button>
        //               </CardContent>
        //             </CardActionArea>
        //           </Link>
    
        //         </Card>
        //       </div>
        //     ))}
        //   </Box>
        // </Box>
    
    
    
    
      )
}

export default page