import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSidebar from '../RightSidebar/RightSidebar'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import questionList from './questiondata'
import '../../App.css'
import './displayQ.css'


const DisplayQ = () => {
    const user = null
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
  return (
    <div className='home-container-1' >
      <LeftSidebar/>
      <div className='home-container-2 display-container'>
        <div className='question-bar'> 
            {
                
                questionList.filter(question => question._id==qid).map(question=>(
                    <div className='question-title' key={question._id}>{question.questionTitle}</div>
                    ))
            }
            <button onClick={redirect} className='quest-btn'>Ask Question</button>
        </div>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default DisplayQ
