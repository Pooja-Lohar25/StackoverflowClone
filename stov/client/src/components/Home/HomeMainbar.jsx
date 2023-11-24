import React from 'react'
import '../../App.css'
import {Link, redirect, useLocation, useNavigate} from 'react-router-dom'
import Questions from './Questions'

const HomeMainbar = () => {
  var questionList = [
    {
      _id:1,
      votes:3,
      noOfAns: 2,
      questionTitle:"Function overloading",
      questionBody:"Define funtion overloading with respect to different programming languages",
      questionTags:["react","java","php","c++","node"],
      postedBy:"bob847299_rt",
      askedOn:"oct 11 2023",
    },
    {
      _id:2,
      votes:3,
      noOfAns: 0,
      questionTitle:"what is a class",
      questionBody:"meaning and uses",
      questionTags:["react","java","php","c++","node",'oops'],
      postedBy:"john48509",
      askedOn:"sept 3 2023",
    },
    {
      _id:3,
      votes:2,
      noOfAns: 2,
      questionTitle:"How to read raw json value when using NewtonsoftJson in controller",
      questionBody:"I have several models with DateTime properties. These models are DTOs for accepting in my controller methods. What I am trying to do is to remove timezone if a client sends it. Example: class InputDto ...",
      questionTags:["c#",'json.net'],
      postedBy:"alice845906",
      askedOn:"nov 3 2022",
    },
    {
      _id:4,
      votes:1,
      noOfAns: 2,
      questionTitle:"Function overloading",
      questionBody:"Define funtion overloading with respect to different programming languages",
      questionTags:["react","java","php","c++","node"],
      postedBy:"bob",
      askedOn:"feb 3 2023",
    },
    {
      _id:5,
      votes:3,
      noOfAns: 2,
      questionTitle:"Function overloading",
      questionBody:"Define funtion overloading with respect to different programming languages",
      questionTags:["react","java","php","c++","node"],
      postedBy:"bob",
      askedOn:"feb 3 2023",
    },
    {
      _id:6,
      votes:3,
      noOfAns: 0,
      questionTitle:"what is a class",
      questionBody:"meaning and uses",
      questionTags:["react","java","php","c++","node",'oops'],
      postedBy:"john48509",
      askedOn:"sept 3 2023",
    },
    {
      _id:7,
      votes:3,
      noOfAns: 0,
      questionTitle:"what is a class",
      questionBody:"meaning and uses",
      questionTags:["react","java","php","c++","node",'oops'],
      postedBy:"john48509",
      askedOn:"sept 3 2023",
    },
    {
      _id:8,
      votes:3,
      noOfAns: 0,
      questionTitle:"what is a class",
      questionBody:"meaning and uses",
      questionTags:["react","java","php","c++","node",'oops'],
      postedBy:"john48509",
      askedOn:"sept 3 2023",
    },
    {
      _id:9,
      votes:3,
      noOfAns: 0,
      questionTitle:"what is a class",
      questionBody:"meaning and uses",
      questionTags:["react","java","php","c++","node",'oops'],
      postedBy:"john48509",
      askedOn:"sept 3 2023",
    },
    
  ]

  const location = useLocation();
  const user = "1"

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
                <Questions questionlist={questionList}/>
            </>

        }

    </div>
  )
}

export default HomeMainbar