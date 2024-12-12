
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth1 } from '../Context/AuthProvider';
import { FiAlertCircle } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify'


function Reg() {
  const{store}=useAuth1()
 const navigate= useNavigate()
const[user,setuser]=useState({
name:"",
email:"",
password:""
})
   const handelinput=(e)=>{
  
   console.log(e)
 let name=e.target.name
 let value=e.target.value

 setuser({
  ...user,

[name]:value,

  
 });

   };

const handelesubmit=async(e)=>{
e.preventDefault()
console.log(user)
  try {
    const response=await fetch(`https://freelancing-app-backend-app-4.onrender.com/app/auth/register`,
      {
    method:"POST",
    headers:{
    
     "Content-Type":"application/json",
    
    },
     body:JSON.stringify(user)
    
      })
if(response.ok){
//yRe5TfOqgToDfRYfHELJseQpBgEnVMG
  toast.success("success")
  const res_data=await response.json()
  console.log("data",res_data)
 
 store(res_data.token)
 navigate("/")

}
else{
  toast.error("failed")
}

  
  } catch (error) {
    console.log(error)
  }
}




  return (
    <div>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
   
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-8'>
      <div className='font-semibold text-xl items-center text-center'>

Our<span className='text-red-500'>Course</span>
</div>
        <h1 className='text-xl font-semibold mb-6'>Register</h1>
   <form onSubmit={handelesubmit}  >  
   <input type="text" name='name' onChange={handelinput} placeholder='name'value={user.name} className="w-full p-2 mb-4 border rounded-md'"/>
   <br></br>

    <input type="email" name='email' placeholder='email' onChange={handelinput} value={user.email} className='w-full p-2 mb-4 border rounded-md' />
    <br></br>
    <input type="password" name='password' placeholder='password' onChange={handelinput} value={user.password} className='w-full p-2 mb-4 border rounded-md'/>

 <button className='w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-md text-white'>Register</button>
 <p className='text-center mb-4'>Alreday Register?<Link to="/login" className='text-blue-600'>Login</Link></p>
   </form>
   </div>
</div>
    </div>
  )
}

export default Reg
