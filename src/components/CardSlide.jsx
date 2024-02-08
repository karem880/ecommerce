import React, { useEffect, useState } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

const MySplideComponent = () => {
  const [perPage, setPerPage] = useState(5);
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
  const displayeddata=data.slice(9,17)

  useEffect(() => {
    const updatePerPage = () => {
      setPerPage(window.innerWidth < 1050 ? 1 : 5);
    };

    // Initial update
    updatePerPage();

    // Listen to window resize events
    window.addEventListener('resize', updatePerPage);

    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: perPage,
      autoScroll: {
        speed: -3,
      },
    });

    // Mount the AutoScroll extension
    splide.mount({ AutoScroll });

    return () => {
      splide.destroy();
      // Remove the event listener when the component is unmounted
      window.removeEventListener('resize', updatePerPage);
    };
  }, [perPage]);

  return (
    <>
      <div className="w-full mt-16 flex flex-col gap-2 text-2xl items-center">
        <p className='text-lg text-white'>Top Discount On Our Products</p>
        <h1 className='text-4xl text-white font-extrabold'>Products</h1>
        <p className='text-sm text-slate-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
      </div>
      <div className="splide h-fit mb-5 mt-20">
        <div className="splide__track" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <ul className="splide__list flex items-center w-full h-full gap-4">
            {displayeddata.map((product) => (
              <li key={product.id} className="splide__slide h-[550px] w-full sm:w-1/4 bg-slate-500 relative rounded-md overflow-hidden">
                <div className="bg-slate-700 rounded-lg hover:scale-105 duration-1000 cursor-pointer shadow-xl shadow-yellow-300 h-full" data-aos="zoom-in">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="rounded-md hover:scale-105 duration-700 h-[70%] bg-white w-full object-contain"
                  />
                  <div className="mt-4 p-4 h-full">
                    <h5 className="text-xl font-bold mb-2 hover:text-yellow-400 text-white line-clamp-1">{product.title}</h5>
                    <p className="text-white text-2xl hover:text-yellow-400 ">Price: ${product.price}</p>
                    <span className="bg-red-500 text-white p-1 absolute top-1 left-1 flex items-center justify-center rounded-md">
                     {product.id % 2  ===0 ? "-10%" : "-20%"} 
                    </span>
                    <NavLink to={`/product/${product.id}`}>
                      <button className="bg-slate-800 hover:scale-105 duration-1000 hover:text-yellow-400 shadow-lg shadow-slate-500 text-white px-4 py-2 rounded-md h-[50px] w-full mt-2">Show Item</button>
                    </NavLink>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-16 ">
        <Link to={"/shop"} className="bg-yellow-500 text-white p-2 w-[150px] flex items-center justify-center rounded-md"> All PRODUCTS</Link>
      </div>
    </>
  );
};

export default MySplideComponent;
