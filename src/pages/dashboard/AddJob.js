import { useState } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow } from '../../components';
import FormRowSelect from '../../components/FormRowSelect';

export default function AddJob() {
  // get data from store
  let {
    job: { isLoading },
    user: {
      user: { location  },
    },
  } = useSelector((store) => store);

  // define the state and destructure it to type less
  let initialState = {
    position: '',
    company: '',
    jobLocation: location,
    status: 'pending',
    jobType: 'full-time',
  };
  let [jobData, setJobData] = useState(initialState);
  let { position, company, jobLocation, status, jobType } = jobData;
  // define variables
  let jobTypesList = ['full-time', 'part-time', 'remote', 'internship'];
  let statusList = ['pending', 'interview', 'declined'];

  // helper funtions
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setJobData({ ...jobData, [name]: value });
  }

  return (
    <Wrapper>
      <form className="form">
        <h3>add job</h3>
        <div className="form-center">
          <FormRow
            name="position"
            type="text"
            value={position}
            handleChange={handleChange}
          />
          <FormRow
            name="company"
            type="text"
            value={company}
            handleChange={handleChange}
          />
          <FormRow
            name="jobLoction"
            type="text"
            value={jobLocation}
            labelText="job location"
            handleChange={handleChange}
          />
          <FormRowSelect
            name="status"
            value={status}
            list={statusList}
            handleChange={handleChange}
          />
          <FormRowSelect
            name="jobType"
            value={jobType}
            labelText="job type"
            list={jobTypesList}
            handleChange={handleChange}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              disabled={isLoading}
              onClick={() => setJobData(initialState)}
            >
              {isLoading ? 'loading...' : 'clear'}
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              disabled={isLoading}
            >
              {isLoading ? 'loading...' : 'submit'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
