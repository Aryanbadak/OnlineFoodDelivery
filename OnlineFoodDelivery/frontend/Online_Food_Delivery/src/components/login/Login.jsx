import React, { useContext, useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import './login.css'
import { StoreContext } from '../StoreContex/StoreContex';
import axios from 'axios'

const Login = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Sign Up")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(data => ({ ...data, [name]: value }))

    }

    const onLogin = async (e) => {
        e.preventDefault()
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data)
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }
        else {
            alert(response.data.message)
        }
    }

    return (
        <div className='login-popup z-2'>
            <form onSubmit={onLogin} className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <IoClose onClick={() => setShowLogin(false)} className='close' />
                </div>
                <div className="login-popup-inputs">
                    {
                        currState === "Login" ? <></> : <input type='text'
                            name='name'
                            onChange={onChangeHandler}
                            value={data.name}
                            placeholder='Your name' required />
                    }
                    <input type='email' placeholder='Your email'
                        name='email'
                        onChange={onChangeHandler}
                        value={data.email}
                        required />
                    <input type='password' placeholder='Password'
                        name='password'
                        onChange={onChangeHandler}
                        value={data.password}
                        required />
                    <div className="login-popup-condition">
                        <input type='checkbox' required />
                        <p>I agree terms of <span> use & privacy policy</span></p>
                    </div>
                </div>
                <button type='submit'>{currState === "Sign Up" ? "create account" : "Login"}</button>
                <div className="optional">
                    {
                        currState === "Login" ? <p>Create a new account?<span
                            onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                            : <p>Already have an account?<span
                                onClick={() => setCurrState("Login")}>Login Here</span></p>
                    }
                </div>
            </form>
        </div>
    )
}

export default Login