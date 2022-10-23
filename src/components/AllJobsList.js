import React from 'react';
import Wrapper from '../assets/wrappers/JobsContainer';
import JobItem from './JobItem';
import PageBtnContainer from './PageBtnContainer';

export default function AllJobsList() {
  return (
    <Wrapper>
      <h5>35 jobs found</h5>
      <div class="jobs">
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </div>
      <PageBtnContainer />
    </Wrapper>
  );
}
