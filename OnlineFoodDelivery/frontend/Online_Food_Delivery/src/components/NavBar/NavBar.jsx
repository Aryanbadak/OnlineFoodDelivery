import React, { useContext, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { assets } from './../../assets/image/Assets';
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../StoreContex/StoreContex';
import ResponsiveNavbar from './ResponsiveNavBar';

function NavBar({ setShowLogin }) {
  const [menu, setMenu] = useState("home")
  const [toggle, setToggle] = useState(false)
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className='navbar row'>
      <Link to='/' className='col col-lg-3 '><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu col col-lg-5">
        <Link to='/' onClick={() => setMenu("home")} className={menu == 'home' ? 'active' : ''}>Home</Link>
        <Link onClick={() => setMenu("menu")} className={menu == 'menu' ? 'active' : ''}>Menu</Link>
        <Link onClick={() => setMenu("mobile-app")} className={menu == 'mobile-app' ? 'active' : ''}>App</Link>
        <Link onClick={() => setMenu("contact-us")} className={menu == 'contact-us' ? 'active' : ''}>Contact Us</Link>
      </ul >
      <div className="navbar-right col col-lg-4">
        <div><IoSearch className='search dis-none' /></div>
        <div className='navbar-cart-icon dis-none'>
          <Link to='/cart'> <FaCartShopping className='cart' /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {
          !token ? <button className='dis-none' onClick={() => setShowLogin(true)}>Sign In</button>
            : <div className='navbar-profile dis-none'>
              <img src={assets.profile_icon} alt="" className='profile_pic' />
              <ul className="nav-profile-dropdown">
                <Link to={'/myorders'} className='d-flex align-middle justify-content-center textdark' style={{ fontSize: "16px", gap: "5px" }}><img src={assets.order_icon} alt="" style={{ width: "25px", marginRight: "5px" }} /><p>Orders</p></Link>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" style={{ width: "25px", marginRight: "5px" }} /><p>Logout</p></li>
              </ul>
            </div>
        }
        <div className='position-relative list-container'>
          <span type="button" className='list-icon' onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg></span>
        </div>
      </div>
      {
        toggle ? <ResponsiveNavbar setShowLogin={setShowLogin} /> : ""
      }
    </div>
  )
}

export default NavBar
