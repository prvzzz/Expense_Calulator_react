import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, SetEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
  };
  const [enteredAmount, SetEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value);
  };

  const [enteredDate, SetEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    SetEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenceData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenceData);
    props.onSaveExpenseData(expenceData);
    SetEnteredTitle("");
    SetEnteredAmount("");
    SetEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2015-01-01"
            max="2023-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="change-btn-position">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
