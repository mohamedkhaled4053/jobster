import React, { useEffect } from 'react';
import Wrapper from '../assets/wrappers/JobsContainer';
import JobItem from './JobItem';
import PageBtnContainer from './PageBtnContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../features/allJobsSlice';

export default function AllJobsList() {
  // get data from the store
  let { isLoading, jobs, numOfPages, page, totalJobs, filters } = useSelector(
    (store) => store.allJobs
  );

  let dispatch = useDispatch();

  // effects
  // get all jobs every time filters change
  useEffect(() => {
    let promise = dispatch(getAllJobs(filters));

    return () => {
      // clean up
      promise.abort();
    };
    // eslint-disable-next-line
  }, [filters]);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <Wrapper>
      <h5>{totalJobs} jobs found</h5>
      {numOfPages > 1 && (
        <PageBtnContainer numOfPages={numOfPages} page={page} />
      )}
      <div className="jobs">
        {jobs.map((job) => (
          <JobItem key={job._id} {...job} />
        ))}
      </div>
      {numOfPages > 1 && (
        <PageBtnContainer numOfPages={numOfPages} page={page} />
      )}
    </Wrapper>
  );
}
