import React from "react";
import {Link} from 'react-router-dom'
import './questions.css'

const Ques = ({ quest }) => {
  return (
      <div className="questions-container">
        <div className="votes-ans">
            <p className="votes">{quest.votes} votes </p> 
            <p>{quest.noOfAns} answers</p>
        </div>
        <div className="quest-details">
            <Link to={`/questions/${quest._id}`} className="quest-title"> {quest.questionTitle} </Link>
            <p className="quest-desc">{quest.questionBody}</p>
            <div className="tag-time">
                <div className="tags">
                    {
                        quest.questionTags.map((tag)=>(
                            <p key={tag}>{tag}</p>
                        ))
                    }
                </div>
                <div className="time">
                    <p> <Link to={`/profile/${quest.postedBy}`} className="usr">{quest.postedBy}</Link> asked on {quest.askedOn} </p>
                </div>
            </div>
        </div>
      </div>
  );
};

export default Ques;
