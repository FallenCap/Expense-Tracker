import React from 'react';
import '../css/ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list_fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {/*if the filteredExpenses arrays length is greater than 0 then it change the value like below:
        <ExpenseItem 
            title={props.expenses.title[i]}
            amount={props.expenses.amount[i]}
            date={props.date.date[i]}
        />*/}
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
