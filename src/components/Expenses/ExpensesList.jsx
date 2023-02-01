// import "ExpensesList.css" from "./"
import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./styles/ExpensesList.css";

const ExpensesList = (props) => {
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
    }

    return (
        <div>
            <ul className="expenses-list">
                {props.expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ExpensesList;
