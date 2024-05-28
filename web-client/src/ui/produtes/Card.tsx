"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'flowbite-react';
import Image from 'next/image';

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  // Add any additional properties if needed
}

const CardProdutes = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from your backend API
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:5000/api/products');
        setProducts(response.data); // Assuming the response data is an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='grid grid-cols-4 gap-4'>
      {products.map((product, index) => (
        <Card
          key={index}
          className="max-w-sm shadow-lg border border-gray-300 bg-rose-200"
        >
          <Image src={`http://localhost:5000/${product.imageUrl}
                          `} alt={product.name} width={500} height={500} />
                          <div className=''>
                          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <p className="font-bold text-gray-700 dark:text-gray-400">
            Price: {product.price}
          </p>
                          </div>
        
        </Card>
      ))}
    </div>
  );
};

export default CardProdutes;
