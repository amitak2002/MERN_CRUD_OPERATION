import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Card({name , email , age , gender , password , element_id}) {


  return (
    <div>
        <div className='carddiv'>
            <h3 className='data'>name : {name}</h3>
            <h3 className='data'>email : {email}</h3>
            <h3 className='data'>age : {age}</h3>
            <h3 className='data'>gender : {gender}</h3>
            <h3 className='data'>password : {password}</h3>
        </div>
    </div>
  )
}

export default Card