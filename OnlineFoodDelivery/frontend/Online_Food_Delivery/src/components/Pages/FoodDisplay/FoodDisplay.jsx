import React, { useContext } from "react";
import "./fooddisplay.css";
import { StoreContext } from "../../StoreContex/StoreContex";
import FoodItem from "../foodItem/FoodItem";
const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display mb-5" id="food-display">
      <h2>Top Popular Dishes near me</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.categeory) {
            return <FoodItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              categeory={item.categeory}
              description={item.description}
              price={item.price}
              deliveryTime={item.deliveryTime}
            />
          }
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;
