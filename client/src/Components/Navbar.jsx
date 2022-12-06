import React, { Fragment } from "react";
import Logo from "../favicon.ico";
import  "./NavBar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <Fragment>
      <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Pacifico&display=swap" rel="stylesheet"/>
      </div>
          
        <div className="containerNav">
        
          <nav>
           
           
          <span className="navBar">
          <Link to="/home">
            <img id="logoHenry" src={Logo} alt="a happy dog icon"/>
          </Link> 
          <span className="title">The dogpedia</span>
          
          <div className="searchBar"><SearchBar  /></div>
          </span>
          
          </nav>
       </div>
    </Fragment>
  );
}