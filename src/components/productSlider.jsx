import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";  // Import axios

import image1 from '../assets/shop1.avif';
import image2 from '../assets/shop2.avif';
import image3 from '../assets/shop3.avif';
import { NavLink } from "react-router-dom";

const ProductSlider = () => {
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
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-[500px] md:h-[800px] w-full object-cover overflow-hidden bg-black" data-aos="zoom-in">
      <Slider {...settings} className=" overflow-hidden">
        {data.slice(17, 20).map((product) => (
          <div key={product.id} className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-fill h-[800px]"
            />
            <div className="absolute w-full bottom-44 md:bottom-0 p-20 flex justify-center items-center md:justify-center gap-2 md:gap-10 text-center h-full left-0 right-0 bg-black bg-opacity-30 text-white flex-col">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-4xl uppercase font-bold"
              >
                {product.title}
              </h1>
              <h1
                className="text-2xl font-bold  text-yellow-400"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {product.price}$
              </h1>
              <p
                className="text-lg font-bold w-[80%] text-wrap  text-start m-5"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {product.description}
              </p>
              <NavLink
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                to={`/product/${product.id}`}
                className="w-[200px] h-[50px] flex items-center justify-center bg-slate-800 rounded-md text-white"
              >
                shop now
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
