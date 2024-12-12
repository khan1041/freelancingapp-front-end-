



import React, { useEffect, useState } from 'react'
import { freecourse } from './Listingpage'
import { useParams } from 'react-router-dom'
import { useAuth1 } from '../Context/AuthProvider'
import Login1 from './Login'
function Freedetails() {
  const {islog}=useAuth1()
const{id}=useParams()
const [free,setfree]=useState({})

useEffect(()=>{
  const filteringdata=freecourse.filter((product)=>product._id==id)
  console.log(filteringdata)
  
setfree(filteringdata[0])
},[id])

  return (
    <div>
     {islog?




      <div className=' md:flex md:ml-5 ml-2 items-center'>
      <div className=''>
      
      <img src={free.imges} alt="" className='relative rounded-lg overflow-hidden shadow-md transform mt-12 w-[100%]' />
      <h1 className='text-2xl font-mono'>{free.title}</h1>
      </div>
 
  
  <div>
  <h1 className='ml-24 mt-4 text-green-600 font-black text-2xl'>Details</h1>
 <p className='text-yellow-600 md:w-1/3 md:ml-16 mt-10 md:text-2xl font-mono'>{free.details}</p>

  </div>
   
      </div>:<Login1/>}
    </div>
  )
}

export default Freedetails


















