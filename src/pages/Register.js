import { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo } from '../components';
import FormRow from '../components/FormRow';

export default function Register() {
  let initialState = {
    name: '',
    email: '',
    password: '',
    isNewUser: false,
  };

  let [values, setValues] = useState(initialState);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  return (
    <Wrapper className="full-page">
      <form className="form">
        <Logo />
        <h3>{values.isNewUser ? 'Register' : 'Login'}</h3>

        {values.isNewUser && (
          <FormRow
            name="name"
            type="text"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="button" className="btn btn-block btn-hipster">
          demo app
        </button>
        <p>
          {values.isNewUser ? 'Already a member?' : 'Not a member yet?'}

          <button
            type="button"
            className="member-btn"
            onClick={() =>
              setValues({ ...values, isNewUser: !values.isNewUser })
            }
          >
            {values.isNewUser ? 'Login' : 'Register'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
