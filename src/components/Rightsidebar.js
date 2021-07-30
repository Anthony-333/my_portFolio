import React from "react";
import "./Rightsidebar.css";

import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

import Circle from "./img/circle.png";

function Rightsidebar() {
  return (
    <div className="Rightsidebar_wrapper">
      <div className="Rightsidebar_padding">
        <div className="Rightsidebar_navigator">
          <div className="Marker">
            <div className="Marker_div">
              <p className="Marker_text">Home</p>
            </div>

            <div className="dots">
              <img src={Circle} alt="" className="Marker_circle"></img>
              <span class="whitedot"></span>
            </div>
          </div>
          <div className="Marker">
            <div className="Marker_div">
              <p className="Marker_text">About</p>
            </div>
            <div className="dots">
              <img src={Circle} alt="" className="Marker_circle"></img>
              <span class="whitedot"></span>
            </div>
          </div>
          <div className="Marker">
            <div className="Marker_div">
              <p className="Marker_text">Projects</p>
            </div>
            <div className="dots">
              <img src={Circle} alt="" className="Marker_circle"></img>
              <span class="whitedot"></span>
            </div>
          </div>
          <div className="Marker">
            <div className="Marker_div">
              <p className="Marker_text">Services</p>
            </div>
            <div className="dots">
              <img src={Circle} alt="" className="Marker_circle"></img>
              <span class="whitedot"></span>
            </div>
          </div>
        </div>

        <div className="Scroll_down">
          <div className="Scroll_down_padding">
            <div className="Scroll_text_div">
              <p className="Scroll_text">Scroll</p>
            </div>

            <div className="Scroll_arrow_down">
              <UseAnimations
                animation={arrowDown}
                strokeColor="#2CE6FF"
                className="Arrow_down"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightsidebar;
