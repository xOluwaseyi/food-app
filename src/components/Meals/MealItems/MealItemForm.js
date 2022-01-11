import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const newAmount = amountInputRef.current.value;
    const newUpdatedAmount = +newAmount;

    if (
      newAmount.trim().length === 0 ||
      newUpdatedAmount < 0 ||
      newUpdatedAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    console.log(newUpdatedAmount);
    props.onAddToCart(newUpdatedAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Enter a valid amount between 1-5</p>}
    </form>
  );
};

export default MealItemForm;
