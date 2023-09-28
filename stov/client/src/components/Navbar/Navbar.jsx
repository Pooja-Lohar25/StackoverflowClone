import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'

const Navbar = () => {
    const User = null

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt = 'logo' width='100'></img> </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form>
            <input type='text' placeholder='Search..'/>
            <img src={search} alt='search' width ='18'  className='search-icon'></img>
        </form>
        {
        
            User === null ? 
            <Link to='/Auth' className='nav-item nav-links'>Login</Link> :
            <>
                {/* first letter of user's name*/}
                <Link to='/User' className='nav-item'><Avatar 
                  backgroundColor='#009dff'
                  px = '15px'
                  py='7px'
                  color= 'white'
                  borderRadius = '50%'> P </Avatar></Link> 
                  <button className='nav-item nav-links'>Logout</button>
            </>
        }
      </div>
    </nav>
  )
}

export default Navbar
