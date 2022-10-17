import { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo } from '../components';
import FormRow from '../components/FormRow';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/userSlice';

let initialState = {
  name: '',
  email: '',
  password: '',
  isNewUser: true,
};

export default function Register() {
  let [values, setValues] = useState(initialState);
  let dispatch = useDispatch();

  let { isLoading } = useSelector((store) => store.user);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let { name, email, password, isNewUser } = values;
    if (!email || !password || (isNewUser && !name)) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    if (isNewUser) {
      dispatch(registerUser({ name, email, password }));
      return;
    }
    dispatch(loginUser({ email, password }));
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

        <button type="submit" className="btn btn-block" onClick={handleSubmit}>
          {isLoading ? 'loading...' : 'submit'}
        </button>
        <button type="button" className="btn btn-block btn-hipster">
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
