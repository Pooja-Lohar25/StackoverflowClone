import React, { useState } from 'react'
import {Link,useLocation,useParams,  useNavigate} from 'react-router-dom'
import DisplayAnswer from './DisplayAnswer'
import up from '../../assets/caret-up.svg'
import down from '../../assets/caret-down.svg'
import Avatar from '../../components/Avatar/Avatar'
import './displayQ.css'
import { useSelector, useDispatch } from 'react-redux'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'
import moment from 'moment'
import copy from 'copy-to-clipboard'

const QuestionBlock = ({ques}) => {
    const id  = ques
    const questionList = useSelector(state => state.questionsReducer)
    const question = questionList.data?.filter(quest => quest._id===ques)[0]
    
    const [Answer, setAnswer] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const location = useLocation()
    const url = 'http://localhost:3000'

    const handlePostAns = (e, answerLength) =>{
        e.preventDefault()
        console.log(id)
        if(User === null){
            alert('Login or Signup to answer a question')
            Navigate('/Auth')
        }else{
            if(Answer === ''){
                alert('Enter an answer before submitting')
            } else{
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name }))
            }
        }
    }
    const handleShare = () => {
        copy(url+location.pathname)
        alert('Copied url : '+url+location.pathname)
    }

    const handleDelete = () => {
        dispatch(deleteQuestion(id, Navigate))
    }

    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upVote'))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downVote'))
    }

    return (
    <div className='question-details-block'>
        <div className='row-1'>
            <div className='question-votes'>
                <div><button onClick={handleUpVote}><img src={up} /></button></div>
                <div style={{'font-weight': "500" ,'font-size':'20px' , 'text-align':'center'}}>{question.upVote.length - question.downVote.length}</div>
                <div><button onClick={handleDownVote}><img src={down}/></button></div>
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
            <span>asked {moment(question?.askedOn).fromNow()}
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
        <form className='answer-block' onSubmit={ (e) => { handlePostAns(e, question.answer.length) }}>
            <textarea type="text"  onChange={(e)=> setAnswer(e.target.value)}/> 
            <button  type = 'submit' className='quest-btn'>Post your answer</button>
        </form>
    </div>
    )
}

export default QuestionBlock
