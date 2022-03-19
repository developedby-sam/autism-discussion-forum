import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = ({ pathname }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} className="logo" />
      </Link>
      <div className="options">
        <Link
          className={`${pathname == "/about" ? "selected option" : "option"}`}
          to="about"
        >
          About
        </Link>
        <Link
          className={`${pathname == "/games" ? "selected option" : "option"}`}
          to="games"
        >
          Games
        </Link>
        <Link
          className={`${
            pathname == "/nearest-centers" ? "selected option" : "option"
          }`}
          to="nearest-centers"
        >
          Nearest Centers
        </Link>
        <Link
          className={`${
            pathname == "/discussions" ? "selected option" : "option"
          }`}
          to="discussions"
        >
          Discussions
        </Link>
        <Link
          className={`${pathname == "/blogs" ? "selected option" : "option"}`}
          to="blogs"
        >
          Blogs
        </Link>
        <Link
          className={`${
            pathname == "/sharing-experience" ? "selected option" : "option"
          }`}
          to="sharing-experience"
        >
          Share Experience
        </Link>
        <Link
          className={`${pathname == "/sign-in" ? "selected option" : "option"}`}
          to="sign-in"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
