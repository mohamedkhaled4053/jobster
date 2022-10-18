import Wrapper from '../assets/wrappers/BigSidebar';
import SidebarLinks from './SidebarLinks';

export default function BigSidebar(params) {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <header>
            <img
              src="/static/media/logo.810e48648353f298a3ea441b8ca95f4f.svg"
              alt="jobster logo"
              className="logo"
            />
          </header>
          <SidebarLinks />
        </div>
      </div>
    </Wrapper>
  );
}
