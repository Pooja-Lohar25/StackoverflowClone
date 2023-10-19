import React from "react";
import questionList from "./questiondata";
import { Link } from "react-router-dom";


const DisplayAnswer = ({ qid }) => {
  const question = questionList.filter((quest) => quest._id === qid)[0];
  return <div className="answer-n">
    {
        question.answers.map(q => (
            <div key={q.userId}>
                <div className="answer-body">{q.answerBody}</div>
                <div className="answer-on"> <span>answered on {q.answeredOn}</span><br/>
                <Link to={`/User/${q.userId}`}>{q.answeredBy}</Link>
                </div>
            </div>
        ))
    }
    </div>;
};

export default DisplayAnswer;
