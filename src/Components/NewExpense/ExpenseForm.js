import React from 'react';
import '../css/ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" min="2019-01-01" step="0.01" max="2024-12-31" />
        </div>
      </div>
      <div className="new-expense_actions">
        <buttton type="submit">Add Expense</buttton>
      </div>
    </form>
  );
};
export default ExpenseForm;
