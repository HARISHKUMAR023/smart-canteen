"use client";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Image from 'next/image';

// Define types for the user, product, item, and order
interface User {
  name: string;
  phoneNumber: string;
}

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface Item {
  _id: string;
  product: Product;
  totalPrice: number;
}

interface Order {
  _id: string;
  user: User;
  items: Item[];
  totalPrice: number;
}

const Page: React.FC = () => {
  const [order, setOrder] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch orders from API
  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/orders/allorders");
      setOrder(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Open modal with selected order details
  const openModal = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  // Mark order as delivered
  const markAsDelivered = () => {
    if (selectedOrder) {
      console.log("Marked as Delivered:", selectedOrder._id);
      // Implement API call for marking as delivered
    }
    closeModal();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700">Food Orders</h1>
      <table className="table-auto w-full border-collapse bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-rose-200">
            <th className="p-4 border text-left">Name</th>
            <th className="p-4 border text-left">Phone Number</th>
            <th className="p-4 border text-left">Order ID</th>
            <th className="p-4 border text-left">Order Items</th>
            <th className="p-4 border text-left">Total Amount</th>
            <th className="p-4 border text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item) => (
            <tr key={item._id} className="hover:bg-rose-100">
              <td className="p-4 border">{item.user.name}</td>
              <td className="p-4 border">{item.user.phoneNumber}</td>
              <td className="p-4 border">{item._id}</td>
              <td className="p-4 border">{item.items.length}</td>
              <td className="p-4 border">$ {item.totalPrice.toFixed(2)}</td>
              <td className="p-4 border">
                <button
                  className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600"
                  onClick={() => openModal(item)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            <p><strong>Name:</strong> {selectedOrder.user.name}</p>
            <p><strong>Phone:</strong> {selectedOrder.user.phoneNumber}</p>
            <p><strong>Total Amount:</strong> $ {selectedOrder.totalPrice.toFixed(2)}</p>

            <h3 className="mt-4 text-xl font-semibold">Products:</h3>
            <ul className="mt-2">
              {selectedOrder.items.map((productItem) => (
                <li key={productItem._id} className="flex items-center mb-3">
                  <Image
                    src={`http://localhost:5000/${productItem.product.imageUrl}`}
                    alt={productItem.product.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                    width={100}
                    height={100}
                  />
                  <div>
                    <p className="font-semibold">{productItem.product.name}</p>
                    <p className="text-gray-600">${productItem.product.price}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-end">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600"
                onClick={markAsDelivered}
              >
                Delivered
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
