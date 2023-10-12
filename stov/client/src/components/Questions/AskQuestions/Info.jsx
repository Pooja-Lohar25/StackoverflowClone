import React from 'react'
import './questions.css'

const Info = () => {
  return (
    <div className='info'>
            <p className='info-head'>Writing a good question</p>
            <p className='info-desc'>You're ready to ask a programming-related question and this form will help guide you through the process.
Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
            <p style={{"font-size":"15px","font-weight":"500"}}>Steps</p>
            <ul>
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>Describe what you tried and what you expected to happen.</li>
                <li>Add “tags” which help surface your question to members of the community.</li>
                <li>Review your question and post it to the site.</li>
            </ul>
        </div>
  )
}

export default Info
