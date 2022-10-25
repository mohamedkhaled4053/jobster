import React from 'react';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { changePage } from '../features/allJobsSlice';

export default function PageBtnContainer({ numOfPages, page }) {
  let dispatch = useDispatch();

  // prepare array of numbers to iterate over it to create buttons
  let btnArray = Array.from({ length: numOfPages }, (_, index) => index + 1);

  function setPage(newPage) {
    dispatch(changePage(newPage));
  }

  function nextPage() {
    let newPage = page + 1
    if (newPage > numOfPages) {
      newPage = 1
    }
    dispatch(changePage(newPage));
  }
  function previousPape() {
    let newPage = page - 1
    if (newPage < 1) {
      newPage = numOfPages
    }
    dispatch(changePage(newPage));
  }

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={previousPape}>
        <HiOutlineChevronDoubleLeft />
        prev
      </button>

      <div className="btn-container">
        {btnArray.map((btnNum) => (
          <button
            key={btnNum}
            type="button"
            className={`pageBtn ${page === btnNum && 'active'}`}
            onClick={() => setPage(btnNum)}
          >
            {btnNum}
          </button>
        ))}
      </div>

      <button type="button" className="next-btn"  onClick={nextPage}>
        next
        <HiOutlineChevronDoubleRight />
      </button>
    </Wrapper>
  );
}
