import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [year, setYear] = useState();

  const getYear = (enteredYear) => {
    setYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expensesContent = <p>Nope</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeOption={getYear} />
      {expensesContent}
    </Card>
  );
}
export default Expenses;
