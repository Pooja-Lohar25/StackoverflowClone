import React from 'react'
import './RightSidebar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'


const RightSidebar = () => {
  return (
    // a tag used to specify less important content
    <aside className='right-sidebar'>
      <Widget/>
      <WidgetTags/>
    </aside>
  )
}

export default RightSidebar
