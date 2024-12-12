import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth1 } from '../Context/AuthProvider'
function Nav1() {
  const{islog}=useAuth1()
  const [show,setshow]=useState()



  return (
    <div>
 <nav className='shadow-lg px-4 py-4'>

<div className='flex justify-between container mx-auto'>



<div className='font-semibold text-xl'>

Our<span className='text-red-500'>Course</span>
</div>
<div className=''>
<ul className=' hidden md:flex space-x-5'>
<Link to="/" className='hover:text-blue-400'>HOME</Link>
<Link to="/pro" className='hover:text-blue-400'>$PRO</Link>
{islog?
<Link to="/about" className='hover:text-blue-400'>ABOUT</Link>:""}
<Link to="/Con" className='hover:text-blue-400'>CONTACT</Link>


</ul>
<div className='md:hidden' onClick={()=>setshow(!show)}>{show?"x":"|||"}</div>
</div>
<div className=' flex space-x-2 '>


{/* <Link to='/dashbord' className='bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded'>DASHBORD</Link> */}





{islog?
   <div>
   <Link to={"/logout"}
   
     className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
   >
     LOGOUT
   </Link>
 </div>:


<Link
to="/login"
className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
>
LOGIN
</Link>

}

          
         
          




</div>






</div>

{/* movilenaver */}
{
show&&(
<div className='bg-white'>
<ul className='flex  flex-col items-center h-screen justify-center space-y-3 md:hidden  '>
<Link to="/" className='hover:text-blue-400'>HOME</Link>
<Link to="/login" className='hover:text-blue-400' onClick={()=>setshow(!show)} smooth="true" duration={500} offset={-70} activeClass="active">login</Link>
<Link to="/pro" className='hover:text-blue-400'>Premium</Link>
<Link to="/about" className='hover:text-blue-400'>ABOUT</Link>
<Link to="/Con" className='hover:text-blue-400'>CONTACT</Link>


</ul>
</div>



)}

  </nav>
    
    
    </div>
  )
}

export default Nav1
