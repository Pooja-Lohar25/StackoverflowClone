import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Home/Home'
import Auth from '../Auth/Auth'
import Questions from '../Questions/Questions'
import Askquest from '../Questions/AskQuestions/Askquest'
import DisplayQ from '../Questions/DisplayQ'

const AllRoutes = () => {


  return (
    <div>
      <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/questions' element={<Questions/>} />
            <Route path='/questions/:qid' element = {<DisplayQ/>}/>
            <Route path='/askquestion' element={<Askquest/>} />
            <Route path='/tags' element={<Home/>} />
            <Route path='/users' element={<Home/>} />
            <Route exact path='/Auth' element={<Auth/>} />
        </Routes>
      </div>
    </div>
  )
}

export default AllRoutes
