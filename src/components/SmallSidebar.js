import Wrapper from '../assets/wrappers/SmallSidebar';
import SidebarLinks from './SidebarLinks';
import { FaTimes } from 'react-icons/fa';
import Logo from './logo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/dashboardSlice';

export default function SmallSidebar() {
  let { isSidebarOpen } = useSelector((store) => store.dashboard);
  let dispatch = useDispatch();

  return (
    <Wrapper>
      {/* here I show the small sidebar when isSidebarOpen == false I made this cause I want to show the big sidebar by default so I would let isSidebarOpen == true by default but I want to hide the small sidebar by default*/}
      <div className={`sidebar-container ${!isSidebarOpen && 'show-sidebar'}`}>
        <div className="content">
          <button
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <SidebarLinks toggleSidebar={() => dispatch(toggleSidebar())} />
        </div>
      </div>
    </Wrapper>
  );
}
