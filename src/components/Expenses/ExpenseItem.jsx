import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// function getNewValue() {
//     let someNewVal = "";
//     while (!someNewVal) {
//         someNewVal = prompt("NEW VALUE?");
//     }
//     console.log(someNewVal);
//     return someNewVal;
// }

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        // setTitle(getNewValue());
        setTitle("updated");
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">£{props.amount}</div>
            </div>
            <button onClick={clickHandler}>CHANGE</button>
        </Card>
    );
};

export default ExpenseItem;
