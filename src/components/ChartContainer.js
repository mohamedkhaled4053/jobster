import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/ChartsContainer';
import AreaChartComponent from './AreaChartComponent';
import BarChartComponent from './BarChartComponent';

export default function ChartContainer() {
  // local state
  let [isBarChart, setIsBarChart] = useState(true);
  // get chart data from store
  let { chartData } = useSelector((store) => store.stats);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setIsBarChart(!isBarChart)}>
        switch to {isBarChart ? 'Area Chart' : 'Bar Chart'}
      </button>

      {isBarChart ? (
        <BarChartComponent data={chartData} />
      ) : (
        <AreaChartComponent data={chartData} />
      )}
    </Wrapper>
  );
}
