import React from "react";
import "./questions.css";
import Info from "./Info";
import Title from "./Title";
import Body from "./Body";
import Tags from "./Tags";

const Askquest = () => {
  return (
    <div className="q-container">
      <p className="heading">Ask a public question</p>
      <Info />
      <Title />
      <Body />
      <Tags />
      <button className="ask-quest-btn">Review your Question</button>
    </div>
  );
};

export default Askquest;
