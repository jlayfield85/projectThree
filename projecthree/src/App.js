import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import AddAdmin from "./components/addAdmin";
import EditAdmin from "./components/editAdmin";
import CreateAdmin from "./components/createAdmin";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Project 3</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">AddAdmin</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/edit/:id" className="nav-link">Edit Admin</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={AddAdmin} />
          <Route path="/edit/:id" component={EditAdmin} />
          <Route path="/create" component={CreateAdmin} />
        </div>
      </Router>
    );
  }
}

export default App;