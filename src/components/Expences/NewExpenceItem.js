import React, { useState } from "react";
import "./NewExpenceItem.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

export default function NewExpenceItem(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterUpdate = (ownpar) => {
    setFilteredYear(ownpar);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangefilter={filterUpdate} />
        <ExpensesChart expense={filteredExpenses} />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </div>
  );
}
