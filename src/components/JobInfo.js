import React from 'react';
import Wrapper from '../assets/wrappers/JobInfo';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

export default function JobInfo() {
  return (
    <Wrapper>
      <span className="icon">
        <HiOutlineChevronDoubleLeft />
      </span>
      <span className="text">kfs </span>
    </Wrapper>
  );
}
