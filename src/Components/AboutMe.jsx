import { Link } from "react-router-dom";
import { Links } from "../Components/Links";
import myFace from "../assets/images/profilePicture.jpg";

export const AboutMe = () => {
  return (
    <div className="about-me-section" id="about-me">
      <div className="about-me-intro">
          <div className="about-me-headings">
            <h2>
              Full Stack
              Junior Developer
            </h2>
          </div>

        <div className="about-me-intro-text">
          <img className="about-me-image" src={myFace} alt={"My Face"} />
          <div className="about-me-intro-paragraphs">
            <p className="about-me-paragraph">
              Hi there! If you haven't guessed this already, I am Artemis. (Yes,
              that is a really cool name, thank you!).
              <br></br>
            </p>
            <p className="about-me-paragraph">
              It is often hard to summarise yourself, but if I had to, I would say:
              <ul className="about-me-list">
                <li>I am creative.</li>
                <li>I enjoy a challenge.</li>
                <li>I am someone who loves to learn.</li>
              </ul>
            </p>
        <p className="about-me-paragraph">
          I can be quite stubborn about learning actually and I will keep trying
          to learn something even if it feels like I am never going to understand
          it. By the end of the Northcoders' bootcamp, I was still struggling to
          use a grid or a flexbox (despite Kev's best efforts). Need an example?
          Click{" "}
          <Link
            to="https://portfolio-artiechokehearts-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </Link>{" "}
          to see the first portfolio I made. For portfolio v2, I have used a
          combination of both. And it looks pretty good if I do say so myself. It
          isn't "perfect" and I sometimes write 'align-content' instead of
          'align-items', but constant learning and development is all part of the journey. 
        </p>
          </div>
        </div>
      </div>
      <div className="about-me">
        <p className="about-me-paragraph">
          Since graduating from Northcoders in March 2025, I have been looking for
          my first paid job as a Junior Developer. In the meantime, I have been
          working as an intern at Digital Edge (where I have been learning how to
          work in a commercial envrioment along side clients and other
          developers), working on my portfolio, and keeping my coding skills
          sharp. I have also grown vegetables for the first time, started areial
          gymnastics, fostered a kitten, painted a mural, and planted a edible
hedge in my front garden.
        </p>
      </div>
      <Links />
    </div>
  );
};
