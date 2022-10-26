import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, loadingOn } from '../features/allJobsSlice';
import JobItem from './JobItem';

export default function OnePageJobsList() {
  let {
    page,
    isLoading,
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

  // if we reached the end of the page then get the next page to desplay
  function handleScroll() {
    if (isInViewport(loadingContainer.current) && !isLoading) {
      dispatch(loadingOn());
      dispatch(changePage(page + 1));
    }
  }

  // effects
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [isLoading]);

  return (
    <>
      <div className="jobs">
        {jobs.map((job) => (
          <JobItem key={job._id} {...job} />
        ))}
      </div>
      {(page !== numOfPages || jobs.length === 0) && (
        <div className="loading" ref={loadingContainer}></div>
      )}
    </>
  );
}
