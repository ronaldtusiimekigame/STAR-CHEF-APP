import React from 'react'
import Link from 'next/link'
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { MenuType } from '@/types/types'

const getData = async ()=>{
const res = await fetch("http://localhost:3000/api/categories",{
  // Not catching for development purposes
  cache:"no-store"
})

if(!res.ok){
  throw new Error("FAILED!");
}

return res.json()
}

const MenuPage = async () => {

  const menu:MenuType = await getData();
  return (
    // <div className='p-4 xl:px-40 lg:px-20 h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center'>


    //   {menu.map(category => (
    //     <Link
    //       href={`/menu/${category.slug}`}
    //       key={category.id}
    //       className=" w-full h-1/3 bg-cover p-8 md:h-1/2"
    //       style={{ backgroundImage: `url(${category.img})` }}>

    //       <div className="" style={{color: "#FFFF"}}>
    //         <h1 className="uppercase font-bold text-3xl underline">{category.title}</h1>
    //         <p className=" text-sm my-8 font-semibold">{category.desc}</p>
    //         <button className="hidden md:block 2xl:block font-bold rounded-md py-2 px-4" style={{background: "#abb39b"}}>Explore Now</button>
    //       </div>

    //     </Link>
    //   ))}
    //   </div>

    // Designing the card for each menu item, flexwrap to allow items to flex onto multiple lines

    // Designing the card for each menu item, flexwrap to allow items to flex onto multiple lines
    // We have an inner box to seperate the title from the iteration of menu items

    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>

      {/* Title of the page */}
      <Typography variant='h4' sx={{ color: "#213b5e" }}>
      Explore Our Menu
      </Typography>

      {/* Menu card items */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

        {menu.map(category => (
          <Card key={category.id} sx={{ maxWidth: '500px', display: 'flex', m: 3 }}>

            <Link key={category.id} href={`/menu/${category.slug}`}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: '400px' }}
                  component={'img'}
                  src={category.img}
                  alt={category.title}
                />

                <CardContent>
                  {/* NOTE: removed fontweight: 600 */}
                  <Typography variant='h5' gutterBottom component='div' sx={{ color: "#213b5e" }}>{category.title}</Typography>
                  <Typography variant='body2'>{category.desc}</Typography>
                </CardContent>

              </CardActionArea>
            </Link>

          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default MenuPage