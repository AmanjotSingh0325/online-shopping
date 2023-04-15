
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useNavigate } from "react-router-dom"


const callouts = [

    {
      name: 'PUNJAB SUITS',
      description: 'All kinds of designer suits...',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtFKCr3IYQshGneg62AJBYm_mGT30_UMPUsouef-l0VUPQwm5fSiMlaWsVPrmncfo5PQ&usqp=CAU',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'TURBANS',
      description: 'Rubia and full vail...',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTXnzgv5G4gkAFU6EF47DmerHdorMiVnWO8i9OTwHrvQhCCviAyLeMIgF0Q4eRrReioY&usqp=CAU',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'KURTA PAJAMA',
      description: 'All types of kurta pajamas...',
      imageSrc: 'https://i.pinimg.com/originals/72/ec/5f/72ec5f80de6d10b29bfcea6a98a234e7.jpg'    ,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Section6() {
    let Navigate=useNavigate()
    return (


      

      <div className="bg-gray-100"  onClick={()=>{ Navigate("/onclickkurta") }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900 align-middle ">TOP SELLING PRODUCTS. </h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
           
            </div>
          </div>
        </div>
      </div>

    )
  }
  