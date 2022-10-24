import React from 'react';
import Wrapper from '../assets/wrappers/StatItem';

export default function StatItem({color, icon, data, text ,iconBackGround}) {
  return (
    <Wrapper color={color} bcg={iconBackGround}>
      <header>
        <span className="count">{data}</span>
        <span className="icon">
          {icon}
        </span>
      </header>
      <h5 className="title">{text}</h5>
    </Wrapper>
  );
}
