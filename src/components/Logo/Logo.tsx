import React from 'react'
import './style.css'

const Logo: React.FC = () => {
  return (
    <h1 className="logo">
      <span role="img" aria-label="emoji">
        🎶
      </span>
      <span role="img" aria-label="emoji">
        🎹
      </span>
      <span role="img" aria-label="emoji">
        🖐️
      </span>
    </h1>
  )
}

export default Logo
