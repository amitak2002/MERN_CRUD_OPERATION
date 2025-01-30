import React , {useEffect, useState }from 'react'
import Card from './Card.jsx'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Read() {

  const [data , setData] = useState([])

  async function getData() {

    try {
      let responses = await fetch('http://localhost:2002/api/v1/user/getusers' , {
        method : "GET"
      })
  
      let result = await responses.json()
  
      if (!(result)) {
        console.log('error dataformat ')
        toast.error('error data format')
        return
      }
      console.log(result)
      if (result) {
        setData(result)
        toast.success('users are sucessfully found ',data)
      }
    } 
    catch (error) {
      console.log('error found at read.jsx')
      toast.error('internal server problem')  
    }
  }
  useEffect(() => {
    getData();
  } , [])
  console.log('dta is ',data)

  return (
    <>
    <ToastContainer/>
    < div className='read'>
    
      {
        (data.length > 0) ? 
          data.map((items) => (
            <Card key={items._id}
            name={items.name}
            email={items.email}
            password={items.password}
            age={items.age}
            gender={items.age}
            />
          )) : <p>users not found</p>
      }
    
    </div>
    
    </>
  )
}

export default Read