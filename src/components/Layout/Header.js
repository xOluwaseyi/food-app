import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "../../components/Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h3>SeyiFoods</h3>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="foodimg" />
      </div>
    </Fragment>
  );
};

export default Header;
