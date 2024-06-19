import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl"
            src={assets.arrow_left}
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl"
            src={assets.arrow_right}
          />
        </div>

        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidded md:block">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Instal App
          </p>
          <p className="bg-purple-500  w-7 h-7 text-[15px] p-4 rounded-full flex items-center justify-center text-black">
            S
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <p className="text-black bg-white px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="rounded-2xl px-4 py-1 cursor-pointer bg-black ">Music</p>
        <p className="rounded-2xl px-4 py-1 cursor-pointer bg-black ">
          Products
        </p>
      </div>
    </>
  );
};

export default Navbar;
