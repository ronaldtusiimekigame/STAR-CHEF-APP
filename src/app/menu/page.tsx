import { MenuType } from "@/types/types";
import Link from "next/link";
import React from "react";
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'


const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}

const MenuPage = async () => {

  const menu:MenuType = await getData()
  return (
    // <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
    //   {menu.map((category) => (
    //     <Link
    //       href={`/menu/${category.slug}`}
    //       key={category.id}
    //       className="w-full h-1/3 bg-cover p-8 md:h-1/2"
    //       style={{ backgroundImage: `url(${category.img})` }}
    //     >
    //       <div className={`text-${category.color} w-1/2`}>
    //         <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
    //         <p className="text-sm my-8">{category.desc}</p>
    //         <button className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
    //       </div>
    //     </Link>
    //   ))}
    // </div>

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
  );
};

export default MenuPage;
