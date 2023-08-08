import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDumbbell, faHomeUser } from '@fortawesome/free-solid-svg-icons'
import "./Home.css";
const Home = () => {
  return (
    <div className="grid grid-rows-2 lg:grid-rows-1 grid-flow-row lg:grid-flow-col">
      <div className="row-span-4 m-2 lg:m-10 mb-0 lg:mb-0">
        <div className="flex items-center gap-2 mb-4">
         <img className="w-8 h-6 mt-3 sm:mt-3 md:mt-5   lg:mt-0" src="https://mir-s3-cdn-cf.behance.net/projects/404/9c21e5161360463.Y3JvcCwzMzk5LDI2NTksMzAyLDA.jpg" alt="" />
          <h1 className="text-1xl  sm:text-3xl md:text-4xl lg:text-4xl  font-serif font-bold text-violet-500 mt-3 sm:mt-3 md:mt-5 lg:mt-0 p-0">
            Muslims Daily Prayers Routine
          </h1>
        </div>
        <div className="grid grid-rows-6 sm:grid-rows-3 md:grid-rows-3 gap-3 sm:grid-flow-col  md:grid-flow-col lg:grid-flow-col">
          <h3>prayer </h3>
        </div>
      </div>
      <div className="row-span-1 bg-white mt-3 sm:mt-3 lg:mt-2 shadow-lg m-2 sm:m-2 lg:m-0 rounded-lg sm:rounded-lg lg:rounded-none">
        <h4>This is cart</h4>
      </div>
    </div>
  );
};

export default Home;
