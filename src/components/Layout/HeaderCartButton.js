import React, { useContext, useEffect, use, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const noOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [btnPump, setBtnPump] = useState(false);

  const btnClasses = `${classes.button} ${btnPump ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnPump(true);
    const timer = setTimeout(() => {
      setBtnPump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
