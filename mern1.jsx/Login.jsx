
import { stringify } from 'postcss'
import React, { useState } from 'react'
import { SiJson } from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth1 } from '../Context/AuthProvider'
import { ToastContainer, toast } from 'react-toastify'
function Login1() {
  const {store}=useAuth1()
  const navigate=useNavigate()
    const [user,setuser]=useState({

   email:"",
   password:""
     

    })

const handelinput=(e)=>{
console.log(e)
 const name=e.target.name
 const value=e.target.value
 
 setuser(

    {
     ...user,
    [name]:value   
    }
 )


}
const handelesubmit=async(e)=>{
  e.preventDefault()

  try {

    const response=await fetch(`https://freelancing-app-backend-app-4.onrender.com/app/auth/login`,{

     method:"POST",
     headers:{
      "Content-Type":"application/json"
     },
    
     body:JSON.stringify(user)
    

    })

    console.log(response)
    if(response.ok){
      const res_data=await response.json()
      console.log("sever data",res_data)
      
      store(res_data.token)
     toast.success("done")
      navigate("/")
    }
    else{
      toast.error("filed")
    }
  } catch (error) {
    console.log(error)
  }

}

  return (
    <div>
    
      {/* <form onSubmit={handelesubmit}>  
 
    <input type="email" name='email' placeholder='email' onChange={handelinput} value={user.email} />
    <input type="password" name='password' placeholder='password' onChange={handelinput} value={user.password}/>

 <button>SUBMIT</button>
   </form> */}
   
 <div className='min-h-screen flex items-center justify-center bg-gray-100'>
   <div className='w-full max-w-md bg-white shadow-md rounded-lg p-8'>

   <form action="" onSubmit={handelesubmit}>

 <div className='font-semibold text-xl items-center text-center'>

  Our<span className='text-red-500'>Course</span>
</div>
<h1 className='text-xl font-semibold mb-6'>Login</h1>


<input name='email' type="email" placeholder='email' value={user.email} onChange={handelinput}   className='w-full p-2 mb-4 border rounded-md' />
<input name='password' type="password" placeholder='password' value={user.password} onChange={handelinput}  className='w-full p-2 mb-4 border rounded-md' />
<button className='w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-md text-white'>Login</button>

<p className='text-center mb-4'> Register now <Link to="/reg" className='text-blue-600'>Register</Link></p>
   </form>

   </div>
</div>


   
    </div>
  )
}

export default Login1




