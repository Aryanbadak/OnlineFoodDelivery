import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Pages/Home/Home'
import Cart from './components/Pages/Cart/Cart'
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useEffect, useState } from 'react'
import Login from './components/login/Login'
import { FaArrowUp } from "react-icons/fa";
import Verify from './components/Pages/Verify/Verify'
import MyOrders from './components/myorders/MyOrders'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home home={"Online Food Delivery"} />} />
          <Route path='/cart' element={<Cart cart={"Cart"} />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
      {
        showButton && (
          <button
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              padding: '10px 20px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          ><FaArrowUp /></button>
        )
      }
    </>
  )
}

export default App

// npm i-to install node_modules folder