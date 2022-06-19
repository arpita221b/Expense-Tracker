import "./App.css";
import Expenses from "./Components/ExpenseItem/Expenses";
import "./Components/ExpenseItem/Expenses.css";
import NewExpense from "./Components/NewExpense";

function App() {
  const expenses = [
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
      date: new Date(2021, 2, 12),
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

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
