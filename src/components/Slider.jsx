import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import { NavLink } from "react-router-dom";

const productData = [
    {
        id: 1,
        title:"iphone 15 pro max",
        imageUrl: image1,
        offer: " Upto 50% off on all Men's Wear",
        caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam, repellendus perferendis voluptatem ipsam dolorum voluptatibus reprehenderit dicta quidem corporis vitae commodi eum! Mollitia ipsa praesentium dolorum, suscipit aspernatur voluptatum odio totam nisi minus, architecto exercitationem laudantium porro eligendi dignissimos repudiandae? Eligendi odit iure eaque fugiat perspiciatis earum accusamus, modi doloribus at, perferendis voluptate qui amet mollitia maxime inventore, ad eveniet dolores aperiam quod. Nesciunt commodi, possimus placeat consequatur sint quae quidem. Quasi sunt commodi ducimus dicta veniam dolor nesciunt vero aut, modi enim quidem cumque impedit laboriosam voluptates autem eius repellat libero harum fuga quis architecto placeat natus ea! `,
        link: "/product/"
    },
    {
        id: 2,
        title:"iphone 15 pro max",
        imageUrl: image2,
        offer: " 30% off on all Women's Wear",
        caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam, repellendus perferendis voluptatem ipsam dolorum voluptatibus reprehenderit dicta quidem corporis vitae commodi eum! Mollitia ipsa praesentium dolorum, suscipit aspernatur voluptatum odio totam nisi minus, architecto exercitationem laudantium porro eligendi dignissimos repudiandae? Eligendi odit iure eaque fugiat perspiciatis earum accusamus, modi doloribus at, perferendis voluptate qui amet mollitia maxime inventore, ad eveniet dolores aperiam quod. Nesciunt commodi, possimus placeat consequatur sint quae quidem. Quasi sunt commodi ducimus dicta veniam dolor nesciunt vero aut, modi enim quidem cumque impedit laboriosam voluptates autem eius repellat libero harum fuga quis architecto placeat natus ea!`,
        link: "/product/"
    },
    {
        id: 3,
        title:"iphone 15 pro max",
        imageUrl: image3,
        offer: " 70% off on all Products Sale",
        caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam, repellendus perferendis voluptatem ipsam dolorum voluptatibus reprehenderit dicta quidem corporis vitae commodi eum! Mollitia ipsa praesentium dolorum, suscipit aspernatur voluptatum odio totam nisi minus, architecto exercitationem laudantium porro eligendi dignissimos repudiandae? Eligendi odit iure eaque fugiat perspiciatis earum accusamus, modi doloribus at, perferendis voluptate qui amet mollitia maxime inventore, ad eveniet dolores aperiam quod. Nesciunt commodi, possimus placeat consequatur sint quae quidem. Quasi sunt commodi ducimus dicta veniam dolor nesciunt vero aut, modi enim quidem cumque impedit laboriosam voluptates autem eius repellat libero harum fuga quis architecto placeat natus ea! `,
        link: "/product/"
    },
    // Add more product data as needed
];

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         // Enable autoplay
        autoplaySpeed: 3000,
    };

    return (
        <div className="h-[500px] md:h-[800px] w-full object-cover overflow-hidden bg-black">
            <Slider {...settings} className=" overflow-hidden">
                {productData.map((product) => (
                    <div key={product.id} className="relative">
                        <img
                            src={product.imageUrl}
                            alt={product.caption}
                            className="w-full object-fill h-[800px]  "
                        />
                        <div className="absolute bottom-0 p-20 flex justify-start md:justify-center gap-2 md:gap-10 w-full h-full left-0 right-0  bg-black bg-opacity-30 text-white flex-col">
                           <h1 className="text-4xl uppercase font-bold">{product.title}</h1>
                           <h1 className="text-2xl font-bold text-blue-400">{product.offer}</h1>
                            <p className="text-lg font-bold w-[40%] text-wrap line-clamp-4">{product.caption}</p>
                            <NavLink to={'/login'} className="w-[200px] h-[50px] flex items-center justify-center bg-slate-800 rounded-md text-white"> shop now </NavLink>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SimpleSlider;
