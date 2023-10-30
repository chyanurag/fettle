import React from 'react'
import "./Navbar.css";
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className='Navbar'>
        <ul className='navoptions'>
            <li>  <Link to="/">Home </Link>  </li>
            <li>  <Link to="/about">About </Link> </li>
            <li>  <Link to="/services">Services </Link> </li>
            <li>  <Link to="/review">Review</Link>   </li>
            <li>  <Link to="/ContactUs">Contact Us</Link></li>
        </ul>
        
    </div>
  )
}

export default Navbar;