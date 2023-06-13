import React from "react";
import Expense from "./Expense";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">NO Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <Expense
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
