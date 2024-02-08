import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Details({addToCart,addToFav}) {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div>

<div className=" w-full h-screen flex items-center justify-center mt-52 md:mt-0 dark:bg-gray-800 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img className="w-full h-full object-contain bg-white" src={data.image} alt="Product Image" />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={()=>addToCart(data)}>Add to Cart</button>
          </div>
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={()=>addToFav(data)}>Add to Favourite</button>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-yellow-500 dark:text-white mb-2">{data.title}</h2>
      
        <div className="flex text-white mb-4">
          <div className="mr-4">
            <span className="font-bold dark:text-gray-300">Price:</span>
            <span className=" dark:text-gray-300">   ${data.price}</span>
          </div>
          <div>
            <span className="font-bold  dark:text-gray-300">Per:</span>
            <span className=" dark:text-gray-300">One</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-yellow-500 dark:text-gray-300">Product Color:</span>
          <div className="flex items-center mt-2">
            <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
            <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2" />
            <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2" />
            <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-yellow-500 dark:text-gray-300">Product Size:</span>
          <div className="flex items-center mt-2">
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
          </div>
        </div>
        <div>
          <span className="font-bold text-yellow-500 dark:text-gray-300">Product Description:</span>
          <p className="text-gray-200 dark:text-gray-300  mt-2">
           {data.description}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      
    </div>
  )
}

export default Details
