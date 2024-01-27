import React, { useEffect, useState } from "react";
import Banner from "../assets/website/orange-pattern.jpg";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/comments", { name, content: message });
      console.log(response);
        toast.success("Submission successful!");
        
      
    }
    catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting data. " + error.message);
    }
    finally {
      setSubmitting(false);
  
      
    }
    window.onload()
  };
  
  return (
    <div
    id="contact"
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="w-full flex flex-col items-center justify-center backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About Our Products
          </h1>
          <form onSubmit={handleSubmit} className="flex items-center flex-col justify-center w-[90%] gap-2">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 border-none outline-none text-black rounded-md"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              data-aos="fade-up"
              type="text"
              placeholder="Enter your message"
              className="w-full p-3 border-none outline-none text-black rounded-md"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white rounded-md flex items-center justify-center w-[150px] h-[50px]"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "SEND"}
            </button>
       
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
