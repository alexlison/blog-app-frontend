import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning p-3">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-dark" href="#">
            Blog App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-flex" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/createPost">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewMyPost">
                  My Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewAll">
                  All Posts
                </Link>
              </li>
            </ul>
            <div className="ms-auto">
              <button className="btn btn-danger" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;