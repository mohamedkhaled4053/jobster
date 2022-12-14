import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow, Btn, FormRowSelect } from '../../components';
import { loadingOn } from '../../features/allJobsSlice';
import {
  addJob,
  cancelEdit,
  changeJobData,
  clearJobData,
  editJob,
} from '../../features/newJobSlice';

export default function AddJob() {
  // get data from store
  let {
    user: { user },
    newJob: { isLoading, position, company, jobLocation, status, jobType, isEdit, editId },
  } = useSelector((store) => store);

  // define variables
  let jobTypesList = ['full-time', 'part-time', 'remote', 'internship'];
  let statusList = ['pending', 'interview', 'declined'];
  let dispatch = useDispatch();

  // helper funtions
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(changeJobData({ name, value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // check if user provided all required data
    if (!position || !company || !jobLocation || !status || !jobType) {
      toast.error('please provide all required data');
      return;
    }
    // edit a job or add a new job
    if (isEdit) {
      // edit job
      dispatch(
        editJob({
          id: editId,
          job: { position, company, jobLocation, status, jobType },
        })
      );
      // cancel edit window
      dispatch(cancelEdit());
      // loading while updating
      dispatch(loadingOn());
    } else {
      dispatch(addJob({ position, company, jobLocation, status, jobType }));
    }

    clearInputs();
  }

  // clear inputs and return location to use location
  function clearInputs() {
    dispatch(clearJobData());
    dispatch(changeJobData({ name: 'jobLocation', value: user.location }));
  }

  // effects
  useEffect(() => {

      clearInputs();

    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEdit ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          <FormRow name="position" type="text" value={position} handleChange={handleChange} />
          <FormRow name="company" type="text" value={company} handleChange={handleChange} />
          <FormRow
            name="jobLocation"
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
            <Btn name="clear" isLoading={isLoading} handleClick={clearInputs} />
            <Btn name="submit" isLoading={isLoading} handleClick={handleSubmit} />
            {isEdit && (
              <Btn name="cancel" isLoading={isLoading} handleClick={() => dispatch(cancelEdit())} />
            )}
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
