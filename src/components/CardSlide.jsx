import React, { useEffect, useState } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import { Link, NavLink } from 'react-router-dom';

const MySplideComponent = () => {
  const [perPage, setPerPage] = useState();

  useEffect(() => {
    const updatePerPage = () => {
      if (window.innerWidth < 740) {
        setPerPage(1);
      } else {
        setPerPage(5); // Set the desired perPage value for larger screens
      }
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
  }, [perPage]); // Ensure the effect runs when perPage changes

  const productData = [
    {
      id: 1,
      name: 'Product 1',
      image: image1,
      price: 50.99,
      discount: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      image: image2,
      price: 30.49,
      discount: null,
    },
    {
      id: 3,
      name: 'Product 3',
      image: image3,
      price: 70.25,
      discount: 20,
    },
    {
      id: 4,
      name: 'Product 4',
      image: image1,
      price: 50.99,
      discount: 10,
    },
    {
      id: 5,
      name: 'Product 5',
      image: image2,
      price: 50.99,
      discount: 10,
    },
    {
      id: 6,
      name: 'Product 6',
      image: image3,
      price: 50.99,
      discount: 10,
    },
  ];

  return (
    <>
     <div className="w-full mt-16 flex flex-col gap-2  text-2xl items-center  ">
        <p className=' text-lg text-yellow-500 '>top Discount On Our Products</p>
      <h1 className='text-4xl text-white font-extrabold'>Products</h1>
      <p className='text-sm text-slate-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
      </div>
    <div className="splide h-fit mb-5 mt-20">
      
      <div className="splide__track">
        <ul className="splide__list flex items-center w-full h-full gap-4">
          {productData.map((product) => (
            product.discount&&( <li
              key={product.id}
              className="splide__slide h-[550px] w-full sm:w-1/4 bg-slate-500 relative rounded-md overflow-hidden"
            >
              <div className="bg-yellow-500 rounded-lg h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-md h-[70%] w-full object-cover"
                />
                <div className="mt-4 p-4 h-full">
                  <h5 className="text-xl font-bold mb-2 text-white">{product.name}</h5>
                  <p className="text-white">Price: ${product.price}</p>
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white p-1 absolute top-1 left-1 flex items-center justify-center rounded-md">
                      - {product.discount}%
                    </span>
                  )}
                  <button className="bg-slate-800 shadow-lg shadow-slate-500 text-white px-4 py-2 rounded-md h-[50px] w-full mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>)
           
          ))}
        </ul>
      </div>
    </div>
    <div className="flex items-center justify-center w-full mt-16 "><Link to={"/"} className="bg-yellow-500 text-white p-2 w-[150px] flex items-center justify-center rounded-md" >All PRODUCTS</Link></div>
    </>
  );
};

export default MySplideComponent;
