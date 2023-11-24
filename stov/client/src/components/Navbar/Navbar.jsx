import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import bars from '../../assets/bars.svg'
import cross from '../../assets/cross.svg'
import Avatar from '../../components/Avatar/Avatar'
import './navbar.css'
import '../../App.css'

const Navbar = () => {
    const User = "1"
    const openOptions = ()=>{
      document.getElementById("close-burger").style.display = 'block'
      document.getElementById("nav-burger-list").style.display = 'block'
      document.getElementById("open-burger").style.display = 'none'
    }
    const closeOptions = ()=>{
      document.getElementById("open-burger").style.display = 'block'
      document.getElementById("nav-burger-list").style.display = 'none'
      document.getElementById("close-burger").style.display = 'none'
    }

  return (
    <>
    <nav className='main-nav'>
      <button id = "open-burger" className='nav-burger open-burger' onClick={openOptions}><img src={bars} alt="bars" /></button>
      <button id = "close-burger" className='nav-burger close-burger' onClick={closeOptions}><img src={cross} alt="cross"/></button>
      <div className='navbar'>
        <Link to='/' className='nav-logo'>
            <img src={logo} alt = 'logo' width='100'></img> </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form className='search-bar'>
            <input type='text' placeholder='Search..'/>
            <img src={search} alt='search' width ='18'  className='search-icon'></img>
        </form>
        {
        
            User === null ? 
            <Link to='/Auth' className='nav-item nav-links'>Login</Link> :
            <>
                {/* first letter of user's name*/}
                <Link to='/User' className='nav-item avatar'><Avatar 
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
    <ul id="nav-burger-list"  className='nav-burger-list'>
        <li onClick={closeOptions}><NavLink to='/' className='burger-items'>Home</NavLink></li>
        <li onClick={closeOptions}><NavLink to='/questions' className='burger-items'>Questions</NavLink></li>
        <li onClick={closeOptions}><NavLink to='/tags' className='burger-items'>Tags</NavLink></li>
        <li onClick={closeOptions}><NavLink to='/users' className='burger-items'>Users</NavLink></li>
        <li onClick={closeOptions}><NavLink to='/' className='burger-items'>About</NavLink></li>
        <li onClick={closeOptions}><NavLink to='/' className='burger-items'>Products</NavLink></li>
        <li onClick={closeOptions}><NavLink to='/' className='burger-items'>For Teams</NavLink></li>
      </ul>
    </>
  )
}

export default Navbar
