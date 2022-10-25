import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/ChartsContainer';
import AreaChartComponent from './AreaChartComponent';
import BarChartComponent from './BarChartComponent';

export default function ChartContainer() {
  let [isBarChart, setIsBarChart] = useState(true);
  let { chartData } = useSelector((store) => store.stats);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setIsBarChart(true)}>
        Bar Chart
      </button>
      <button type="button" onClick={() => setIsBarChart(false)}>
        Area Chart
      </button>
      {isBarChart ? (
        <BarChartComponent data={chartData} />
      ) : (
        <AreaChartComponent data={chartData} />
      )}
    </Wrapper>
  );
}
