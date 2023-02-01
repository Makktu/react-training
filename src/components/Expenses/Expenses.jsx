import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./styles/Expenses.css";

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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList
                    expenses={filteredExpenses}
                    filteredYear={filteredYear}
                />
            </Card>
        </div>
    );
};

export default Expenses;
