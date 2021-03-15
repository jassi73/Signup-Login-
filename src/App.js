import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Login from "./Login.js";
import SignUp from "./Signup.js";

function App() {
  const [query, setQuery] = useState("");

  function search(e) {
    e.preventDefault();
    console.log(query);
    axios({
      url: `https://603dc72748171b0017b2da58.mockapi.io/api/v1/login?email=${query}`,
      method: `get`,
    })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul
                className="navbar-nav ml-auto"
                style={{ display: "flex", alignItems: "center" }}
              >
                <li className="nav-item">
                  <input
                    type="search"
                    className="nav-link"
                    placeholder="Search Email"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </li>
                <li className="nav-link">
                  <button
                    type="submit"
                    onClick={search}
                    className="btn btn-primary btn-block"
                  >
                    Submit
                  </button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
