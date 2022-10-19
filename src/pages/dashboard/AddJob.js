import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow } from '../../components';
import FormRowSelect from '../../components/FormRowSelect';

export default function AddJob() {
  return (
    <Wrapper>
      <form className="form">
        <h3>add job</h3>
        <div className="form-center">
          <FormRow name="position" type="text" value="placeholder" />
          <FormRow name="company" type="text" value="placeholder" />
          <FormRow
            name="position"
            type="text"
            value="placeholder"
            labelText="job location"
          />
          <FormRowSelect name='status' value='love'/>
          <FormRowSelect name='jobType' value='love' labelText='job type'/>
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
