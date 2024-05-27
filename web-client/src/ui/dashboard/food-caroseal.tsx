import React from 'react'
import Image from 'next/image'
import banner1 from '../../../public/bgimage/banner1.jpg';

import { Carousel } from "flowbite-react";
const FoodCarousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        {/* <Image src={banner1} width={500} height={500}/> */}
        <Carousel>
        <Image src={banner1} alt="..." />
        <Image src={banner1} alt="..." />
        <Image src={banner1} alt="..." />
       
      </Carousel>
    </div>
    // <div id="gallery" className="relative w-full" data-carousel="slide">
    //   <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <Image 
    //         src={banner1}
    //         className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
    //         alt="Image 1" 
    //         width={500} 
    //         height={500} 
    //       />
    //     </div>
        
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
    //       <Image 
    //         src={banner1}
    //         className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
    //         alt="Image 2" 
    //         width={500} 
    //         height={500} 
    //       />
    //     </div>
        
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <Image 
    //         src={banner1}
    //         className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
    //         alt="Image 3" 
    //         width={500} 
    //         height={500} 
    //       />
    //     </div>
        
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <Image 
    //         src={banner1} 
    //         className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
    //         alt="Image 4" 
    //         width={500} 
    //         height={500} 
    //       />
    //     </div>
        
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <Image 
    //         src={banner1} 
    //         className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
    //         alt="Image 5" 
    //         width={500} 
    //         height={500} 
    //       />
    //     </div>
    //   </div>
      
    //   <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    //     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //       <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
    //       </svg>
    //       <span className="sr-only">Previous</span>
    //     </span>
    //   </button>
    //   <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    //     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //       <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
    //       </svg>
    //       <span className="sr-only">Next</span>
    //     </span>
    //   </button>
    // </div>
  )
}

export default FoodCarousel
