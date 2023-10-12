import React from "react";
import "./questions.css";
import Ques from "./Ques";

const Questions = ({ questionlist }) => {
  return (
    <>
      {questionlist.map((qst) => (
        <Ques quest={qst} />
      ))}
    </>
  );
};

export default Questions;
