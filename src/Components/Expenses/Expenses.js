import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import '../css/Expenses.css';

const Exepnses = (props) => {
  const [dropDownChangeYear, setDropDownChangeYear] = useState('2020');
  const dropDownChangeHandler = (selectedYear) => {
    setDropDownChangeYear(selectedYear);
  };

  const filteredExpenses = props.inputData.filter((expense) => {
    //The filter method returns a new array and the original array isn't touched.
    return expense.date.getFullYear().toString() === dropDownChangeYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={dropDownChangeYear}
          onChangeFilter={dropDownChangeHandler}
        />

        {/*Here we are creating ExpenseItem dynamically which represent the
        <ExpenseItem 
        title={props.expenses.title[i]}
        amount={props.expenses.amount[i]}
        date={props.date.date[i]}
        />
        */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Exepnses;
