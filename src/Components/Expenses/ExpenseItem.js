import React, { useState } from 'react';
import '../css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item_price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
