import { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow } from '../components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerAndLogin } from '../features/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

let initialState = {
  name: '',
  email: '',
  password: '',
  isNewUser: false,
};

export default function Register() {
  let [values, setValues] = useState(initialState);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { isLoading, user } = useSelector((store) => store.user);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  useEffect(() => {
    if (user) {
      navigate('/');
    }
    //eslint-disable-next-line
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    let { name, email, password, isNewUser } = values;
    if (!email || !password || (isNewUser && !name)) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    if (isNewUser) {
      dispatch(
        registerAndLogin({
          user: { name, email, password },
          process: 'register',
          message: 'Hello There',
        })
      );
      return;
    }
    dispatch(
      registerAndLogin({
        user: { email, password },
        process: 'login',
        message: 'Welcome Back',
      })
    );
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
