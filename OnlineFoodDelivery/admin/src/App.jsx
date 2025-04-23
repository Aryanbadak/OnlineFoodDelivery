import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Order/Orders'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Add add={"Add"}/>} />
          <Route path='/list' element={<List list={"List"}/>} />
          <Route path='/orders' element={<Orders Orders={"Orders"}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App