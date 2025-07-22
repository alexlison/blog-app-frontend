import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const SignUp = () => {

const [input,changeInput] = useState(

    { name: "",
      email:"",
      phone:"",
      password:"",
      cnfPassword:""
    }
)

const inputHandler = (event) => {
    changeInput({...input,[event.target.name]:event.target.value })
}

const readValues = () => {

   if (input.password == input.cnfPassword) {
   
    let newInput = {"name":input.name,"email":input.email,"phone":input.phone,"password":input.password}
     
    axios.post("http://localhost:4000/signup",newInput).then(
        (response) => {

            console.log(response.data)

            if (response.data.Status == "Success") {

                alert("Registration Successfull")
                changeInput( { name: "",email:"",phone:"",password:"",cnfPassword:""} )
                
            } else {

                alert("Email Id Already Exists !")
                changeInput( { name: "",email:"",phone:"",password:"",cnfPassword:""} )
                
            }

        }
    ).catch()
    
   } else {
    alert("Password and Confirm Password Not Match !")
    
   }
    
}

  return (
    <div>
       
       <div className="container">
          <Link to="/" className="position-absolute top-0 start-0 m-4 fw-semibold text-dark text-decoration-none">
            <i className="bi bi-arrow-left-circle-fill fs-2"></i>
          </Link>

       </div>
        
<div className="container p-4 bg-light border rounded shadow mt-5" style={{ maxWidth: '430px' }}>
        <h4 className="m-3 mb-4 text-center text-warning   fw-bold">Sign Up</h4>

        <div className="row p-1">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3 ">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <input type="text" className="form-control pb-2 pt-2" name='name' value={input.name} onChange={inputHandler} placeholder="Enter your full name" />
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <input type="email" className="form-control pb-2 pt-2" placeholder="Enter your email" name='email' value={input.email} onChange={inputHandler}  />
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  <input type="text" className="form-control pb-2 pt-2" placeholder="Enter your phone number" name='phone' value={input.phone} onChange={inputHandler}  />
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input type="password" className="form-control pb-2 pt-2" placeholder="Enter password" name='password' value={input.password} onChange={inputHandler}  />
                </div>
              </div>
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input type="password" className="form-control pb-2 pt-2" placeholder="Confirm password" name='cnfPassword' value={input.cnfPassword} onChange={inputHandler}  />
                </div>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
                <button className="btn btn-warning px-4 w-100 mt-2 mb-3 p-2" onClick={readValues}>Register</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp