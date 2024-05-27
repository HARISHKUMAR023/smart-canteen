import React from 'react'
import { Card } from "flowbite-react";
import carimg from '../../../public/bgimage/banner1.jpg';
import goodday from '../../../public/bgimage/gooday.png'
import Image from "next/image";
const CardProdutes = () => {
  return (
  <div className='grid grid-cols-4 gap-4'>
 <Card
    className="max-w-sm shadow-lg border border-gray-300"
    renderImage={() => <Image width={500} height={500} src={carimg} alt="image 1" />}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>

  <Card
    className="max-w-sm shadow-lg border border-gray-300"
    renderImage={() => <Image width={500} height={500} src={goodday} alt="image 1" />}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  </div>
   
  

  )
}

export default CardProdutes