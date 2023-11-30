import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import DisplayAnswer from './DisplayAnswer'
import up from '../../assets/caret-up.svg'
import down from '../../assets/caret-down.svg'
import './displayQ.css'
import { useSelector } from 'react-redux'

const QuestionBlock = ({ques}) => {
    const questionList = useSelector(state => state.questionsReducer)
    const question = questionList.data?.filter(quest => quest._id===ques)[0]
    
    const [votes,setVotes]= useState(question?.upvotes)

    
    const upvote = ()=>{
        setVotes(votes+1)
    }
    const downvote = ()=>{
        setVotes(votes-1)
    }
  
    return (
    <div className='question-details-block'>
        <div className='row-1'>
            <div className='question-votes'>
                <div><button onClick={upvote}><img src={up} /></button></div>
                <div style={{'font-weight': "500" ,'font-size':'20px' , 'text-align':'center'}}>{votes}</div>
                <div><button onClick={downvote}><img src={down}/></button></div>
            </div>
            <div className='question-desc'>
                <p>{question?.questionBody}</p>
                <div className="tags">
                    {
                        question?.questionTags.map((tag)=>(
                            <p key={tag} style={{'font-size':"14px"}}>{tag}</p>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='post-by'>
            <span>asked on {question?.askedOn}
            </span><br/>
            <Link to={`/User/${question?.userId}`}>{question?.postedBy}</Link>
        </div>


        {
            question?.noOfAnswers !==0 && (
                <section className='answers-section'>
                    <h3>{question?.noOfAnswers} answers</h3>
                    <DisplayAnswer qid={question?._id}/>
                </section>
            )
        }

        <p style={{'margin-left':'20px'}}>Your Answer</p>
        <form className='answer-block'>
            <textarea type="text"/> 
            <button className='quest-btn'>Post your answer</button>
        </form>
    </div>
    )
}

export default QuestionBlock
