import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite positions here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with love and soul</p>
           <a href='#explore-menu'><button>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header