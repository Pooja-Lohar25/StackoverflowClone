import React from "react";
import "./questions.css";
import Ques from "./Ques";

const Questions = ({ questionlist }) => {
  return (
    <>
      {questionlist.map((qst) => (
        <Ques key={qst._id} quest={qst} />
      ))}
    </>
  );
};

export default Questions;
