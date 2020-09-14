import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import auth from "../../utils/auth";
import request from "../../utils/request";

const LoginForm = () => {
  const [data, setData] = useState({ username: "", password: "" }, []);

  const history = useHistory();

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const body = { identifier: data.username, password: data.password };
    const requestURL =
      process.env.API_URL || "http://localhost:1337/auth/local";

    request(requestURL, { method: "POST", body: body })
      .then((response) => {
        auth.setToken(response.jwt, body.rememberMe);
        auth.setUserInfo(response.user, body.rememberMe);
        redirectUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const redirectUser = () => {
    history.push("/");
  };

  return (
    <form className="container vh-100">
      <div className="row d-flex vh-100">
        <div className="col-6 mx-auto my-auto p-5 border">
          <h1 className="mb-4 text-center" style={{ letterSpacing: "5px" }}>
            LOGIN
          </h1>
          <div className="form-group">
            <label htmlFor="username-input">Username</label>
            <input
              id="username-input"
              className="form-control"
              name="username"
              value={data.username}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              type="password"
              className="form-control"
              name="password"
              value={data.password}
              onChange={handleOnChange}
            />
          </div>
          <div className="d-flex mt-5">
            <button
              onClick={handleOnSubmit}
              className="btn btn-primary px-5 mx-auto"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
