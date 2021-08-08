import React from "react";
import "./Rightsidebar.css";

import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

import Circle from "./img/circle.png";

import $ from "jquery";

function Rightsidebar() {
  $(function () {
    $(window).scroll(function () {
      updateNav1();
    });

    updateNav1();

    function updateNav1() {
      $(".One").each(function (index) {
        var topOffset = $(this).offset().top;
        if (topOffset - $(window).scrollTop() < 200) {
          $(".Marker_circle1").addClass("active");
          $(".Marker_text1").addClass("Marker_text_active");
        } else {
          $(".Marker_circle1").removeClass("active");
          $(".Marker_text1").removeClass("Marker_text_active");
        }
      });
    }
  });

  $(function () {
    $(window).scroll(function () {
      updateNav2();
    });

    updateNav2();

    function updateNav2() {
      $(".Two").each(function (index) {
        var topOffset = $(this).offset().top;
        if (topOffset - $(window).scrollTop() < 200) {
          $(".Marker_circle1").removeClass("active");
          $(".Marker_text1").removeClass("Marker_text_active");

          $(".Marker_circle2").addClass("active");
          $(".Marker_text2").addClass("Marker_text_active");
        } else {
          $(".Marker_circle2").removeClass("active");
          $(".Marker_text2").removeClass("Marker_text_active");
        }
      });
    }
  });

  $(function () {
    $(window).scroll(function () {
      updateNav3();
    });

    updateNav3();

    function updateNav3() {
      $(".Three").each(function (index) {
        var topOffset = $(this).offset().top;
        if (topOffset - $(window).scrollTop() < 200) {
          $(".Marker_circle2").removeClass("active");
          $(".Marker_text2").removeClass("Marker_text_active");

          $(".Marker_circle3").addClass("active");
          $(".Marker_text3").addClass("Marker_text_active");
        } else {
          $(".Marker_circle3").removeClass("active");
          $(".Marker_text3").removeClass("Marker_text_active");
        }
      });
    }
  });

  return (
    <div className="Rightsidebar_wrapper">
      <div className="Rightsidebar_padding">
        <div className="Rightsidebar_navigator">
          <div className="Marker">
            <div className="Marker_div">
              <p className="Marker_text1">Home</p>
            </div>

            <div className="dots">
              <div className="Marker_circle1"></div>
              <span className="whitedot"></span>
            </div>
          </div>

          <div className="Marker">
            <div className="Marker_div">
              <p className="Marker_text2">About</p>
            </div>
            <div className="dots">
              <div className="Marker_circle2"></div>
              <span className="whitedot"></span>
            </div>
          </div>
          <div className="Marker">
            <div className="Marker_div">
              <p className="Marker_text3">Projects</p>
            </div>
            <div className="dots">
              <div className="Marker_circle3"></div>
              <span className="whitedot"></span>
            </div>
          </div>
          <div className="Marker">
            <div className="Marker_div">
              <p className="Marker_text4">Services</p>
            </div>
            <div className="dots">
              <span className="whitedot"></span>
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
                size={45}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightsidebar;
