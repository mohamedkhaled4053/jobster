import React from 'react';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';

export default function JobItem() {
  return (
    <Wrapper>
      <header>
        <div class="main-icon">z</div>
        <div class="info">
          <h5>zzzzzzzz</h5>
          <p>zzzzzzzz</p>
        </div>
      </header>
      <div class="content">
        <div class="content-center">
          <JobInfo />
          <JobInfo />
          <JobInfo />
          <div class="status pending">pending</div>
        </div>
        <footer>
          <div class="actions">
            <a class="btn edit-btn" href="/add-job" data-ur1313m3t="true">
              Edit
            </a>
            <button type="button" class="btn delete-btn">
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}
