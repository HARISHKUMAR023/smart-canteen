import React from 'react';

import growth from '../../../public/bgimage/growth.png';
import Image from 'next/image';
const Cardbanner = () => {
  return (
    <div className='grid grid-cols-3 gap-3 text-white'>
  {/* <div className="max-w-md mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden  "> */}
    <div className="flex bg-green-500  max-w-md mx-auto my-4  p-3 shadow-lg rounded-lg text-white" >
      <div className="w-1/3">
        <Image src={growth} alt="Sales Report" className="object-cover" layout="responsive" />
      </div>
      <div className="p-4 w-2/3">
        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          Monthly Sales Report
        </h5>
        <p className="font-normal text-gray-700">
          Total Orders: 1,234
        </p>
        <p className="font-normal text-gray-700">
          Total Revenue: $56,789
        </p>
        <p className="font-normal text-gray-700">
          Top Dish: Spaghetti Carbonara
        </p>
      </div>
    </div>

    <div className="flex bg-orange-500 max-w-md mx-auto my-4  p-3 shadow-lg rounded-lg text-white">
      <div className="w-1/3">
        <Image src={growth} alt="Sales Report" className="object-cover" layout="responsive" />
      </div>
      <div className="p-4 w-2/3">
        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          Monthly Sales Report
        </h5>
        <p className="font-normal text-gray-700">
          Total Orders: 1,234
        </p>
        <p className="font-normal text-gray-700">
          Total Revenue: $56,789
        </p>
        <p className="font-normal text-gray-700">
          Top Dish: Spaghetti Carbonara
        </p>
      </div>
    </div>

    <div className="flex bg-rose-500 max-w-md mx-auto my-4  p-3 shadow-lg rounded-lg text-white">
      <div className="w-1/3">
        <Image src={growth} alt="Sales Report" className="object-cover" layout="responsive" />
      </div>
      <div className="p-4 w-2/3">
        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          Monthly Sales Report
        </h5>
        <p className="font-normal text-gray-700">
          Total Orders: 1,234
        </p>
        <p className="font-normal text-gray-700">
          Total Revenue: $56,789
        </p>
        <p className="font-normal text-gray-700">
          Top Dish: Spaghetti Carbonara
        </p>
      </div>
    </div>

  </div>
    // </div>
  
  );
};

export default Cardbanner;
