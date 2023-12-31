import React from 'react'
import HomeMainbar from "../Home/HomeMainbar"
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSidebar from '../RightSidebar/RightSidebar'


const Questions = () => {
  return (
    <div className='home-container-1' >
      <LeftSidebar/>
      <div className='home-container-2'>
          <HomeMainbar/>
          <RightSidebar/>
      </div>
    </div>
  )
}

export default Questions
