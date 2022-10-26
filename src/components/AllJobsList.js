import React, { useEffect } from 'react';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useDispatch, useSelector } from 'react-redux';
import {  getAllJobs } from '../features/allJobsSlice';
import PaginationJobsList from './PaginationJobsList';
import OnePageJobsList from './OnePageJobsList';

export default function AllJobsList() {
  // get data from the store
  let { isLoading, totalJobs, page, filters, displayMode } =
    useSelector((store) => store.allJobs);

  let dispatch = useDispatch();

  // effects
  // get all jobs every time filters change
  useEffect(() => {
    let promise = dispatch(getAllJobs());

    return () => {
      // clean up
      promise.abort();
    };
    // eslint-disable-next-line
  }, [filters, page]);

  // // this is for testing remove it later
  // useEffect(() => {
  //   for (const job of jobs) {
  //     dispatch(deleteJob(job._id));
  //   }
  // }, [page]);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <Wrapper>
      <h5>{totalJobs} jobs found</h5>
      {displayMode === 'pagination' ? (
        <PaginationJobsList />
      ) : (
        <OnePageJobsList  />
      )}
    </Wrapper>
  );
}
