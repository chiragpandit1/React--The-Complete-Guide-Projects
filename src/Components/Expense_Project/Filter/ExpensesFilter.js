import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const yearChanged = (event) => {
        props.onGettingValue(event.target.value)
    }
    // const [yearValue, setYearValue] = useState('2022');
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value = {props.defaultValue} onChange = {yearChanged}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
//this'll be the child compnent of expenselist