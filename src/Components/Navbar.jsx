import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
  return (
    <nav className="navigation">
      <HashLink smooth to="#about-me" className="nav-link button-style-link">
        About Me
      </HashLink>
      <HashLink smooth to="#skill-tree" className="nav-link button-style-link">Skill Tree</HashLink>
      <HashLink smooth to="#projects" className="nav-link button-style-link">
        Projects
      </HashLink>
    </nav>
  );
};
