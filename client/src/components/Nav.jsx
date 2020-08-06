import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <React.Fragment>
        <ul classNameName="nav nav-tabs">
      <li classNameName="nav-item">
        <Link classNameName={props.currentPage === "Home" ? "nav-link active" : "nav-link"} to="/">
          Home
       </Link>
      </li>
      <li classNameName="nav-item">
          <Link classNameName={props.currentPage === "Contact" ? "nav-link active" : "nav-link"} to="/contact">
          Contact
          </Link>
      </li>
      <li classNameName="nav-item">
          <Link classNameName={props.currentPage === "Resume" ? "nav-link active" : "nav-link"} to="/resume">
          Resume
      </Link>
</li>
    </ul>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="./Portfolio.html">Résumé</a>
                <a className="dropdown-item" href="./contact.html">Contact</a>
                <a className="dropdown-item" href="./index.html">About Me</a>
              </div>
          </li>
        </ul>
      </div>
      </React.Fragment>
  );
}

export default Nav;
