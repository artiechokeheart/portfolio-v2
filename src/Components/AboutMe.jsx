import { Links } from "../Components/Links";

export const AboutMe = () => {
  return (
    <div className="about-me-section">
      <div className="about-me-headings">
        <h2>Junior Developer</h2>
        <h3>Full Stack</h3>
      </div>
      <div className="about-me">
        <p className="about-me-paragraph">
          Since graduating from Northcoders in March 2025, I have been looking
          for my first paid job as a Junior Developer. In the meantime, I have
          been working as an intern at Digital Edge (where I have been learning
          how to work in a commercial envrioment along side clients and other
          developers), working on my portfolio, and keeping my coding skills
          sharp as well as up-to-date.
        </p>
      </div>
      <Links />
    </div>
  );
};
