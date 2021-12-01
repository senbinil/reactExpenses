import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.item.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  return (
    <ul className="expenses-list">
      {props.item.map((filterExpenses) => (
        <ExpenseItem
          key={filterExpenses.id}
          title={filterExpenses.title}
          amount={filterExpenses.amount}
          date={filterExpenses.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
