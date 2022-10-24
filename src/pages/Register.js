import { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow } from '../components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { userRequest } from '../features/userSlice';
import { Navigate } from 'react-router-dom';

// this state would only be needed in Register page
let initialState = {
  name: '',
  email: '',
  password: '',
  isNewUser: false,
};

export default function Register() {
  // needed variables
  let [values, setValues] = useState(initialState);
  let dispatch = useDispatch();
  let { isLoading, user } = useSelector((store) => store.user);

  // helper functions
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let { name, email, password, isNewUser } = values;
    // check if user provided all required data
    if (!email || !password || (isNewUser && !name)) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    // if newUser then register
    if (isNewUser) {
      dispatch(
        userRequest({
          user: { name, email, password },
          process: 'register',
          message: 'Hello There',
        })
      );
      return;
    }
    // if current user then login
    dispatch(
      userRequest({
        user: { email, password },
        process: 'login',
        message: 'Welcome Back',
      })
    );
  }

  function loginAsTestUser() {
    dispatch(
      userRequest({
        user: { email: 'testUser@test.com', password: 'secret' },
        process: 'login',
        message: 'Welcome Back',
      })
    );
  }

  // if user loged in then go to dashboard
  if (user) {
    return <Navigate to="/" />;
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

        <button
          type="submit"
          className="btn btn-block"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'loading...' : 'submit'}
        </button>
        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={loginAsTestUser}
        >
          {isLoading ? 'loading...' : 'demo app'}
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
