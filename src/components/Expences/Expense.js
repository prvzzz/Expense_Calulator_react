import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import Calender from "./Calender";

function Expense(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
    console.log("cliked");
  };
  return (
    <li>
      <Card className="expense-item">
        <div>
          <Calender date={props.date} />
        </div>
        <div className="expense-item__description">
          <h2 className="expense-item h2">{title}</h2>
          <div className="expense-item__price ">${props.amount}</div>
          <button onClick={clickHandler}>clik</button>
        </div>
      </Card>
    </li>
  );
}

export default Expense;
