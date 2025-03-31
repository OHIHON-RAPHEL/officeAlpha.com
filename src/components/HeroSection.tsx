import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center text-white px-4 md:px-8">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="z-10 max-w-3xl">
        <h2 className="text-lg md:text-xl uppercase">Welcome To</h2>
        <h1 className="text-3xl md:text-5xl font-bold my-2">RaphKing University London</h1>
        <p className="text-gray-300 px-2 md:px-6 text-sm md:text-base">
          Unlock your potential with world-class education at RaphKing University. Our programs are designed
          to equip students with the knowledge and skills needed to excel in their careers.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
          <button className="bg-red-500 px-6 py-2 rounded text-white font-semibold w-full md:w-auto">Our Courses</button>
          <button className="border border-white px-6 py-2 rounded text-white w-full md:w-auto">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
