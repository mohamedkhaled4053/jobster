import { NavLink } from 'react-router-dom';
import links from '../utils/links';

export default function SidebarLinks() {
  return (
    <div className="nav-links">
      {links.map(({ id, text, path, icon }) => (
        <NavLink
          key={id}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          to={path}
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      ))}
    </div>
  );
}
