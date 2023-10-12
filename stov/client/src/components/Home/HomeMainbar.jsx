import React from 'react'
import '../../App.css'
import {Link, useLocation} from 'react-router-dom'
import Questions from './Questions'

const HomeMainbar = () => {
  var questionList = [
    {
      id:1,
      votes:3,
      noOfAns: 2,
      questionTitle:"Function overloading",
      questionBody:"Define funtion overloading with respect to different programming languages",
      questionTags:["react","java","php","c++","node"],
      postedBy:"bob847299_rt",
      askedOn:"oct 11 2023",
    },
    {
      id:2,
      votes:3,
      noOfAns: 0,
      questionTitle:"what is a class",
      questionBody:"meaning and uses",
      questionTags:["react","java","php","c++","node",'oops'],
      postedBy:"john48509",
      askedOn:"sept 3 2023",
    },
    {
      id:3,
      votes:2,
      noOfAns: 2,
      questionTitle:"How to read raw json value when using NewtonsoftJson in controller",
      questionBody:"I have several models with DateTime properties. These models are DTOs for accepting in my controller methods. What I am trying to do is to remove timezone if a client sends it. Example: class InputDto ...",
      questionTags:["c#",'json.net'],
      postedBy:"alice845906",
      askedOn:"nov 3 2022",
    },
    {
      id:4,
      votes:1,
      noOfAns: 2,
      questionTitle:"Function overloading",
      questionBody:"Define funtion overloading with respect to different programming languages",
      questionTags:["react","java","php","c++","node"],
      postedBy:"bob",
      askedOn:"feb 3 2023",
    },
    {
      id:4,
      votes:3,
      noOfAns: 2,
      questionTitle:"Function overloading",
      questionBody:"Define funtion overloading with respect to different programming languages",
      questionTags:["react","java","php","c++","node"],
      postedBy:"bob",
      askedOn:"feb 3 2023",
    },
  ]

  const location = useLocation();

  return (
    <div className='home-mainbar'>
      <div className='heading'> 
        {
          location.pathname === '/' ? <p>Top Questions</p> : <p>All Questions</p>
        }
        
        <Link to='/askquestion' className='quest-btn'>Ask Question</Link>
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