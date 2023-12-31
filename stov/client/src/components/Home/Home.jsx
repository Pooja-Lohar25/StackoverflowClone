import React from 'react'
import HomeMainbar from "./HomeMainbar"
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSidebar from '../RightSidebar/RightSidebar'


const Home = () => {
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

export default Home
