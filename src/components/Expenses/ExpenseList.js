import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {
    if (props.item.length === 0) {
        return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
    }

    return (
        <ul className="expense-list">
            {props.item.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
}
export default ExpenseList;