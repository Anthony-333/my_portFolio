import React from "react";
import "./Navbar.css";

import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

function Navbar() {
  const [showMenu, setShowmenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
      <div className="Mobile_links">
        <div className="Mobile_links_padding">

        <div className="Mobile_navbar_Links">
          <Scrollspy>
            <a href="#homepage-padding" id="Mobile_navlinks">
              Home
            </a>
          </Scrollspy>

          <Scrollspy>
            <a href="#homepage-padding" id="Mobile_navlinks">
              About
            </a>
          </Scrollspy>

          <Scrollspy>
            <a href="#homepage-padding" id="Mobile_navlinks">
              Projects
            </a>
          </Scrollspy>

          <Scrollspy>
            <a href="#homepage-padding" id="Mobile_navlinks">
              Services
            </a>
          </Scrollspy>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Navbar_wrapper">
      <div className="Navbar_padding">
        <div className="Navbar_logo">
          <h1>AO</h1>
        </div>

        <div className="Navbar_Links">
          <Scrollspy>
            <a href="#homepage-padding" id="navlinks">
              Home
            </a>
          </Scrollspy>

          <Scrollspy>
            <a href="#homepage-padding" id="navlinks">
              About
            </a>
          </Scrollspy>

          <Scrollspy>
            <a href="#homepage-padding" id="navlinks">
              Projects
            </a>
          </Scrollspy>

          <Scrollspy>
            <a href="#homepage-padding" id="navlinks">
              Services
            </a>
          </Scrollspy>
        </div>

        <UseAnimations
          className="toggle"
          animation={menu2}
          strokeColor="white"
          size={40}
          onClick={() => {
            
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
