import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [showNewExpense, setShowNewExpense] = useState(false);

  const toggleNewExpenseHandler = () => {
    setShowNewExpense((prevState) => {return !prevState});
  };

  let expenseBlockToShow = null;

  if (showNewExpense) {
    expenseBlockToShow = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onClose={toggleNewExpenseHandler}
      />
    );
  } else {
    expenseBlockToShow = (
      <button onClick={toggleNewExpenseHandler} type="submit">
        Add New Expense
      </button>
    );
  }

  return <div className="new-expense">{expenseBlockToShow}</div>;
};

export default NewExpense;
