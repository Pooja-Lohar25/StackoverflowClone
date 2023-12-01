import React from 'react'

const Avatar = ({children,backgroundColor,px,py,color,borderRadius,fontSize,cursor,background}) => {
  const style = {
    backgroundImage: `url(${background})`,
    backgroundColor,
    padding: `${py} ${px}` || 0,
    color: color || 'black',
    borderRadius,
    fontSize : fontSize || '25px',
    textAlign:'center',
    cursor: cursor || null,
    display:'flex',

  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
