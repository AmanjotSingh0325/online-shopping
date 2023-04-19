import { Carousel } from "flowbite-react"
export default function Section5()
{
    return(

<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={3000}>
  <img
      src="src\component\mencarsoul.webp"
      alt="..."
    />
    <img
      src="src\component\womencarsol.jpeg" 
      alt="..."
    />
    <img
      src="src\component\basket.jpg"
      alt="..."
    />
    <img
      src="src\component\CAROUSAL1.jpg"
      alt="..."
    />
    <img
      src="src\component\womencarsol.jpeg"
      alt="..."
    />
      
    
  </Carousel>
</div>

    )


}    