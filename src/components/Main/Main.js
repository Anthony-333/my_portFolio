import React, { useRef, Suspense } from "react";
import "./Main.css";
import "./About.css";

import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaArrowDown,
} from "react-icons/fa";


import Myself from "../img/self.png";
import Reacticon from "../img/reactjs-icon.png";
import Git from "../img/Git.png";
import Tailwind from "../img/Tailwind.png";
import Firebase from "../img/Firebase.png";
import Monggodb from "../img/Monggodb.png";
import Nodejs from "../img/Nodejs.png";
import Wp from "../img/Wordpress.png";
import Redux from "../img/Redux.png";
import Express from "../img/Express.png";

import Scrollspy from "react-scrollspy";
import Tilt from "react-tilt";


import "aos/dist/aos.css"; // You can also use <link> for styles
import Projects from "../Project/Projects";


function Main() {
  return (
    <div className="Main_body_wrapper">
      <div className="Main_body_wrapper_padding">
        <section className="One">
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
              <h1
                className="Welcome_text_1"
              
              >
                Hi,
              </h1>
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

          <Tilt className="Tilt" options={{ max: 35, perspective: 2000 }}>
            <div className="Main_body_model">
              <img src={Myself} alt="" />
            </div>
          </Tilt>
        </section>

        <section className="Two">
          <div className="About_padding">
            <div className="About_intro_wrapper">
              <div className="About_title_wrapper" >
                <h1 className="About_me_text">A</h1>
                <h1 className="About_me_text">l</h1>
                <h1 className="About_me_text">l</h1>
                <h1 className="About_me_text">&nbsp;</h1>
                <h1 className="About_me_text">A</h1>
                <h1 className="About_me_text">b</h1>
                <h1 className="About_me_text">o</h1>
                <h1 className="About_me_text">u</h1>
                <h1 className="About_me_text">t</h1>
                <h1 className="About_me_text">&nbsp;</h1>
                <h1 className="About_me_text">M</h1>
                <h1 className="About_me_text">e</h1>
              </div>

              <div className="About_intro">
                <p className="About_text">
                  Hi, This is John Anthony Oling I'm Full-Stack Developer from
                  Philippines.
                  <br />
                  <br />
                  My main experties are UI/UX I'am very passionate on
                  incorporating timely designs, Effects, and animations in my
                  projects.
                  <br />
                  <br />
                  As time goes by I'll be able to upgrade my back-end skills by
                  learning it on my own because of that I developed so much
                  skills without depending on others.
                  <br />
                  <br />
                  I'am very professional and consistent on what I'm doing
                  Innovative, creative, and client satisfaction is
                  always my goal in every project.
                </p>
              </div>
            </div>

            <div className="Skills_tiles_wrapper">
              <div className="Skills_tiles_padding">
                <div className="tiles_divider">
                  <Tilt
                    className="Tilt"
                    options={{ max: 35, perspective: 500 }}
                  >
                    <div
                      className="tiles_div"
                      data-tilt
                      data-tilt-glare
                      data-tilt-max-glare="0.8"
                    >
                      <div className="tiles_div_padding">
                        <img className="tiles_img" src={Reacticon} alt="" />
                      </div>
                    </div>
                  </Tilt>

                  <Tilt
                    className="Tilt"
                    options={{ max: 35, perspective: 500 }}
                  >
                    <div className="tiles_div">
                      <div className="tiles_div_padding">
                        <img className="tiles_img" src={Redux} alt="" />
                      </div>
                    </div>
                  </Tilt>

                  <Tilt
                    className="Tilt"
                    options={{ max: 35, perspective: 500 }}
                  >
                    <div className="tiles_div">
                      <div className="tiles_div_padding">
                        <img className="tiles_img" src={Firebase} alt="" />
                      </div>
                    </div>
                  </Tilt>
                </div>

                <div className="tiles_divider">
                  <Tilt
                    className="Tilt"
                    options={{ max: 35, perspective: 500 }}
                  >
                    <div className="tiles_div">
                      <div className="tiles_div_padding">
                        <img className="tiles_img" src={Tailwind} alt="" />
                      </div>
                    </div>
                  </Tilt>

                  <Tilt
                    className="Tilt"
                    options={{ max: 35, perspective: 500 }}
                  >
                    <div className="tiles_div">
                      <div className="tiles_div_padding">
                        <img className="tiles_img" src={Nodejs} alt="" />
                      </div>
                    </div>
                  </Tilt>

                  <Tilt
                    className="Tilt"
                    options={{ max: 35, perspective: 500 }}
                  >
                    <div className="tiles_div">
                      <div className="tiles_div_padding">
                        <img className="tiles_img" src={Monggodb} alt="" />
                      </div>
                    </div>
                  </Tilt>
                </div>

                <div className="tiles_divider">
                  <Tilt
                    className="Tilt"
                    options={{ max: 35, perspective: 500 }}
                  >
                    <div className="tiles_div">
                      <div className="tiles_div_padding">
                        <img className="tiles_img" src={Wp} alt="" />
                      </div>
                    </div>
                  </Tilt>

                  <Tilt
                    className="Tilt"
                    options={{ max: 35, perspective: 500 }}
                  >
                    <div className="tiles_div">
                      <div className="tiles_div_padding">
                        <img className="tiles_img" src={Git} alt="" />
                      </div>
                    </div>
                  </Tilt>

                  <Tilt
                    className="Tilt"
                    options={{ max: 35, perspective: 500 }}
                  >
                    <div className="tiles_div">
                      <div className="tiles_div_padding">
                        <img className="tiles_img" src={Express} alt="" />
                      </div>
                    </div>
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Three">
            <Projects />

        </section>
      </div>
    </div>
  );
}

export default Main;
