import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2  text-white md:flex hidden">
      <div className="bg-[#121212] rounded h-[15%] flex flex-col justify-around">
        <Link to="/">
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img className="w-6" src={assets.home_icon} alt="Home Icon" />
            <p className="font-bold">Home</p>
          </div>
        </Link>

        <div className="flex color-white align-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] rounded h-[85%] p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="stack icon" />
            <p className="font-bold">Your Library</p>
          </div>
          <div className="flex gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="arrow_icon" />
            <img className="w-5" src={assets.plus_icon} alt="plus_icon" />
          </div>
        </div>
        <div className="p-4 m-0 bg-[#242424] rounded flex flex-col items-start gap-2 font-semibold">
          <p>Create your first playlist</p>
          <p className="font-light">it's easy we'll help you</p>
          <button className="p-3 bg-white  text-black rounded-full">
            Create playlist
          </button>
        </div>

        <div className="p-4 m-0 bg-[#242424] rounded flex flex-col items-start gap-2 font-semibold">
          <p>Let's find some podcasts to follow</p>
          <p className="font-light">we'll keep you updated on new episodes</p>
          <button className="p-3 bg-white  text-black rounded-full">
            Browse poscasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
