import React from 'react';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from 'react-icons/hi';

export default function PageBtnContainer() {
  return (
    <Wrapper>
      <button type="button" className="prev-btn">
        <HiOutlineChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        <button type="button" className="pageBtn active">
          1
        </button>
        <button type="button" className="pageBtn">
          2
        </button>
        <button type="button" className="pageBtn">
          3
        </button>
        <button type="button" className="pageBtn">
          4
        </button>
      </div>
      <button type="button" className="next-btn">
        next
        <HiOutlineChevronDoubleRight />
      </button>
    </Wrapper>
  );
}
