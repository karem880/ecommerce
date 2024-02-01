import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";

const TopProducts = ({ addToCart }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Added fetchData to the dependency array

  return (
    <div>
      <div className="w-[90%] mx-auto flex  mt-20 justify-center p-3 gap-5 flex-col ">
        <div className="md:ml-10 ml-0 mb-24">
          <p data-aos="fade-up" className="text-lg text-yellow-500">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-4xl text-white font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around flex-wrap gap-20 items-center">
          {data.map((item) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              className="rounded-2xl h-[500px] bg-gray-800 hover:bg-yellow-500 hover:text-white relative shadow-xl duration-300 group w-[400px] "
            >
              <div className="h-[50%] overflow-hidden rounded-md w-full ">
                <img
                  src={item.image}
                  alt=""
                  className="w-full  h-full hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>

                <h1 className="text-xl text-white font-bold">{item.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => addToCart(item)} // Pass the specific item to addtocart
                  className="bg-yellow-400 hover:scale-105 duration-300 text-white w-[150px] h-[50px] rounded-lg mt-4 hover:bg-white hover:text-yellow-400"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
