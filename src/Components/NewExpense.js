import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
  const onSubmitExpense = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSubmitExpense} />
    </div>
  );
};
export default NewExpense;
