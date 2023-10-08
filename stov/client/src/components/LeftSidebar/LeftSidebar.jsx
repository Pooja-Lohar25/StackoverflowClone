import React from 'react'
import Globe from '../../assets/globe.svg'
import {NavLink} from 'react-router-dom'
import './LeftSidebar.css'


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClassName ='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to='/Questions' className='side-nav-links' activeClassName='active' >
              <p><img src={Globe} alt='Globe'></img></p>
              <p style={{paddingLeft: '5px'}}>Questions</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' activeClassName ='active' style={{paddingLeft:'40px'}}>
            <p>Tags</p>
          </NavLink>
          <NavLink to='/users' className='side-nav-links' activeClassName ='active' style={{paddingLeft:'40px'}}>
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
      
    </div>
  )
}

export default LeftSidebar
