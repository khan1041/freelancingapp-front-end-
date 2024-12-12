




import React from 'react'
import { Link } from 'react-router-dom'
import { freecourse } from './Listingpage'
import { useAuth1 } from '../Context/AuthProvider'
import { ToastContainer, toast } from 'react-toastify'
function Homepage() {

const {islog}=useAuth1()



  return (
    <div>

    <div className='mt-5 w-full md:flex relative rounded-lg overflow-hidden shadow-md transform '>
      <div className='w-[50%] '>
 
 <img src="https://img.freepik.com/free-vector/antigravity-people-background_23-2148072677.jpg" alt="" className='hover:scale-105 transition-transform duration-300' />
      </div>

   <div className='mt-11'>

 <h1 className='text-2xl font-semibold ml-8'>welcome our website</h1>
<h1 className='text-purple-600 mt-8 ml-10'>free and pro course in our website available</h1>
{islog?"":<div><h1 className='text-emerald-400 text-2xl font-extrabold'>please Loging or Register</h1>
<Link to={'/reg'}>
<button className='bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded mt-4'>LOGIN OR REGISTER</button>

</Link></div> 
}


   </div>
    </div>




<div className='container mx-auto my-12 p-4'>

  <h1>Free course</h1>
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-6'>


{freecourse.map((item)=>{

return(
<div className='relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 w-80'>
  <img src={item.imges} alt="" className='w-full h-48 object-cover' />
  <div className='flex gap-14'>

  <h1 className='ml-4 text-[17px] text-blue-700 font-semibold text-2xl'>{item.title}</h1>

 <Link to={`/free/${item._id}`}>
  <button className='bg-gray-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded'>Details</button>
  </Link>


  </div>
 
  
  </div>
)

})}

</div>
</div>


    </div>
  )
}

export default Homepage
















