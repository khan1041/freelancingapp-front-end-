


import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detailspage() {

    const {id}=useParams()
    const [blogs,setBlogs]=useState({})


 useEffect(()=>{
    const details=async()=>{

        try {
            const data= await fetch (`https://freelancing-app-backend-app-4.onrender.com/app/auth/singale/${id}`,{
         
                method:"GET",
                headers:{
        
                    "Content-Type":"application/json",
                   
                   },
            }
           
        )
        const pageshow=await data.json()
        console.log(pageshow.msg)
        setBlogs(pageshow.msg)
        } catch (error) {
            console.log(error)
        }
    
    
     }
 details()

 },[id])

  return (
    <div>

 
<div className=' md:flex md:ml-5 ml-2 items-center'>
      <div className=''>
 
  
  <div>
  <h1 className='ml-24 mt-4 text-green-600 font-black text-2xl'>Details</h1>
      
  <img src={blogs.image} alt="" className='relative rounded-lg overflow-hidden shadow-md transform mt-12 w-[40%]' />
      <h1 className='text-2xl font-mono'>{blogs.titile}</h1>
     <button className='text-2xl text-teal-500 border border-red-500 '>${blogs.price}</button>
      </div>
 

  </div>
   </div>
    </div>
  )
}

export default Detailspage















