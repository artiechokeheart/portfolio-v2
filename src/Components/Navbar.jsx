import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
  return (
    <nav className="navigation">
       <HashLink smooth to="#about-me">
      <button>
       About Me
      </button>
       </HashLink>
     
        <HashLink smooth to="#skill-tree"><button>Skill Tree</button></HashLink>
        <HashLink smooth to="#projects">
      <button>
        Projects
      </button>
        </HashLink>
    </nav>
  );
};
