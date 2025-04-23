import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../StoreContex/StoreContex'
import { useNavigate } from 'react-router-dom'

const Cart = (props) => {
  const { cartItems, food_list, removeCart, getTotalCartAmount, url } = useContext(StoreContext)
  document.title = `${props.cart} `

  const navigate = useNavigate()
  return (
    <div className='cartt'>
      <div className="cartt-items">
        <div className="cartt-items-title">
          <p className='p-0'>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div  className='cartt-items-title cartt-item-item '>
                    <img src={url + "/images/" + item.image} alt='' />
                    <p>{item.name}</p>
                    <p className='p-0'>{item.price}</p>
                    <p className='p-0'>{cartItems[item._id]}</p>
                    <p className='p-0'>{item.price * cartItems[item._id]}</p>
                    <p onClick={() => removeCart(item._id)} className="cross p-0">X</p>
                  </div>
                  <hr />
                </div>
              )
            }
          })
        }
      </div>
      <div className="cartt-bottom">
        <div className="cartt-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cartt-total-details">
              <p>SubTotal</p>
              <p> &#8377; {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartt-total-details">
              <p>Delivery Fee</p>
              <p> &#8377; {getTotalCartAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cartt-total-details">
              <b>Total</b>
              <b>&#8377; {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>

        </div>
        <div className="cartt-promocode">
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className='cartt-promocode-input'>
              <input type='text' placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Cart
