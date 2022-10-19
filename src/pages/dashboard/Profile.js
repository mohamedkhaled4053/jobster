import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow } from '../../components';
import { userRequest } from '../../features/userSlice';

export default function Profile() {
  let { user, isLoading } = useSelector((store) => store.user);
  let dispatch = useDispatch();

  // local state
  let [userData, setUserData] = useState({
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    location: user.location,
  });
  // destructure local state to make it easy to write it
  let { name, lastName, email, location } = userData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // check if user provided all required data
    if (!name || !lastName || !email || !location) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    dispatch(
      userRequest({
        user: { name, lastName, email, location },
        process: 'updateUser',
        message: 'user updated',
      })
    );
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            name="name"
            type="text"
            value={name}
            handleChange={handleChange}
          />
          <FormRow
            name="lastName"
            type="text"
            value={lastName}
            labelText="last name"
            handleChange={handleChange}
          />
          <FormRow
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
          />
          <FormRow
            name="location"
            type="text"
            value={location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'loading...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
