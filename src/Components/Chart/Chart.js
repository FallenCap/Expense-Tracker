import React from 'react';
import '../css/Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxVlaue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
