import React from 'react';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../features/allJobsSlice';
import paginationLimits from '../utils/paginationLimits';

export default function PageBtnContainer() {
  let { page, numOfPages } = useSelector((store) => store.allJobs);
  let dispatch = useDispatch();

  // prepare array of numbers to iterate over it to create buttons
  let btnArray = Array.from({ length: numOfPages }, (_, index) => index + 1);

  // spicify pagination start and end
  let maxNumOfBtns = 9;
  let startBtn = null;
  let endBtn = null;
  if (numOfPages >= 9) {
    let { start, end } = paginationLimits(page, numOfPages, maxNumOfBtns);
    startBtn = start;
    endBtn = end;
    btnArray = btnArray.slice(start, end);
  }

  function setPage(newPage) {
    dispatch(changePage(newPage));
  }

  // on click dots-btn we jump pages
  function jumpPages(newPage) {
    if (newPage > numOfPages) {
      newPage = numOfPages;
    }
    if (newPage < 1) {
      newPage = 1;
    }
    setPage(newPage);
  }

  // don't display button if we only have one page
  if (numOfPages <= 1) {
    return null;
  }

  return (
    <Wrapper>
      <button
        type="button"
        className="prev-btn"
        onClick={() => setPage(page - 1)}
      >
        <HiOutlineChevronDoubleLeft />
        prev
      </button>

      <div className="btn-container">
        {( startBtn > 0 && startBtn) && (
          <button
            type="button"
            className={`pageBtn dots-btn`}
            onClick={() => jumpPages(page - maxNumOfBtns)}
          >
            ...
          </button>
        )}
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
        {endBtn && endBtn < numOfPages && (
          <button
            type="button"
            className={`pageBtn dots-btn`}
            onClick={() => jumpPages(page + maxNumOfBtns)}
          >
            ...
          </button>
        )}
      </div>

      <button
        type="button"
        className="next-btn"
        onClick={() => setPage(page + 1)}
      >
        next
        <HiOutlineChevronDoubleRight />
      </button>
    </Wrapper>
  );
}
