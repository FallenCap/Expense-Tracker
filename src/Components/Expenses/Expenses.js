import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import '../css/Expenses.css';

const Exepnses = (props) => {
  const [dropDownChangeYear, setDropDownChangeYear] = useState('2020');
  const dropDownChangeHandler = (selectedYear) => {
    /*Here the dropDownChangeHandler funcion takes value from the onChangeFilter
     which also take data from the filterChangeHandler of ExpenseForm file.*/
    setDropDownChangeYear(selectedYear);
  };

  const filteredExpenses = props.inputData.filter((expense) => {
    //The filter method returns a new array and the original array isn't touched.
    return expense.date.getFullYear().toString() === dropDownChangeYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* Here the onChangeFilter custom prop point the dropDownChangeHandler function in the ExpensesFilter component. */}
        <ExpensesFilter
          selected={dropDownChangeYear}
          onChangeFilter={dropDownChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Exepnses;
