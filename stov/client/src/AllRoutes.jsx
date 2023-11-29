import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Questions from './components/Questions/Questions'
import Askquest from './components/Questions/AskQuestions/Askquest'
import DisplayQ from './components/Questions/DisplayQ'
import Tags from './components/Tags/Tags'
import Users from './components/Users/Users'
import UserProfile from './components/UserProfile/UserProfile'

const AllRoutes = () => {


  return (
    <div>
      <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route exact path='/Auth' element={<Auth/>} />
            <Route path='/questions' element={<Questions/>} />
            <Route path='/questions/:qid' element = {<DisplayQ/>}/>
            <Route path='/askquestion' element={<Askquest/>} />
            <Route path='/tags' element={<Tags/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/Users/:id' element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  )
}

export default AllRoutes
