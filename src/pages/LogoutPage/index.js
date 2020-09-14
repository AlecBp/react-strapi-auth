import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../components/Logout";

const LogoutPage = () => {
  return (
    <div>
      <Logout />
      <div className="d-flex my-5">
        <Link to="/" className="btn btn-primary px-5 mx-auto">
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default LogoutPage;
