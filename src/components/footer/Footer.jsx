import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
                <hr />
        <div className="footer-content">
            <div className="footer-content-left">
            <Link to="/presentation"><img src={assets.logo} alt="logo" className='logo'/> </Link>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>https://t.me/hopelesshex</li>
                    <li>https://github.com/FlyBuddyErich</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © bitebliss.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer