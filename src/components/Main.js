import React from "react";
import "./Main.css";

import { FaArrowDown } from "react-icons/fa";
import Myself from "./img/self.png";
import Scrollspy from "react-scrollspy";



function Main() {
    return (
        <div className="Main_body_wrapper">
            <div className="Main_body_wrapper_padding">

                <div className="Main_body_text">
                    <h1 className="Welcome_text_1">Hi,</h1>
                    <h1 className="Welcome_text_2">I'm&nbsp;Anthony</h1>
                    <h1 className="Welcome_text_3">Full&nbsp;Stack&nbsp;Web&nbsp;Dev</h1>

                    <div className="Main_project">
                        <Scrollspy>
                            <p>Projects</p>
                        </Scrollspy>
                         
                        <FaArrowDown className="arrow_down"/>
                    </div>
                </div>

                <div className="Main_body_model">
                   <img src={Myself} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Main
