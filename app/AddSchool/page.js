"use client"
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function page() {
     const { register,handleSubmit}=useForm();
     const onSubmit=async(data)=>
     {
      try {
        const formData=new FormData();
        formData.append("image",data.image[0]);
        formData.append("name",data.name);
        formData.append("email",data.email);
        formData.append("address",data.address);
        formData.append("state",data.state);
        formData.append("city",data.city);
        formData.append("contact",(Number)(data.contact));
        const res=await axios.post("/api/addSchool",formData, {headers:{
        "Content-Type": "multipart/form-data",
      }});
        if(res.data.success)
        {
           toast.success(res.data.message);
           document.getElementById("form").reset();
        }
      } catch (error) {
         toast.error("error while adding school");
      }
     }
  return (
          <div className='py-10 mt-4 shadow-md bg-white shadow-gray-200   px-10 max-md:mx-[8vw] max-md:px-6 min-[450]:mx-[19%] min-[700]:mx-[25vw] min-[1200]:mx-[37vw] max-lg:mx-[28vw]   rounded-lg'>
          <form id="form" onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-1' action="">
            <div className='flex flex-row justify-between'>
             <h1 className='text-black font-bold'  >Add School</h1>
            </div>
            <p className='text-gray-500 '>Please enter information to add school</p>
            <label htmlFor="">Name</label>
            <input className='border-1 border-gray-700 rounded-lg py-1 px-1'  {...register("name",{required:true})} type="text" />
            <label htmlFor="">Address</label> 
            <input className='border-1 border-gray-700 rounded-lg py-1 px-1' {...register("address",{required:true})} type="text" />
             <label htmlFor="">City</label> 
            <input className='border-1 border-gray-700 rounded-lg py-1 px-1' {...register("city",{required:true})}  type="text" />
             <label htmlFor="">State</label> 
            <input className='border-1 border-gray-700 rounded-lg py-1 px-1' {...register("state",{required:true})}   type="text" />
             <label htmlFor="">Contact Number</label> 
            <input className='border-1 border-gray-700 rounded-lg py-1 px-1' {...register("contact",{required:true})}   type="number" />
             <label htmlFor="">Image</label> 
            <input className='border-1 border-gray-700 rounded-lg py-1 px-1' {...register("image",{required:true})}  type="file" />
              <label htmlFor="">Email</label> 
            <input className='border-1 border-gray-700 rounded-lg py-1 px-1' {...register("email",{required:true})}  type="text" />
            <button type="submit" className='bg-indigo-950 mt-2 rounded-md px-2 py-2  text-white'>Add School</button>
          </form>
        </div>
  )
}

export default page
