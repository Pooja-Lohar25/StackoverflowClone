import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import moment from 'moment'

const DisplayAnswer = ({ qid }) => {
    const questionList = useSelector(state => state.questionsReducer);
  const question = questionList?.data?.filter((quest) => quest._id === qid)[0];

  return (
  <div className="answer-n">
    {
        question?.answer?.map(a => (
            <div key={a.userId}>
                <div className="answer-body">{a.answerBody}</div>
                <div className="answer-on"> <span>answered {moment(a.answeredon).fromNow()}</span><br/>
                <Link to={`/User/${a.userId}`}>{a.answeredBy}</Link>
                </div>
            </div>
        ))
    }
    </div>
    )
};

export default DisplayAnswer;
