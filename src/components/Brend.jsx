import React from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { brendImages } from "../static";

const Brend = () => {
  return (
    <div className="container max-w-[1332px] mx-auto px-4">
      <div className="flex justify-between mb-8 pt-16">
        <h4 className="font-bold text-3xl sm:text-[40px]">
          Only proven brands
        </h4>
        <div className="flex gap-4">
          <button className="hidden sm:flex items-center justify-center mb-[40px] p-3 px-6 border border-black opacity-50 rounded-[100px] hover:opacity-100 transition duration-300 ease-in-out">
            <FaArrowLeftLong />
          </button>
          <button className="hidden sm:flex items-center justify-center mb-[40px] p-3 px-6 border border-black opacity-50 rounded-[100px] hover:opacity-100 transition duration-300 ease-in-out">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="hidden place-items-center gap-5 mt-[72px] sm:grid mb-[100px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {brendImages.map((image, index) => (
          <div
            key={index}
            className="hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <img src={image} alt={`Brend ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brend;
