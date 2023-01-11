import React, { useState } from 'react';
import '../css/ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    /*Here in this function the setEnteredTitle 
    function take the input from the form when the submit button will clicked. */
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    /*Here in this function the setEnteredAmount 
    function take the input from the form when the submit button will clicked. */
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    /*Here in this function the setEnteredDate 
    function take the input from the form when the submit button will clicked. */
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    /*Here on onSaveExpenseData we pass the expenseData 
    which works as a argument for saveExpenseDataHandler in the file NewExpenseData.*/
    props.onSaveExpenseData(expenseData);

    //When the submit button is clicked then the all the input fields are reset as a empty field by calling the methods.
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="0.01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
