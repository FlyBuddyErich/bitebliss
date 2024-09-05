import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
 
const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to="/presentation"><img src={assets.logo} alt="logo" className='logo'/> </Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a onClick={() => window.scrollTo({top: 850, behavior: 'smooth'})}  className={menu==="menu"?"active":""}>Menu</a>
        <a onClick={() => window.scrollTo({top: 3000, behavior: 'smooth'})} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
        <a onClick={() => window.scrollTo({top: 4000, behavior: 'smooth'})} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" style={{cursor: 'pointer'}} /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar