import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";
import Songsdata from "./Songsdata";
import Albumitems from "./Albumitems";

const DisplayHome = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Albumitems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <Songsdata
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
