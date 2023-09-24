import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Home/Home'
import Auth from '../Auth/Auth'

const AllRoutes = () => {
  return (
    <div>
      <div>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/Auth' element={<Auth/>} />
        </Routes>
      </div>
    </div>
  )
}

export default AllRoutes
