import React from 'react'
import '../../App.css'
import {Link, useLocation} from 'react-router-dom'

const HomeMainbar = () => {
  const location = useLocation();

  return (
    <div className='home-mainbar'>
      <div>
        {
          location.pathname === '/' ? <p>Top Questions</p> : <p>All Questions</p>
        }
        
        <button>Ask Question</button>
      </div>
      <p>8 Questions</p>
      <div className='questions-container'>
        <div className='question'>
        </div>
      </div>
    </div>
  )
}

export default HomeMainbar
