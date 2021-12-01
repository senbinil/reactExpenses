import Chart from "./Chart/Chart";
const ExpenseChart = (props) => {
  const ChartPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expenses of props.expenses) {
    const expenseMonth = expenses.date.getMonth();
    ChartPoints[expenseMonth].value += expenses.amount;
  }
  return <Chart dataPoints={ChartPoints} />;
};

export default ExpenseChart;
