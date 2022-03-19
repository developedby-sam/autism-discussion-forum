import React from "react";
import { Link } from "react-router-dom";

import "./answer-box.styles.scss";

const AnswerBox = ({ user, date, answer }) => {
  return (
    <div className="answer-box">
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
      <p className="answer-detail">{answer}</p>
    </div>
  );
};

export default AnswerBox;
