
import React from 'react'
import NavBar from './NavBar'

import React, { useEffect, useState } from "react";
import axios from "axios";


const ViewMyPost = () => {
  const [token, changeToken] = useState(sessionStorage.getItem("token"));
  const [userId, changeUserId] = useState({
    userId: sessionStorage.getItem("userId"),
  });
  const [userName, changeUserName] = useState(
    sessionStorage.getItem("userName")
  );

  const [output, changeOutput] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:4000/viewMyPost", userId, {
        headers: { token: token, "Content-Type": "application/json" },
      })
      .then((response) => {
        changeOutput(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

    
    <div>
        <NavBar />
        
        ViewMyPost
    </div>
  )
}

    <div>
      <NavBar />
      <div className="container">
        <h4 className="m-4 text-center">My Posts</h4>
        <div className="row mb-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-5">
            <div className="row g-3">
              {output.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="card mt-2 w-75 mx-auto">

                      <div class="row g-0">
                        <div className="card-header fw-bold">{userName}</div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <p class="card-text">{value.message}</p>
                            <p class="card-text">
                              <small class="text-body-secondary m-3 text-end ms-auto">
                                Posted on{" "}
                                {new Date(value.postDate).toLocaleString(
                                  "en-GB",
                                  {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "2-digit",
                                    hour: "numeric",
                                    minute: "2-digit",
                                    hour12: true,
                                  }
                                )}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMyPost;
