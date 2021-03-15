import React, { Component, useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");

  function signup(e) {
    console.log(name, email, number);
    e.preventDefault();
    console.log("gsgdf");
    axios({
      url: `https://603dc72748171b0017b2da58.mockapi.io/api/v1/login`,
      method: `post`,
      data: {
        name: name,
        email: email,
        phone: number,
        company: company,
        password: password,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <form style={{ marginTop: 80 }}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="First name"
        />
      </div>

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
        <label>Phone</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Number"
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Company</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter  Company"
          onChange={(e) => setCompany(e.target.value)}
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

      <button
        type="submit"
        onClick={signup}
        className="btn btn-primary btn-block"
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
  );
}
export default Signup;
