import Wrapper from '../assets/wrappers/SmallSidebar';
import SidebarLinks from './SidebarLinks';

export default function SmallSidebar(params) {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="content">
          <button className="close-btn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 352 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg>
          </button>
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
