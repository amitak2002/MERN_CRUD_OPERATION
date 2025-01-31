import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


function Update() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const {id} = useParams()
  const navigate = useNavigate()

  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:2002/api/v1/user/${id}` , {method : "GET"})
      const result = await response.json()

      if (!result) {
        console.log('error comes user not found')
        toast.error('user not found')
        return
      }

      if (result) {
        console.log('user sucessfully found ',result)
        toast.success('user sucessfully found')
        setName(result.name)
        setAge(result.age)
        setEmail(result.email)
        setPassword(result.password)
        setGender(result.gender)
      }
    } 
    catch (error) {
      console.log('user not found internal server error')
      toast.error('internal server error update.jsx')
    }
  }

  useEffect(()=> {fetchUser()} , [id])

  const handleUpdate = async (e) => {

    e.preventDefault()

    const updateUser = {name , email , password , age , gender}
    console.log(name , age , email , password , gender)

    try {
      const response = await fetch(`http://localhost:2002/api/v1/user/updateuser/${id}` , {
        method : "PATCH" , 
        body : JSON.stringify(updateUser),
        headers : {
          "Content-Type": "application/json",
        }
      })

      console.log('updated user is : ',response)

      if (!response) {
        toast.error('user not updated in updated.jsx' , {autoClose : 2000})
        return
      }

      if(response) {
        console.log('updated user is ',response)
        toast.success('updated successfully ',{autoClose : 2000})
        navigate('/all')
      }  
    } 
    catch (error) {
      console.log('error comes at updated.jsx')
      toast.error('internal server error at updated.jsx' , {autoClose : 2000})
    }
  }

  return (
    <>
      <ToastContainer  position="top-center"/>
      <h1>Update Form</h1>
      <form className="form" onSubmit={handleUpdate}>
        <div className="formdiv">
          <div className="formcontent">
            <label>Name: </label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="formcontent">
            <label>Email: </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="formcontent">
            <label>Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="formcontent">
            <label>Gender: </label>
            <select className="select" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="formcontent">
            <label>Age: </label>
            <input type="number" value={age} max={99} min={5} onChange={(e) => setAge(e.target.value)} />
          </div>
        </div>

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default Update