import React, { useContext, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { assets } from './../../assets/image/Assets';
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../StoreContex/StoreContex';


function ResponsiveNavbar({ setShowLogin }) {
    const [menu, setMenu] = useState("home")
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }
    return (
        <div>
            <div className='responsive-navbar'>
                <div className='res-navbar-container d-flex flex-column justify-content-center'>
                    <ul className="navbar-menu-res mb-3 ps-0">
                        <Link to='/' onClick={() => setMenu("home")} className={menu == 'home' ? 'active' : ''}>Home</Link>
                        <Link onClick={() => setMenu("menu")} className={menu == 'menu' ? 'active' : ''}>Menu</Link>
                        <Link onClick={() => setMenu("mobile-app")} className={menu == 'mobile-app' ? 'active' : ''}>App</Link>
                        <Link onClick={() => setMenu("contact-us")} className={menu == 'contact-us' ? 'active' : ''}>Contact Us</Link>
                    </ul >
                    <div className="navbar-right-res">
                        <div><IoSearch className='search ' /></div>
                        <div className='navbar-cart-icon'>
                            <Link to='/cart'> <FaCartShopping className='cart' /></Link>
                            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                        </div>
                        {
                            !token ? <button onClick={() => setShowLogin(true)}>Sign In</button>
                                : <div className='navbar-profile-res'>
                                    <img src={assets.profile_icon} alt="" className='profile_pic' />
                                    <ul className='nav-profile-dropdown'>
                                        <Link to={'/myorders'} className='d-flex align-middle justify-content-center textdark' style={{ fontSize: "16px", gap: "5px" }}>
                                            <div>
                                                <img src={assets.order_icon} alt="" style={{ width: "25px", marginRight: "10px" }} />
                                                <span>Orders</span>
                                            </div>
                                        </Link>
                                        <hr />
                                        <li onClick={logout}><img src={assets.logout_icon} alt="" style={{ width: "25px", marginRight: "5px" }} /><p>Logout</p></li>
                                    </ul>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveNavbar