import React from 'react';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import moment from 'moment'

export default function JobItem({
  company,
  position,
  status,
  jobType,
  jobLocation,
  createdAt,
}) {

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company && company[0]}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} info={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} info={moment(createdAt).format("MMM Do YY")} />
          <JobInfo icon={<FaBriefcase />} info={jobType} />
          <div className="status pending">{status}</div>
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
