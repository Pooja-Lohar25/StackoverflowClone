import React from 'react'
import Pen from '../../assets/pen-solid.svg'
import Comment from '../../assets/message-solid.svg'
import Blacklogo from '../../assets/blacklogo.svg'
import './RightSidebar.css'
const Widget = () => {
  return (
    <div className='widget'>
      <h5>The Overflow Blog</h5>
      <div className='right-sidebar-div1'>
        <div className='right-sidebar-div'>
        <img src={Pen} alt="pen" />
        <p>How an algo raver stays in key(boards) sponsored post</p>
        </div>
        <div className='right-sidebar-div'>
        <img src={Pen} alt="pen" />
        <p>Open Discussion: What can be done to reduce infrastructure-as-code complexity?</p>
        </div>
      </div>
      <h5>Featured on Meta</h5>
      <div className='right-sidebar-div1'>
        <div className='right-sidebar-div'>
        <img src={Comment} alt="pen" />
        <p>Alpha test for short survey in banner ad slots starting on week of September...</p>
        </div>
        <div className='right-sidebar-div'>
        <img src={Comment} alt="pen" />
        <p>What should be next for community events?</p>
        </div>
        <div className='right-sidebar-div'>
        <img src={Blacklogo} alt="pen" />
        <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
        </div>
        <div className='right-sidebar-div'>
        <img src={Blacklogo} alt="pen" />
        <p>OverflowAI Search is now available for alpha testing (September 13, 2023)</p>
        </div>
      </div>
    </div>
  )
}

export default Widget
