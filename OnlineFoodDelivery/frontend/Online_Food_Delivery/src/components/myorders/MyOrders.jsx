import React, { useContext, useEffect, useState } from 'react'
import './myorder.css'
import { StoreContext } from '../StoreContex/StoreContex'
import axios from 'axios'
import { assets } from '../../assets/image/Assets'

function MyOrders() {
    const { url, token } = useContext(StoreContext)
    const [data, setData] = useState([])

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
        setData(response.data.data)
    }
    useEffect(() => {
        if (token) {
            fetchOrders()
        }
    }, [token])
    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {
                    data.map((order, index) => {
                        return (
                            <div key={index} className="my-orders-order">
                                <img src={assets.product_icon} alt='' />
                                <p>{order.items.map((item, index) => {
                                    if (index == order.items.length - 1) {
                                        return item.name + " x " + item.quantity
                                    }
                                    else {
                                        return item.name + " x " + item.quantity + " , "
                                    }
                                })}</p>
                                <p>$ {order.amount} .00</p>
                                <p>Items : {order.items.length}</p>
                                <p><span>&#9679; </span> <b>{order.status}</b></p>
                                <button>Track Orders</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyOrders
