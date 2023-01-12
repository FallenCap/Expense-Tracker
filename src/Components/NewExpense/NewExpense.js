import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import '../css/NewExpense.css';

const NewExpense = (props) => {
  const [isFormShowing, setIsFormShowing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startShowingForm = () => {
    setIsFormShowing(true);
  };

  if (isFormShowing === false) {
    return (
      <div className="new-expense">
        <button onClick={startShowingForm}>Add New Expense</button>
      </div>
    );
  }

  const stopShowingForm = () => {
    setIsFormShowing(false);
  };

  return (
    <div className="new-expense">
      {/* here we using custom prop onSaveExpenseData which is pointing the saveExpenseHandler function. */}
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopShowingForm}
      />
    </div>
  );
};
export default NewExpense;
