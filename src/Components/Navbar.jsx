import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
  return (
    <nav className="navigation">
      <button>
        <HashLink smooth to="#about-me">About Me</HashLink>
      </button>
      <button>
        <HashLink smooth to="#skill-tree">Skill Tree</HashLink>
      </button>
      <button>
        <HashLink smooth to="#projects">Projects</HashLink>
      </button>
    </nav>
  );
};
