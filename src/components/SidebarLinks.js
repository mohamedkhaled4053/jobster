import { NavLink } from 'react-router-dom';
import links from '../utils/links';

export default function SidebarLinks({ toggleSidebar }) {
  return (
    <div className="nav-links">
      {links.map(({ id, text, path, icon }) => (
        <NavLink
          key={id}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          onClick={toggleSidebar}
          to={path}
          end
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      ))}
    </div>
  );
}
