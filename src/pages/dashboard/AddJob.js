import { useState } from 'react';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow } from '../../components';
import FormRowSelect from '../../components/FormRowSelect';

let initialState = {
  position: '',
  company: '',
  jobLocation: '',
  status: 'pending',
  jobType: 'full-time',
};

export default function AddJob() {
  // define the state and destructure it to type less
  let [jobData, setJobData] = useState(initialState);
  let { position, company, jobLocation, status, jobType } = jobData;
  // define variables
  let jobTypesList = ['full-time', 'part-time', 'remote', 'internship'];
  let statusList = ['pending', 'interview', 'declined'];

  return (
    <Wrapper>
      <form className="form">
        <h3>add job</h3>
        <div className="form-center">
          <FormRow name="position" type="text" value={position} />
          <FormRow name="company" type="text" value={company} />
          <FormRow
            name="jobLoction"
            type="text"
            value={jobLocation}
            labelText="job location"
          />
          <FormRowSelect name="status" value={status} list={statusList} />
          <FormRowSelect
            name="jobType"
            value={jobType}
            labelText="job type"
            list={jobTypesList}
          />
          <div className="btn-container">
            <button type="button" className="btn btn-block clear-btn">
              clear
            </button>
            <button type="submit" className="btn btn-block submit-btn">
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
