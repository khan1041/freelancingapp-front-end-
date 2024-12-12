import { useEffect } from "react"
import { Navigate } from "react-router-dom"

import { useAuth1 } from "../Context/AuthProvider"

export const Logout=()=>{
const {LogoutUser}=useAuth1()
useEffect(()=>{

    LogoutUser()


},[LogoutUser])

return <Navigate to={"/login"}/>

}




















