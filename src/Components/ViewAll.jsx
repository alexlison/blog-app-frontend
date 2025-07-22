import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewAll = () => {

  const [token,changeToken] = useState(sessionStorage.getItem("token"))

  const [output, changeOutput] = useState([]);

  const fetchData = () => {
    axios.post("http://localhost:4000/viewAll",{},
        { headers:{"token":token,"Content-Type": "application/json"}}).then(
        (response) => 
        {
            changeOutput(response.data)
        }
    ).catch(
        (error) => {
            console.log("error",error)
        }
    )
  }


  useEffect(() => { fetchData() },[])

 
  return (
    <div>
        <NavBar />
      <div className="container">
        <h4 className="m-4 text-center">All Posts</h4>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
             
             { output.map(
                (value,index) => {

                    return(
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                     <h4 className="m-4"></h4>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <p class="card-text">
                          {value.message}
                        </p>
                        <p class="card-text">
                          <small class="text-body-secondary">
                            Posted on {value.postDate}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                    )

                }
             ) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;