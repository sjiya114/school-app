"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function page() {
const [datas,setDatas]=useState([]);
 const fetchData=async()=>
 {
  try {
    const res=await axios.get("/api/showSchool");
    if(res.data.success)
    {
       setDatas(res.data.data);
       toast.success("successfully fetched data");
    }
  } catch (error) {
     toast.error("error while fetching data");
  }
 }
 useEffect(()=>
{
 fetchData();
},[])
  return (
    <>
    <h1 className="text-6xl text-center font-semibold mt-10 mb-20 text-white">All Schools</h1>
    <div className="flex max-w-screen-xl mx-auto flex-row flex-wrap space-y-10 justify-evenly">
      {datas.map((data,index)=>(
        <div key={index} className="flex  text-white border-gray-500 shadow-white shadow-md hover:scale-105  border-2 rounded-lg flex-col space-y-2 ">
           <img src={data.image} className="w-66 h-50 rounded-lg" alt="image" />
           <div className="flex  flex-col  px-4 py-4 space-y-2">
            <h1 className="text-2xl font-sans leading-tight">{data.name}</h1>
          <p className="text-lg">{data.address}</p>
          <p className="text-lg">{data.city}</p>
            </div>  
          
        </div>
      ))}
    </div>
    </>
  )
}
