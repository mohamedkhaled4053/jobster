import Wrapper from '../assets/wrappers/SmallSidebar';
import SidebarLinks from './SidebarLinks';
import { FaTimes } from 'react-icons/fa';
import Logo from './logo';

export default function SmallSidebar(params) {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="content">
          <button className="close-btn">
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <SidebarLinks />
        </div>
      </div>
    </Wrapper>
  );
}
