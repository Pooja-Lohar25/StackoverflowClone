import React from 'react'

const Body = () => {
  return (
    <div className='container'>
    <p className='title'>What are the details of your problem</p>
    <p>Introduce your problem and expand on what you put the title.</p>
    <textarea name='quest-desc' id='quest-desc' />
  </div>
  )
}

export default Body
