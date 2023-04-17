import React from "react";

const Player = () => {
  return (
    <div className="bg-main-400 h-full px-5 flex">
      <div className="w-[30%] flex-auto border border-red-500">Detail</div>
      <div className="w-[40%] border border-red-500">Main player</div>
      <div className="w-[30%] flex-auto border border-red-500">Volume</div>

    </div>
  );
};

export default Player;
