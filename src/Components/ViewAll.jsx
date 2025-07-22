import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewAll = () => {
  const [token, changeToken] = useState(sessionStorage.getItem("token"));

  const [output, changeOutput] = useState([]);

  const fetchData = () => {
    axios
      .post(
        "http://localhost:4000/viewAll",
        {},
        { headers: { token: token, "Content-Type": "application/json" } }
      )
      .then((response) => {
        changeOutput(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <h4 className="m-4 text-center">All Posts</h4>
        <div className="row mb-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-5">
            <div className="row g-3">
              {output.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <div class="card mt-2 w-75 mx-auto">
                      <div class="row g-0">
                        <div className="card-header fw-bold">
                          {value.userId.name}
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <p class="card-text">{value.message}</p>
                            <p class="card-text">
                              <small class="text-body-secondary m-3 ms-auto">
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

export default ViewAll;
