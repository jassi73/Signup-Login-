import axios from "axios";
import React, { Component, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();
    console.log("gsgdf");
    console.log(email, password);
    axios({
      url: `https://603dc72748171b0017b2da58.mockapi.io/api/v1/login`,
      method: `post`,
      data: {
        name: "jas Raj Singh",
        email: "jayant.singh123@gmail.com",
        phone: 8707608237,
        company: "Ninja Salary",
        password: "test@123",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form>
      <h3>Sign In</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button
        type="submit"
        onClick={login}
        className="btn btn-primary btn-block"
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}

export default Login;
