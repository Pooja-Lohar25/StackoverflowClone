import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const DisplayAnswer = ({ qid }) => {
    const questionList = useSelector(state => state.questionsReducer);
  const question = questionList?.data?.filter((quest) => quest._id === qid)[0];

  return (
  <div className="answer-n">
    {
        question?.answer?.map(q => (
            <div key={q.userId}>
                <div className="answer-body">{q.answerBody}</div>
                <div className="answer-on"> <span>answered on {q.answeredOn}</span><br/>
                <Link to={`/User/${q.userId}`}>{q.answeredBy}</Link>
                </div>
            </div>
        ))
    }
    </div>
    )
};

export default DisplayAnswer;
