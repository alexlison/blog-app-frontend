import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

  const token = sessionStorage.getItem("token")

  const navigate = useNavigate()

const [input,changeInput] = useState(
  { userId: sessionStorage.getItem("userId"), message:"" }
)

const inputHandler = (event) => {
  changeInput({...input,[event.target.name] : event.target.value })
}

const readValues = () => {
  
  axios.post("http://localhost:4000/createPost",input, 
    {headers: {"token":token,"Content-Type":"application/json"} } ).then(
      (response) => {

        if (response.data.Status == "Invalid Authentication") {

          alert("Invalid Authentication")
          
        } else {
          
          alert("Post created Succefully")
          navigate("/viewMyPost")
        }

      
      }
    ).catch(
      (error) => {
        console.log("error",error)
      }
    )
}


  return (
    <div>
      <div className="container">
        <h4 className="m-4 text-center">Post a Message</h4>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Post Message</label>
                <textarea id="" className="form-control w-50 h-100 mb-4 " name='message' value={input.message} onChange={inputHandler} ></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success mt-4" onClick={readValues}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost