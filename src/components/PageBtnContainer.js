import React from 'react';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from 'react-icons/hi';

export default function PageBtnContainer({ numOfPages }) {
  let btnArray = Array.from({ length: numOfPages }, (_, index) => index + 1);

  return (
    <Wrapper>
      <button type="button" className="prev-btn">
        <HiOutlineChevronDoubleLeft />
        prev
      </button>

      <div className="btn-container">
        {btnArray.map((btnNum) => (
          <button key={btnNum} type="button" className="pageBtn">
            {btnNum}
          </button>
        ))}
      </div>

      <button type="button" className="next-btn">
        next
        <HiOutlineChevronDoubleRight />
      </button>
    </Wrapper>
  );
}
