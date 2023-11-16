import React from "react";
import { Link } from "react-router-dom";
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import logo from './../Link.png';
export default function Navbar() {


  return (

    <div className="">
      <div className=" d-flex align-items-center align-self-center" 
      style={{backgroundColor: "#3982D8",height:50}}>
        <BsTelephoneFill className="mx-3" color="#fff"/>
        <p className=" mt-2 text-light">(+91)8861023071</p>
        <MdEmail size={22} className="mx-3" color="#fff"/>
        <p className=" mt-2 text-light"><a>madhvitha.r12@gmail.com</a></p>
        </div>
   
   <div className="navbar">
      <nav className="navbar  navbar-expand-sm "
        data-bs-theme="text-bg-light p-3">
       <div className="logo"><img src={logo} alt='logo' /></div>    

        <div className="container-fluid  ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* style={{marginLeft:500}} */}
          <div className="collapse navbar-collapse nav-links" id="navbarSupportedContent " >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-links nav-item px-3">
                <Link to="/">
                  
                  <p>Home</p>
                </Link>
              </li>
              
              <li className="nav-links nav-item px-3">
                <Link to="CreateEmp">
                  
                  <p>Create Employe</p>
                </Link>
              </li>

              <li className=" nav-links nav-item px-3">
             
                  <Link to="ListEmploye"> <p>List Employe</p></Link>
                
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
      </div>
    </div>
  );
}
