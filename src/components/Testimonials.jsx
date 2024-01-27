import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import user from "../assets/women/women.png"



const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [slide,setslide]=useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/comments/");
        setTestimonialData(response.data);
  
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10"  data-aos="zoom-in">
      <div className="w-[90%] mx-auto ">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-yellow-400">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl text-white font-extrabold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData && testimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-gray-800  relative"
                >
                  <div className="mb-4">
                    <img
                      src={user}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="space-y-3">
                      <h1 className="text-4xl font-bold text-white">
                        {data.name}
                      </h1>
                      <p className="text-lg text-gray-500">{data.content}</p>
                    </div>
                  </div>
                  <p className="text-yellow-400 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
