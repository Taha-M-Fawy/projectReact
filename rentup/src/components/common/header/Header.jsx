import React from "react";
import   './header.css';
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {navegiator} from "../../data/Data"
const Header = () => {
  return (
    <>
    <header>

      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="navbar-brand logo-brand">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

                 { navegiator.map((list,index)=>(
                     <li className="nav-item" key={index}>
                     <Link className="nav-link " aria-current="page" to={list.path}>
                       {list.text}
                     </Link>
                   </li>
                 ))
                   
                   }

       
            </ul>
            <div className="flex ms-auto">
              <button className=" flex list"> 
                <h4> <span>2</span> My List </h4>
              </button>
              <button className="btn1 button"> 
               <i className="fa fa-sign-out"></i> Sign In
              </button>

            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;
