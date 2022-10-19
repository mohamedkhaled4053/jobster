import { useSelector } from 'react-redux';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow } from '../../components';

export default function Profile() {
  let { name, email, lastName, location } = useSelector((store) => store.user.user);

  return (
    <Wrapper>
      <form class="form">
        <h3>profile</h3>
        <div class="form-center">
          <FormRow name='name' type='text' value={name}/>
          <FormRow name='lastName' type='text' value={lastName} labelText='last name'/>
          <FormRow name='email' type='email' value={email}/>
          <FormRow name='location' type='text' value={location}/>
          <button type="submit" class="btn btn-block">
            save changes
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
