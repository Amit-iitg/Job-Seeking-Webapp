import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin,FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Amit Rathore.</div>
      <div>
        <Link to={"https://github.com/Amit-iitg/Job-Seeking-Webapp.git"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.youtube.com/watch?v=AETFvQonfV8"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/amit-rathore-7ba1a1259/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/ig_amitrathore?igsh=MTV0NmZ4YWVnODB5NQ=="} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
