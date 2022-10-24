import React from 'react';
import Wrapper from '../assets/wrappers/StatsContainer'
import StatItem from './StatItem';

export default function StatsContainer() {
    let colores = ["#e9b949","#647acb","#d66a6a"]

  return (
    <Wrapper>
        <StatItem color={colores[0]}/>
        <StatItem color={colores[1]}/>
        <StatItem color={colores[2]}/>

    </Wrapper>
  );
}
