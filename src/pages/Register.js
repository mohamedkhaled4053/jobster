import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo } from '../components';
import FormRow from '../components/FormRow';

export default function Register() {
  return (
    <Wrapper className="full-page">
      <form className="form">
        <Logo />
        <h3>Register</h3>

        <FormRow name="name" type="text" value="" />
        <FormRow name="email" type="email" value="" />
        <FormRow name="password" type="password" value="" />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="button" className="btn btn-block btn-hipster">
          demo app
        </button>
        <p>
          Already a member?
          <button type="button" className="member-btn">
            Login
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
