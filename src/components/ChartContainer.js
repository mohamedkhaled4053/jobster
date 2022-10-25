import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/ChartsContainer';
import AreaChart from './AreaChart';
import BarChart from './BarChart';

export default function ChartContainer() {
  let [isBarChart, setIsBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setIsBarChart(true)}>
        Bar Chart
      </button>
      <button type="button" onClick={() => setIsBarChart(false)}>
        Area Chart
      </button>
      {isBarChart ? <BarChart /> : <AreaChart />}
    </Wrapper>
  );
}
