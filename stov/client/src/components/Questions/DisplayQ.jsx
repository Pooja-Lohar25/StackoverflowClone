import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSidebar from '../RightSidebar/RightSidebar'
import QuestionBlock from './QuestionBlock'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './displayQ.css'
import { useSelector } from 'react-redux'


const DisplayQ = () => {
    const user = useSelector(state => state.currentUserReducer)
    const questionList = useSelector(state => state.questionsReducer)
    const {qid}  = useParams() //use same variables as used in defining parameters for routes
    const navigate = useNavigate()
  
    const redirect = ()=>{
      if(user===null){
        alert("login or signup to ask a question")
        navigate('/Auth')
      }
      else{
        navigate('/askquestion')
      }
    }

    const question = questionList?.data?.filter(question => question?._id===qid)[0]
  return (
    <div className='home-container-1' >
      <LeftSidebar/>
      <div className='home-container-2 display-container'>
        <div className='question-bar'> 
            {
                
                <div className='question-title' key={question?._id}>{question?.questionTitle}</div>
              
            }
            <button onClick={redirect} className='quest-btn'>Ask Question</button>
        </div>
        <div className='question-info'>
          <p> <span style={{color:"grey"}}>Asked : </span>{question?.askedOn}</p>
        </div>
        <QuestionBlock ques = {qid}/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default DisplayQ
