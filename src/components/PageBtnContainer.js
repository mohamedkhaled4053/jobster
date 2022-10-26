import React from 'react';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../features/allJobsSlice';

export default function PageBtnContainer() {
  let { page, numOfPages } = useSelector((store) => store.allJobs);
  let dispatch = useDispatch();

  // prepare array of numbers to iterate over it to create buttons
  let btnArray = Array.from({ length: numOfPages }, (_, index) => index + 1);

  /////////////////////////
  let maxNumOfBtns = 9;

  let start = page - 5;
  let end = page + 4;
  if (start < 0) {
    end = maxNumOfBtns;
    start = 0;
  }
  if (end > numOfPages) {
    start = -maxNumOfBtns;
    end = numOfPages;
  }
  btnArray = btnArray.slice(start, end);

  //////////////////////////

  function setPage(newPage) {
    dispatch(changePage(newPage));
  }

  function nextPage() {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  }
  function previousPage() {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  }

  // don't display button if we only have one page
  if (numOfPages <= 1) {
    return null;
  }

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={previousPage}>
        <HiOutlineChevronDoubleLeft />
        prev
      </button>

      <div className="btn-container">
        {start > 0 && (
          <button
            type="button"
            className={`pageBtn dots-btn`}
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
        {end < numOfPages && (
          <button
            type="button"
            className={`pageBtn dots-btn`}
          >
            ...
          </button>
        )}
      </div>

      <button type="button" className="next-btn" onClick={nextPage}>
        next
        <HiOutlineChevronDoubleRight />
      </button>
    </Wrapper>
  );
}
