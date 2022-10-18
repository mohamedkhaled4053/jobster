import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './logo';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/dashboardSlice';

export default function Navbar() {
  let dispatch = useDispatch()

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={()=>dispatch(toggleSidebar())}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn">
            <FaUserCircle />
            test user
            <FaCaretDown />
          </button>
          <div className="dropdown">
            <button type="button" className="dropdown-btn">
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
