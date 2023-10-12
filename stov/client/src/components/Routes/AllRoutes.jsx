import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Home/Home'
import Auth from '../Auth/Auth'
import Questions from '../Questions/Questions'

const AllRoutes = () => {
  return (
    <div>
      <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/questions' element={<Questions/>} />
            <Route path='/tags' element={<Home/>} />
            <Route path='/users' element={<Home/>} />
            <Route exact path='/Auth' element={<Auth/>} />
        </Routes>
      </div>
    </div>
  )
}

export default AllRoutes
