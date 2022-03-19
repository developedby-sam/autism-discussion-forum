import React from "react";

import "./discussion-forum.styles.scss";
import QuestionBox from "../question-box/question-box.component";
import QUESTIONS from "../../Questions";
import ANSWERS from "./answer-data";
import AnswerBox from "../answer-box/answer-box.component";

class DiscussionForum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: QUESTIONS,
      answers: ANSWERS,
    };
  }

  render() {
    const { questions, answers } = this.state;

    return (
      <div className="discussion-forum-container">
        {questions.map(({ id, ...otherQuestionProps }) => (
          <QuestionBox key={id} {...otherQuestionProps} />
        ))}
        {answers.map(({ id, ...otherAnswerProps }) => (
          <AnswerBox key={id} {...otherAnswerProps} />
        ))}
      </div>
    );
  }
}

export default DiscussionForum;
