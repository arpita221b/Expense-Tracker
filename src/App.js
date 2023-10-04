import "./App.css";
import Expenses from "./Components/ExpenseItem/Expenses";
import "./Components/ExpenseItem/Expenses.css";
import NewExpense from "./Components/NewExpense";
import { useState } from "react";
const Dummy_Expenses = [
  {
    id: "e1",
    title: "Laptop",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Telescope",
    amount: 799.49,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  console.log(expenses);
  return (
    <div>
      <NewExpense addExpenseHandlerProp={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
