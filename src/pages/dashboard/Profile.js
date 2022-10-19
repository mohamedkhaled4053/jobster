import { useState } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow } from '../../components';

export default function Profile() {
  let user = useSelector((store) => store.user.user);

  let [userData, setUserData] = useState({
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    location: user.location,
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  let { name, lastName, email, location } = userData;
  return (
    <Wrapper>
      <form className="form">
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
          <button type="submit" className="btn btn-block">
            save changes
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
