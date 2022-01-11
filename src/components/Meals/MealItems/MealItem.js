import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ price, description, name, id }) => {
  const cartCtx = useContext(CartContext);
  const newPrice = `${price.toFixed(2)}`;
  const addCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>#{newPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
