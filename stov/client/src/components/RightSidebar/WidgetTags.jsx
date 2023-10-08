import React from 'react'
import './RightSidebar.css'


const WidgetTags = () => {

  const tags = [
    'c','c++','javascript','java','python','android','jquery','react','node',
    'php','c#','css','html','mysql','sql','python-3','ruby-on-rails'
  ]

  return (
    <div> 
      <p>Related Tags</p>
      <div className='widget-tags'>
        <div className='widget-tags-items'>
          {
            tags.map(element => (
              <p key={element}>{element}</p>
              ))   
            }
        </div>
      </div>
    </div>
  )
}

export default WidgetTags
