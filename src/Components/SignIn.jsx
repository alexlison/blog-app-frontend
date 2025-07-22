import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const SignIn = () => {

const navigate = useNavigate()

const [input,changeInput] = useState(
    { email: "", password:"" }
)

const inputHandler = (event) => {
    changeInput({...input,[event.target.name] : event.target.value })

}

const readValues = () => {

    axios.post("http://localhost:4000/signIn",input).then(
        (response) => {

            if (response.data.Status == "Invalid Email id") { 

                alert("Invalid Email id !")
                
            } else if (response.data.Status == "InCorrect password" ) {
                alert("InCorrect password !")
                
            }else {
                
                let token = response.data.token
                let userId = response.data.userId
                let userName = response.data.name
                console.log("token -> ",token)
                console.log("userId ->",userId)
                console.log("userName ->",userName)

                sessionStorage.setItem("userId",userId)
                sessionStorage.setItem("token",token)
                sessionStorage.setItem("userName",userName)

                navigate("/createPost")
            }
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )
  
}

  return (
    <div>
      <div className="container mt-5 p-4 bg-light border rounded shadow" style={{ maxWidth: '400px' }}>
        
     <div className="text-center mb-3">
  <i className="bi bi-person-circle fs-1 text-warning"></i>
  <h4 className="mt-2 fw-bold text-dark">Login</h4>
</div>

        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <input type="text" className="form-control pb-2" placeholder="Username" name='email' value={input.email} onChange={inputHandler} />
                </div>
              </div>
              <div className="col col-12">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input type="password" className="form-control pb-2" placeholder="Password" name='password' value={input.password} onChange={inputHandler}  />
                </div>
              </div>
              <div className="col col-12 text-center">
                <button className="btn btn-warning w-100  mt-2 mb-1" onClick={readValues}>Login</button>
              </div>
              <div className="col col-12 text-center">
                <small>
                  Don't have an account? <Link to="/signUp" className="text-decoration-none m-1 fw-bold"> Sign Up</Link>
                </small>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
