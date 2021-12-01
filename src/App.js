import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_LIST = [
  { id: 1, title: "Hospital", amount: 100.1, date: new Date(2021, 2, 22) },
  { id: 2, title: "Car Repair", amount: 200, date: new Date(2021, 3, 1) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_LIST);
  const addExpense = (props) => {
    setExpenses((prevExpenses) => {
      return [props, ...prevExpenses];
    });
  };
  return (
    <div className="master">
      <h2 className="title">Welcome to React!</h2>
      <hr className="space" />
      <NewExpense data={addExpense} />
      <Expense data={expenses} />
    </div>
  );
}

export default App;
