import React,{useState}from "react";
import "./questions.css";
import Info from "./Info";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../../../actions/question'

const Askquest = () => {
  const [ questionTitle, setQuestionTitle ] = useState('')
  const [ questionBody, setQuestionBody ] = useState('')
  const [ questionTags, setQuestionTags ] = useState('')

  const User = useSelector((state) => (state.currentUserReducer))
  console.log(User)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ questionTitle, questionBody, questionTags})
      if(User)
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name }, navigate))
      else alert('Kindly Login to ask a Question')
}

  const handleEnter = (e) => {
      if(e.key === 'Enter'){
          setQuestionBody(questionBody + "\n")
      }
  }
  return (
    <div className="q-container">
      <p className="heading">Ask a public question</p>
      <form onSubmit={handleSubmit}>
      <Info />
      <div className='container'>
        <p className='title'>Title</p>
        <p>Be specific and imagine you’re asking a question to another person.</p>
        <input type='text' name='quest-title' id='quest-title'  onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g Is there an R function for finding the index of an element in a vector?'/>
      </div>
      <div className='container'>
        <p className='title'>What are the details of your problem</p>
        <p>Introduce your problem and expand on what you put the title.</p>
        <textarea name='quest-desc' id='quest-desc'   onChange={(e) => {setQuestionBody(e.target.value)}} onKeyPress={handleEnter}/>
      </div> 
      <div className='container'>
        <p className='title'>Tags</p>
        <p>Add upto 5 tags to describe your problem</p>
        <input type='text' name='quest-tags' id='quest-tags'  onChange={(e) => {setQuestionTags(e.target.value)}} />
      </div>
      <button className="ask-quest-btn">Review your Question</button>
      </form>

    </div>
  );
};

export default Askquest;
