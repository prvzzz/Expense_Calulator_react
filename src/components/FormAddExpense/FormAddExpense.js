import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./FormAddExpense.css";

export default function FormAddExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveExpenseDataHandler = (ownParametername) => {
    const expenceData = {
      //new Object name

      ...ownParametername,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenceData);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
