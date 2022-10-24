import React, { useEffect } from 'react';
import Wrapper from '../assets/wrappers/JobsContainer';
import JobItem from './JobItem';
import PageBtnContainer from './PageBtnContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../features/allJobsSlice';

export default function AllJobsList() {
  // get data from the store
  let { isLoading, jobs, numOfPages, totalJobs } = useSelector(
    (store) => store.allJobs
  );
  
  let dispatch = useDispatch();

  // effects
  useEffect(() => {
    dispatch(getAllJobs());
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <Wrapper>
      <h5>{totalJobs} jobs found</h5>
      <div className="jobs">
        {jobs.map((job) => (
          <JobItem key={job._id} {...job} />
        ))}
      </div>
      <PageBtnContainer numOfPages={numOfPages} />
    </Wrapper>
  );
}
