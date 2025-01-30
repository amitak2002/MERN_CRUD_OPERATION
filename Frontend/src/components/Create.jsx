import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  console.log(name, email, password, gender, age);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addUser = { name, email, password, gender, age };

    if (!name || !email || !password || !gender || !age) {
      toast.error("Please fill the full form!");
      return;
    }

    try {
      const response = await fetch("http://localhost:2002/api/v1/user/newuser", {
        method: "POST",
        body: JSON.stringify(addUser),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        console.log("Error in Create.jsx:", result.error);
        setError(result.message); // Corrected
        toast.error(result.message); // Corrected
        return;
      }

      console.log("User created successfully:", result);
      setName("");
      setEmail("");
      setPassword("");
      setGender(""); // Corrected
      setAge("");
      setError("");

      toast.success("Successfully submitted the form!");
    } catch (error) {
      console.log("Something went wrong:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="form" onSubmit={handleSubmit}>
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
  );
}

export default Create;
