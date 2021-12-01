import './ExpenseDate.css';
function GetDate(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("default", { month: "long" });
  const day = props.date.toLocaleString("default", { day: "2-digit" });
  return (
    <div className="expense-date ">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_day">{day}</div>
      <div className="expense-date_year">{year}</div>
    </div>
  );
}

export default GetDate;
