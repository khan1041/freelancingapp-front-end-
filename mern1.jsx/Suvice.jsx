

import React from 'react'
import { useAuth1 } from '../Context/AuthProvider'
import Login1 from './Login'
import { Link } from 'react-router-dom'
function Suvice() {
  const {service,user1,islog}=useAuth1()
   console.log(service)
  return (
    <div className='container mx-auto my-12 p-4'> 
 {islog?
   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6 '>
{Object.values(service).map((item)=>{

return <div className='relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300'>
   
<Link to={`/details/${item._id}`}>  <img src={item.image} alt="" className='w-full h-48 object-cover'/></Link>
  
  <h1 className='text-lg font-semibold'>{item.name}</h1>
</div>
})} </div>:

<div>
  <Login1/>
</div>


    } 


    </div>
  )
}

export default Suvice




