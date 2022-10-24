import React from 'react';
import Wrapper from '../assets/wrappers/JobInfo';

export default function JobInfo({icon, info}) {
  return (
    <Wrapper>
      <span className="icon">
       {icon}
      </span>
      <span className="text">{info} </span>
    </Wrapper>
  );
}
