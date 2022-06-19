import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onSubmitExpense = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseHandlerProp(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSubmitExpense} />
    </div>
  );
};
export default NewExpense;
