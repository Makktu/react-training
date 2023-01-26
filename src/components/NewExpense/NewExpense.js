import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const submitExpenseDataHandler = (raisedExpenseData) => {
        const expenseData = {
            ...raisedExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSubmittalExpenseData={submitExpenseDataHandler} />
        </div>
        // stuff
    );
};

export default NewExpense;