import React from "react";
import Slider from "./Slider";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="overflow-y-scroll flex w-[100vw] h-[100vh] bg-white aspect-video sm:bg-gray-900 sm:w-[100vw] overflow-x-hidden ">
        <Slider />
        <Outlet />
      </div>
      <div></div>
    </>
  );
};

export default Body;
