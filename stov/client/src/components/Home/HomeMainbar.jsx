import React from 'react'
import '../../App.css'
import {useLocation, useNavigate} from 'react-router-dom'
import Questions from './Questions'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllQuestions } from '../../actions/question'

const HomeMainbar = () => {
  const questionList = useSelector(state => (state.questionsReducer))
  const location = useLocation();
  const user = useSelector((state) => (state.currentUserReducer))

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
    <div className='home-mainbar'>
      <div className='home-mainbar-heading'> 
        {
          location.pathname === '/' ? <p>Top Questions</p> : <p>All Questions</p>
        }
        
        <button onClick={redirect} className='quest-btn'>Ask Question</button>
      </div>
        {
            questionList === null ? 
            <h1>Loading...</h1> :
            <>
                <p className='q-len'>{questionList.length} Questions</p>
                <Questions questionlist={questionList.data}/>
            </>

        }

    </div>
  )
}

export default HomeMainbar