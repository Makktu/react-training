import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
                id={props.expenses[0].id}
            />
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
                id={props.expenses[1].id}
            />
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
                id={props.expenses[2].id}
            />
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}
                id={props.expenses[3].id}
            />
        </div>
    );
}

export default ExpensesList;
