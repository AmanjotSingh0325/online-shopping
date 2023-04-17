import React from 'react'
import { useNavigate } from "react-router-dom"


export default function about() {
  let Navigate=useNavigate()
  return (

    <>
   

   <div className="h-56 sm:h-64 xl:h-74 2xl:h-96">
  <Carousel slideInterval={3000}>
    <img
      src="src\component\CAROSEL2.jpg "
      alt="..."
    />
    <img
      src="src\component\CAROUSAL1.jpg"
      alt="..."
    />
    <img
      src="src\component\CAROUSAL3.jpg"
      alt="..."
    />
    <img
      src="src\component\CAROUSEL4.jpg"
      alt="..."
    />
  </Carousel>
</div>



    </>
  )
}

