import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../features/allJobsSlice';
import JobItem from './JobItem';

export default function OnePageJobsList() {
  let {
    page,
    numOfPages,
    onePageJobs: jobs,
  } = useSelector((store) => store.allJobs);
  let dispatch = useDispatch();

  let loadingContainer = useRef(null);

  // helper functions
  function isInViewport(element) {
    if (!element) {
      return false;
    }
    let rec = element.getBoundingClientRect();
    return rec.top < window.innerHeight;
  }

  function handleScroll() {
    if (isInViewport(loadingContainer.current)) {
      console.log('a');
      dispatch(changePage(page + 1));
    }
  }

  useEffect(() => {
    // begin loading new photos if loading element in viewport
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div className="jobs">
        {jobs.map((job) => (
          <JobItem key={job._id} {...job} />
        ))}
      </div>
      {page !== numOfPages && (
        <div className="loading" ref={loadingContainer}></div>
      )}
      ;
    </>
  );
}
