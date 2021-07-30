import React from "react";
import "./Main.css";

import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaArrowDown,
} from "react-icons/fa";

import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";

import Myself from "./img/self.png";
import Scrollspy from "react-scrollspy";

function Main() {
  return (
    <div className="Main_body_wrapper">
      <div className="Main_body_wrapper_padding">
        <div className="Social_Links_icons">
          <div className="Social_Links_icons_div">
            <FaFacebookF />
          </div>
          <div className="Social_Links_icons_div">
            <FaTwitter />
          </div>
          <div className="Social_Links_icons_div">
            <FaGithub />
          </div>
          <div className="Social_Links_icons_div">
            <FaLinkedinIn />
          </div>
        </div>

        <div className="Main_body_text">
          <div className="Main_body_text_padding">
            <h1 className="Welcome_text_1">Hi,</h1>
            <h1 className="Welcome_text_2">I'm&nbsp;Anthony</h1>
            <div className="Rubber_band_div">
              <h1 className="Welcome_text_3">F</h1>
              <h1 className="Welcome_text_3">u</h1>
              <h1 className="Welcome_text_3">l</h1>
              <h1 className="Welcome_text_3">l</h1>
              <h1 className="Welcome_text_3">&nbsp;</h1>
              <h1 className="Welcome_text_3">S</h1>
              <h1 className="Welcome_text_3">t</h1>
              <h1 className="Welcome_text_3">a</h1>
              <h1 className="Welcome_text_3">c</h1>
              <h1 className="Welcome_text_3">k</h1>
              <h1 className="Welcome_text_3">&nbsp;</h1>
              <h1 className="Welcome_text_3">D</h1>
              <h1 className="Welcome_text_3">e</h1>
              <h1 className="Welcome_text_3">v</h1>
            </div>
            <div className="Modeller">
              <h1 className="Welcome_text_2">And&nbsp;</h1>
              <div className="Rubber_band_div">
                <h1 className="Welcome_text_3">3</h1>
                <h1 className="Welcome_text_3">D</h1>
                <h1 className="Welcome_text_3">&nbsp;</h1>
                <h1 className="Welcome_text_3">M</h1>
                <h1 className="Welcome_text_3">o</h1>
                <h1 className="Welcome_text_3">d</h1>
                <h1 className="Welcome_text_3">e</h1>
                <h1 className="Welcome_text_3">l</h1>
                <h1 className="Welcome_text_3">l</h1>
                <h1 className="Welcome_text_3">e</h1>
                <h1 className="Welcome_text_3">r</h1>
              </div>
            </div>

            <div className="Main_project">
              <Scrollspy>
                <p>Projects</p>
              </Scrollspy>

              <FaArrowDown className="arrow_down" />
            </div>
          </div>
        </div>

        <div className="Main_body_model">
          <img src={Myself} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
