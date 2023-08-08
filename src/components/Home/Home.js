import React, { useEffect, useState } from "react";
import "./Home.css";
import Prayers from "../Prayers/Prayers.js";
import Profile from "../Profile/Profile.js";
import Details from "../Details/Details.js";
import Break from "../Break/Break.js";
import Display from "../Dispaly/Display.js";
import { getTheDb } from "../../utilities/fakeDb.js";

const Home = () => {
  const [prayers, setPrayers] = useState([]);
  // const [cart, setCart] =useState([]);
  const [time, setTime] = useState(0);
  const [gap, setGap] = useState("");

  useEffect(()=>{
    const savedTime = getTheDb();
    setGap(savedTime);
  },[])

 
  useEffect(()=>{
    fetch('prayers.json')
    .then(res =>res.json())
    .then(data => setPrayers(data))
  },[])

  const handleAddToCart =(duration)=>{
    const newTime = time + duration;
    setTime(newTime);
}


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
          {
            prayers.map(prayer => <Prayers
            key={prayer.id}
            prayer={prayer}
            handleAddToCart ={handleAddToCart}
            ></Prayers>)
          }
        </div>
      </div>
      <div className="row-span-1 bg-white mt-3 sm:mt-3 lg:mt-2 shadow-lg m-2 sm:m-2 lg:m-0 rounded-lg sm:rounded-lg lg:rounded-none">
        <Profile></Profile>
        <Details></Details>
        <Break
        gap={gap} 
        setGap={setGap}
        ></Break>
        <Display 
        time={time}
        gap ={gap}
        ></Display>
      </div>
    </div>
  );
};

export default Home;
