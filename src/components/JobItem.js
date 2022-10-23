import React from 'react';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';

export default function JobItem() {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">z</div>
        <div className="info">
          <h5>zzzzzzzz</h5>
          <p>zzzzzzzz</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo />
          <JobInfo />
          <JobInfo />
          <div className="status pending">pending</div>
        </div>
        <footer>
          <div className="actions">
            <a className="btn edit-btn" href="/add-job" data-ur1313m3t="true">
              Edit
            </a>
            <button type="button" className="btn delete-btn">
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}
