import "./Expense.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [year, setYear] = useState(2021);

  const filterVal = (val) => {
    setYear(val);
  };
  const filterExpenses = props.data.filter(
    (x) => String(x.date.getFullYear()) === String(year)
  );
  return (
    <div>
      <Card className="expense">
        <ExpenseFilter selected={year} fetchVal={filterVal} />
        <ExpenseChart expenses={filterExpenses} />
        <ExpensesList item={filterExpenses} />
      </Card>
    </div>
  );
}
export default Expense;
