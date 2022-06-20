import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [year, setYear] = useState();

  const getYear = (enteredYear) => {
    setYear(enteredYear);
    console.log(enteredYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeOption={getYear} />
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}
export default Expenses;
