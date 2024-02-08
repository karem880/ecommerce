import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaEye, FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import ProductSlider from "../components/productSlider";
import CardSlide from '../components/CardSlide';

const TopProducts = ({ addToCart, addToFav }) => {
  const [data, setData] = useState([]);
  const [hoveredProducts, setHoveredProducts] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        const uniqueCategories = Array.from(new Set(response.data.map(item => item.category)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMouseEnter = (productId) => {
    setHoveredProducts((prev) => ({ ...prev, [productId]: true }));
  };

  const handleMouseLeave = (productId) => {
    setHoveredProducts((prev) => ({ ...prev, [productId]: false }));
  };

  const filteredData = data.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = selectedCategory === "" || item.category === selectedCategory;

    return titleMatch && categoryMatch;
  });

  return (
    <div>
      <ProductSlider />
      <div className="w-full mx-auto flex mt-20 justify-center h-full p-3 gap-10 flex-col ">
        <div className="md:ml-10 ml-0 mb-24">
          <p data-aos="fade-up" className="text-4xl text-yellow-500">
            Welcome to our shop we have
          </p>
          <h1 data-aos="fade-up" className="text-4xl text-white font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
          </p>
        </div>
        <div className="mt-5 w-[90%] flex mx-auto mb-5">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border w-[90%] border-white rounded-md mr-2"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border border-white rounded-md"
          >
            <option value="">All Categories</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col md:flex-row justify-around flex-wrap gap-2 items-center">
          {filteredData.map((item) => (
            <div key={item.id} className="card md:w-[24%] h-[580px]  mt-16 w-[90%]">
              <div className="h-[40%] bg-black w-full">
                <img src={item.image} className="w-full h-[100%] min-h-full hover:object-right-bottom object-cover" alt="" />
              </div>
              <div className="h-[50%] mt-10 w-full relative">
                <div className="w-full absolute top-4 left-0">
                <h1 className="text-xl mb-2 font-extrabold line-clamp-1 text-start uppercase text-slate-300">{item.title}</h1>
                <p className="text-white mt-2 line-clamp-2 text-lg font-bold text-start">{item.description}</p>
                <div className="flex justify-between items-center px-5 mt-3">
                  <p className="text-green-500 mt-2 line-clamp-3 text-xl font-semibold text-start">{item.price}<span className="text-green-500"> $</span></p>
                  <p className="text-yellow-500 flex items-center justify-center gap-2 mt-2 line-clamp-3 text-lg font-semibold text-start">{item.rating.rate}<FaStar /></p>
                </div>
                </div>
                <div className="flex justify-between bg-green-400 rounded-lg items-center mt-5 w-full absolute bottom-0 left-0 ">
                  <div className="w-[33%]  text-white text-4xl flex items-center justify-center p-2 rounded-md">              <NavLink to={`/product/${item.id}`} >
                    <FaEye className="text-white hover:scale-105 duration-1000 hover:text-blue-500" />
                  </NavLink>
                  </div>    
                  <div className="w-[33%]  text-white text-4xl flex items-center justify-center p-2 rounded-md">
                  <FaShoppingCart className="text-white cursor-pointer hover:text-blue-500 hover:scale-105 duration-1000" onClick={() => addToCart(item)} />
                  </div>
                  <div className="w-[33%]  text-white text-4xl flex items-center justify-center p-2 rounded-md">
                  <FaHeart className="text-white hover:text-red-500 hover:scale-105 duration-1000" onClick={() => addToFav(item)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
