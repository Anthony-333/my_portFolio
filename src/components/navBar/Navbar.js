import React from "react";
import "./Navbar.css";

import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";

import Scrollspy from "react-scrollspy";

import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";



function myFunction() {
  var x = document.getElementById("Mobile_div");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function Navbar() {

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`Navbar_wrapper ${show && "nav__black"}`}>
    <div className="Navbar_padding">
      <div className="Navbar_logo">
        <h1 className="Brand_Logo">AO</h1>
      </div>

      <div className="Navbar_Links">
        <Scrollspy>
          <a href="" id="navlinks">
            Home
          </a>
        </Scrollspy>

        <Scrollspy>
          <a href="" id="navlinks">
            About
          </a>
        </Scrollspy>

        <Scrollspy>
          <a href="" id="navlinks">
            Projects
          </a>
        </Scrollspy>

        <Scrollspy>
          <a href="" id="navlinks">
            Services
          </a>
        </Scrollspy>
      </div>

      <UseAnimations
        className="toggle"
        animation={menu2}
        strokeColor="white"
        size={40}
        onClick={myFunction}
      />
    </div>

    <div id="Mobile_div">
      <div className="Mobile_div_padding">
        <div className="Mobile_Links">
          <Scrollspy className="Mobile_navlinks">
            <a href="">Home</a>
          </Scrollspy>

          <Scrollspy className="Mobile_navlinks">
            <a href="">About</a>
          </Scrollspy>

          <Scrollspy className="Mobile_navlinks">
            <a href="">Projects</a>
          </Scrollspy>

          <Scrollspy className="Mobile_navlinks">
            <a href="">Services</a>
          </Scrollspy>

          <div className="Nav_Social_Links_icons">
            <div className="Nav_Social_Links_icons_padding">
              <div className="Nav_Social_Links_icons_div">
                <GrMail size="25" />
              </div>
              <div className="Nav_Social_Links_icons_div">
                <IoLogoWhatsapp size="25" />
              </div>
              <div className="Nav_Social_Links_icons_div">
                <FaPhoneAlt size="25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar





