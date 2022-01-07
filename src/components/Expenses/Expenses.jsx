import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [chosenYear, setChosenYear] = useState("2020");

  const filterChangerFilter = (selectedYear) => {
    setChosenYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === chosenYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={chosenYear}
          onChangeYear={filterChangerFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
