import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import "./question-box.styles.scss";

const QuestionBox = ({ headline, user, date, detail, ratings }) => {
  return (
    <div className="question-box">
      <h2 className="question-headline">{headline}</h2>
      <div className="user-box">
        <div
          className="user-dp"
          style={{ backgroundImage: `url(${user.imageUrl})` }}
        ></div>
        <div>
          <p className="name">{user.name}</p>
          <p className="date">{date}</p>
        </div>
      </div>
      <p className="question-detail">{detail}</p>
      <div className="rating">
        <div className="likes">
          <Link to="/sign-in">
            <FontAwesomeIcon icon={faHeart} size="xl" />
            {ratings} likes
          </Link>
        </div>
        <div className="report-topic">
          <Link to="/sign-in">
            <FontAwesomeIcon icon={faCircleExclamation} size="xl" />
            Report this topic
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
