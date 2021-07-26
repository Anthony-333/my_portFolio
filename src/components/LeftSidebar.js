import React from "react";
import "./LeftSidebar.css";

import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";

function LeftSidebar() {
  return (
    <div className="Leftsidebar_wrapper">
      <div className="Leftsidebar_wrapper_padding">


        

        <div className="Contact_Links_icons">
          <div className="Contact_Links_icons_div">
            <GrMail size="25" />
          </div>

          <div className="Contact_Links_icons_div">
            <IoLogoWhatsapp size="25" />
          </div>

          <div className="Contact_Links_icons_div">
            <FaPhoneAlt size="25" />
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default LeftSidebar;
