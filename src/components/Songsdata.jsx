import React from "react";

const Songsdata = ({ name, id, image, desc }) => {
  return (
    <>
      <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
        <img src={image} className="rounded" alt="" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
      </div>
    </>
  );
};

export default Songsdata;
