import React from 'react';
import '../css/ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    // filterChangeHandler runs a onChangeFilter function which get the value from the select component.
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter_control">
        <label>Filter by year</label>
        {/* Here in the select html component the the onChange prop will trigger the function filterChangeHandler */}
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
