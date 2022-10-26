import React from 'react';
import { useSelector } from 'react-redux';
import JobItem from './JobItem';
import PageBtnContainer from './PageBtnContainer';

export default function PaginationJobsList() {
  let { jobs } = useSelector((store) => store.allJobs);
  return (
    <>
      <PageBtnContainer />

      <div className="jobs">
        {jobs.map((job) => (
          <JobItem key={job._id} {...job} />
        ))}
      </div>

      <PageBtnContainer />
    </>
  );
}
