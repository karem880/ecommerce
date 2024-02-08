import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye, FaHeart, FaHeartBroken, FaShoppingCart, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const Fav = ({ addToCart, setFavLength }) => {
  const [favData, setFavData] = useState([]);
  const [hoveredProducts, setHoveredProducts] = useState({});

  const handleMouseEnter = (productId) => {
    setHoveredProducts((prev) => ({ ...prev, [productId]: true }));
  };

  const handleMouseLeave = (productId) => {
    setHoveredProducts((prev) => ({ ...prev, [productId]: false }));
  };

  useEffect(() => {
    const storedFav = localStorage.getItem("fav");
    if (storedFav) {
      setFavData(JSON.parse(storedFav));
    }
  }, []);

  const handleDeleteItem = (itemId) => {
    const updatedFav = favData.filter((item) => item.id !== itemId);
    setFavData(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    toast.success("Deleted successfully");
    setFavLength(updatedFav.length);
  };

  return (
    <div >
      <div className="w-[90%] mx-auto flex mt-20 justify-center p-3 gap-5 flex-col  mb-10">
        <h1 className="text-yellow-500 text-center p-5 text-4xl font-extrabold">
          {" "}
          FAVOURITES PRODUCTS
        </h1>

        <div className="flex flex-col md:flex-row justify-around flex-wrap gap-2 items-center">
          {favData.length === 0 ? (
            <div>
              <div
                aria-label="Orange and tan hamster running in a metal wheel"
                role="img"
                className="wheel-and-hamster"
              >
                <div className="wheel" />
                <div className="hamster">
                  <div className="hamster__body">
                    <div className="hamster__head">
                      <div className="hamster__ear" />
                      <div className="hamster__eye" />
                      <div className="hamster__nose" />
                    </div>
                    <div className="hamster__limb hamster__limb--fr" />
                    <div className="hamster__limb hamster__limb--fl" />
                    <div className="hamster__limb hamster__limb--br" />
                    <div className="hamster__limb hamster__limb--bl" />
                    <div className="hamster__tail" />
                  </div>
                </div>
                <div className="spoke" />
              </div>
              <h1 className="text-yellow-500 text-center mt-10 text-4xl">
                NO DATA YET
              </h1>
            </div>
          ) : (
            <>
              {favData.map((item) => (
                <div
                  key={item.id}
                  className="card md:w-[24%] h-[580px]  mt-16 w-[90%]"
                >
                  <div className="h-[40%] bg-black w-full">
                    <img
                      src={item.image}
                      className="w-full h-[100%] min-h-full hover:object-right-bottom object-cover"
                      alt=""
                    />
                  </div>
                  <div className="h-[50%] mt-10 w-full relative">
                    <div className="w-full absolute top-4 left-0">
                      <h1 className="text-xl mb-2 font-extrabold line-clamp-1 text-start uppercase text-slate-300">
                        {item.title}
                      </h1>
                      <p className="text-white mt-2 line-clamp-2 text-lg font-bold text-start">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center px-5 mt-3">
                        <p className="text-green-500 mt-2 line-clamp-3 text-xl font-semibold text-start">
                          {item.price}
                          <span className="text-green-500"> $</span>
                        </p>
                        <p className="text-yellow-500 flex items-center justify-center gap-2 mt-2 line-clamp-3 text-lg font-semibold text-start">
                          {item.rating.rate}
                          <FaStar />
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between bg-green-400 rounded-lg items-center mt-5 w-full absolute bottom-0 left-0 ">
                      <div className="w-[33%]  text-white text-4xl flex items-center justify-center p-2 rounded-md">
                        <NavLink to={`/product/${item.id}`}>
                          <FaEye className="text-white hover:scale-105 duration-1000 hover:text-blue-500" />
                        </NavLink>
                      </div>
                      <div className="w-[33%]  text-white text-4xl flex items-center justify-center p-2 rounded-md">
                        <FaShoppingCart
                          className="text-white cursor-pointer hover:text-blue-500 hover:scale-105 duration-1000"
                          onClick={() => addToCart(item)}
                        />
                      </div>
                      <div className="w-[33%]  text-white text-4xl flex items-center justify-center p-2 rounded-md">
                        <FaHeartBroken
                          className="text-white hover:text-red-500 hover:scale-105 duration-1000"
                          onClick={() => handleDeleteItem(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fav;
