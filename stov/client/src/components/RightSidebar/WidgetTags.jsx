import React from 'react'
import './RightSidebar.css'


const WidgetTags = () => {

  const tags = [
    'c','c++','javascript','java','python','html','jquery','react','node','php','c#','css','android'
  ]

  return (
    <div> 
      <p>Related Tags</p>
      <div className='widget-tags'>
        <div className='widget-tags-items'>
          {
            tags.map(element => (
              <p>{element}</p>
              ))   
            }
        </div>
      </div>
    </div>
  )
}

export default WidgetTags
