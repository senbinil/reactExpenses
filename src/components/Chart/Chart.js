import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  let ExpAmount = props.dataPoints.map((x) => x.value);
  let ExpMax = Math.max(...ExpAmount);
  return (
    <div className="chart">
      {props.dataPoints.map((x) => (
        <ChartBar
          key={x.label}
          value={x.value}
          maxVal={ExpMax}
          label={x.label}
        />
      ))}
    </div>
  );
};

export default Chart;
