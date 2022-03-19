import React from "react";
import { Link } from "react-router-dom";
// font awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faCircleArrowLeft,
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./side-navigation.styles.scss";

const SideNavigation = ({ pathname }) => {
  return (
    <div className="side-navigation">
      <div className="navigation-links">
        <Link
          to="/questions"
          className={`${pathname == "/questions" ? "selected link" : "link"}`}
        >
          <FontAwesomeIcon icon={faQuestionCircle} />
          My Questions
        </Link>
        <Link
          to="/participation"
          className={`${
            pathname == "/participation" ? "selected link" : "link"
          }`}
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} />
          My Participation
        </Link>
        <Link
          to="/solved"
          className={`${pathname == "/solved" ? "selected link" : "link"}`}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
          Solved
        </Link>
        <Link
          to="/unsolved"
          className={`${pathname == "/unsolved" ? "selected link" : "link"}`}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
          Unsolved
        </Link>
      </div>
    </div>
  );
};

export default SideNavigation;
