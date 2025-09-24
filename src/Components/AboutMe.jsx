import { Links } from "../Components/Links";
import myFace from "../assets/my_face.jpg";

export const AboutMe = () => {
  return (
    <div className="about-me-section" id="about-me">
      <div className="about-me-header">
        <div className="about-me-headings">
          <h2>Junior Developer</h2>
          <h3>Full Stack</h3>
        </div>
        <img src={myFace} alt={"My Face"} width={250} height={250} />
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
