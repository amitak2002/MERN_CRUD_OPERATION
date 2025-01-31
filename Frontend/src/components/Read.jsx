import React , {useEffect, useState }from 'react'
import Card from './Card.jsx'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


function Read() {

  const [data , setData] = useState([])
  const navigate = useNavigate()

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

      if (result.length == 0) {
        toast.error('no users are found' , {autoClose : 3000})
        return
      }
      
      
      if (result.length > 0) {
        setData(result)
        toast.success('users are sucessfully found ' , {autoClose : 3000})
      }
      
    } 
    catch (error) {
      console.log('error found at read.jsx')
      toast.error('internal server problem' , {autoClose : 3000})  
    }
  }
  useEffect(() => {
    getData();
  } , [])
  console.log('dta is ',data)

  const handleDelete = async (element_id) => {
  
    try {

      const response = await fetch(`http://localhost:2002/api/v1/user/deleteuser/${element_id}` , {
      method : "DELETE"
      })

      const result = await response.json()

      if (!result) {
        console.log('data is not found')
        toast.error('something in error' , {autoClose : 3000})
        return
      }

      if (result) {
        toast.success('data deleted sucessfully' , {autoClose : 3000})
        setTimeout(()=> {
          getData();
        } , 4000)
      }
    }
    
    catch (error) {
      console.log('error found at read.jsx delete')
      toast.error('internal server error' , {autoClose : 3000})
    }
  }

  const handleUpdate = (id) => {

    navigate(`/update/${id}`)
  }
    
  return (
    <>
    <ToastContainer  position="top-center"/>
    < div className='read'>
    
      {
        (data.length > 0) ? 
          data.map((items) => (
            <div key={items._id} className='card'>
              <button onClick={() => handleDelete(items._id)}>delete</button>
              <button onClick={() => handleUpdate(items._id)}>update</button>
              <Card key={items._id}
              name={items.name}
              email={items.email}
              password={items.password}
              age={items.age}
              gender={items.age}
              />
            </div>
          )
        ) : <p>users not found</p>
      }
    
    </div>
    
    </>
  )
}

export default Read