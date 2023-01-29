import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("all");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    let filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear() === parseInt(filteredYear)
    );

    if (filteredExpenses.length === 0 && filteredYear === "all") {
        filteredExpenses = props.expenses;
    }

    let expensesContent = (
        <p className="expenses__data_none-found">No Expenses Found</p>
    );

    if (filteredExpenses.length > 0 || filteredYear === "all") {
        console.log(filteredExpenses);
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expensesContent}
            </Card>
        </div>
    );
};

export default Expenses;
