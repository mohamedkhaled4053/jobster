import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/BigSidebar';
import Logo from './logo';
import SidebarLinks from './SidebarLinks';

export default function BigSidebar() {
  let { isSidebarOpen } = useSelector((store) => store.dashboard);

  return (
    <Wrapper>
      <div className={`sidebar-container ${isSidebarOpen && 'show-sidebar'}`}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <SidebarLinks />
        </div>
      </div>
    </Wrapper>
  );
}
