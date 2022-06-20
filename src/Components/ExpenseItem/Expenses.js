import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import { useState } from "react";
import ExpensesList from "../ExpensesList";

function Expenses(props) {
  const [year, setYear] = useState();

  const getYear = (enteredYear) => {
    setYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeOption={getYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
