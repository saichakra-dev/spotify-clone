import React from "react";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/assets";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

const Displayalbums = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} />
        <div className="flex flex-col ">
          <p>PlayList</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1 flex gap-2">
            <img className="inline-block w-5" src={assets.spotify_logo} />
            <b>Spotify</b>
            1,323,154 likes
            <b>50 songs,</b>
            about 2 ht 30 min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-5 pl-2 text-[#a7a7a7]">
        <p className="flex items-center">
          <b className="mr-4">#</b>title
        </p>
        <p className="flex items-center">album</p>
        <p className="sm:block hidden flex items-center">Date Added</p>
        <img className=" w-6 " src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7]">
          <div className="flex items-center gap-4">
            <p>{item.id + 1}</p>
            <img className="w-8 rounded" src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
          <p className="text-[15px] flex items-center">{albumData.name}</p>
          <p className="text-[15px] sm:block hidden">5 days ago</p>
          <p className="text-[15px] text-center flex items-center">
            {item.duration}
          </p>
        </div>
      ))}
    </>
  );
};

export default Displayalbums;
