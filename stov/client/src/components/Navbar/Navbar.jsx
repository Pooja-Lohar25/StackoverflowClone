import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import './Navbar.css'

const Navbar = () => {
    const User = null

  return (
    <nav>
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
                <Link to='/' className=''><Avatar>P</Avatar></Link> //first letter of user's name
                <Button>Logout</Button>
            </>
        }
      </div>
    </nav>
  )
}

export default Navbar
