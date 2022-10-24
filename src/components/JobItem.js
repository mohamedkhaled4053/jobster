import React from 'react';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deleteJob } from '../features/allJobsSlice';
import { setupEdit } from '../features/newJobSlice';

export default function JobItem({
  _id:id,
  company,
  position,
  status,
  jobType,
  jobLocation,
  createdAt,
}) {

  let dispatch = useDispatch()

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company[0]}</div>
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
            <button type='button' className="btn edit-btn" onClick={()=>dispatch(setupEdit())}>
              Edit
            </button>
            <button type="button" className="btn delete-btn" onClick={()=>dispatch(deleteJob(id))}>
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}
