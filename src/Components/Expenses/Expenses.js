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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={dropDownChangeYear}
          onChangeFilter={dropDownChangeHandler}
        />
        {props.inputData.map((expense) => (
          <ExpenseItem
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
