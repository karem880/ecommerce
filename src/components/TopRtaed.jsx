import React from "react";
import Img1 from "../assets/shirt/shirt.png";
import Img2 from "../assets/shirt/shirt2.png";
import Img3 from "../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
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
        <div className="flex flex-col md:flex-row justify-around gap-20 items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-gray-800 hover:bg-yellow-500  hover:text-white relative shadow-xl duration-300 group w-[400px] "
            >
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>


              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>

                <h1 className="text-xl text-white font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <NavLink to={'/login'}
                  
                  onClick={handleOrderPopup}
                >
                  <button className="bg-yellow-400 hover:scale-105 duration-300 text-white w-[150px] h-[50px] rounded-lg mt-4 group-hover:bg-white group-hover:text-yellow-400"> ADD TO CART</button>
                 
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
