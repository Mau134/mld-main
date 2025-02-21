import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import img1 from "../images/shanna-camilleri-LNwO8kzw4No-unsplash.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";

const images = [img1, img2, img3]; // Image array

const Intro = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
            <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                
                {/* Slideshow Section */}
                <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center relative">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            alt="Dwale Airbnb"
                            className={`rounded-lg object-cover transition-opacity duration-1000 w-full h-[400px] ${
                                index === currentSlide ? "opacity-100" : "opacity-0 absolute"
                            }`}
                            src={img}
                        />
                    ))}

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-lg"
                        onClick={() => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    >
                        ⬅
                    </button>
                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-lg"
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
                    >
                        ➡
                    </button>
                </div>

                {/* Text Section */}
                <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                <div className="text-center lg:text-left">
    <h3 className="text-3xl text-black-900 font-bold">About Dwale</h3>
    <div className="flex justify-center lg:justify-start mt-2">
        <div className="w-24 border-b-4 border-blue-900"></div>
    </div>
</div>
                    <p className="my-3 text-xl text-gray-600 font-semibold">
                        Nestled in the serene hills of Mpemba, Malawi, this cozy Airbnb blends modern comforts with traditional charm.
                    </p>
                    <p className="my-3 text-xl text-gray-600 font-semibold">
                        It features spacious rooms, high-speed Wi-Fi, a fully equipped kitchen, and a private patio with stunning views of the lush landscape.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;