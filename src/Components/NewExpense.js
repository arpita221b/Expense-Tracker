import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const onSubmitExpense = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.addExpenseHandlerProp(expenseData);
    setDisplay(false);
  };

  const [display, setDisplay] = useState(false);

  const doNotDisplay = () => {
    setDisplay(false);
  };

  return (
    <div className="new-expense">
      {display ? (
        <ExpenseForm
          onSaveExpenseData={onSubmitExpense}
          onCancel={doNotDisplay}
        />
      ) : (
        <button onClick={() => setDisplay(true)}> Add New Expense </button>
      )}
    </div>
  );
};
export default NewExpense;
