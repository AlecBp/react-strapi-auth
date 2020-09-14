import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="vh-100 vw-100 d-flex flex-column">
      <h1 className="mt-5 text-center w-100">Home page</h1>
      <Link className="btn btn-warning px-5 mx-auto mt-5" to="/secret">
        Secret page
      </Link>
      <div className="d-flex flex-row justify-content-center align-items-center mb-auto mt-auto p-5 border">
        <Link to="/login" className="btn btn-primary rounded-0 px-5 mx-5">
          Login page
        </Link>
        <Link to="/logout" className="btn btn-danger rounded-0 px-5 mx-5">
          Logout page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
