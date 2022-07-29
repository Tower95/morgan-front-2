import React from 'react'

const Footer = () => {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <div>
      <p>
        {year} 
      </p>
    </div>
  )
}

export default Footer
