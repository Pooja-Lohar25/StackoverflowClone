import React from 'react'

const Title = () => {
  return (
    <div className='container'>
      <p className='title'>Title</p>
      <p>Be specific and imagine you’re asking a question to another person.</p>
      <input type='text' name='quest-title' id='quest-title' placeholder='e.g Is there an R function for finding the index of an element in a vector?'/>
    </div>
  )
}

export default Title
