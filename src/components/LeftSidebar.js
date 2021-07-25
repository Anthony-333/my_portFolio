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


        <div className="Social_Links_icons">
          <div className="Social_Links_icons_div">
            <FaFacebookF size="25" />
          </div>
          <div className="Social_Links_icons_div">
            <FaTwitter size="25" />
          </div>
          <div className="Social_Links_icons_div">
            <FaGithub size="25" />
          </div>
          <div className="Social_Links_icons_div">
            <FaLinkedinIn size="25" />
          </div>
        </div>

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
