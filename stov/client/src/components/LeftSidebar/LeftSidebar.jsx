import React from 'react'
import Globe from '../../assets/globe.png'
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
              <img src={Globe} alt='Globe' style={{height:'25px', opacity: '0.6'}}></img>
              <p style={{paddingLeft: '10px'}}>Questions</p>
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
