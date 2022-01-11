import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "../../components/Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>SeyiMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="foodimg" />
      </div>
    </Fragment>
  );
};

export default Header;
