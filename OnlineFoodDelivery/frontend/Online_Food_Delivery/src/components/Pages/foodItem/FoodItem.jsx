import React, { useContext, useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import "./fooditem.css";
import { StoreContext } from "../../StoreContex/StoreContex";

const FoodItem = ({
  id,
  image,
  name,
  categeory,
  price,
  deliveryTime,
  description,
}) => {
  const { cartItems, setCartItems, addToCart, removeCart, url } = useContext(StoreContext)
  return (
    <div className="card-container row row-cols-lg-4 row-cols-md-1 row-cols-sm-2">
      <div className="food-card col">
        <div className="food-card-img-container">
          <img src={url + "/images/" + image} alt="" className="food-card-img" />
          {
            !cartItems[id]
              ? <div className="addIcon_white"
                onClick={() => addToCart(id)}>Add</div>
              :
              <div className="item-card-counter">
                <button onClick={() => removeCart(id)}>-</button>
                <p>{cartItems[id]}</p>
                <button onClick={() => addToCart(id)}>+</button>

              </div>
          }
        </div>
        <div className="name-rating">
          <p className="card-name">{name}</p>
          <p className="rating">
            4.5{" "}
            <span>
              <FaStar className="star" />
            </span>
          </p>
        </div>
        <p className="card-category">{categeory}</p>
        <div className="card-des-price ">
          <h6 className="car-description">{description}</h6>
          <p className="card-price">
            <MdOutlineCurrencyRupee />
            {price}for one
          </p>
        </div>
        <p className="card-time">{deliveryTime}</p>
        <p></p>
      </div>
    </div>
  );
};

export default FoodItem;
