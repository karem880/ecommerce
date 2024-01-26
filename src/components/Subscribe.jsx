import React from "react";
import Banner from "../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="w-full flex flex-col items-center justify-center backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About Our Products
          </h1>
          <form className="flex items-center flex-col justify-center w-[90%] gap-2  ">
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your Name"
            className="w-full p-3 border-none outline-none text-black"
          />
          <textarea
            data-aos="fade-up"
            type="text"
            placeholder="Enter your message"
            className="w-full p-3 border-none outline-none text-black"
          />
          <button className="bg-yellow-500 text-white rounded-md flex items-center justify-center w-[150px] h-[50px]  ">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
