import { Link } from "react-router-dom";
import GitLogo from "../assets/github-mark-white.svg";
import LinkedinLogo from "../assets/InBug-White.png";

export const Links = () => {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/artemis-wilkinson-61a271340">
        <img
          className="linkedin"
          src={LinkedinLogo}
          alt="LinkedIn logo"
          width={"55"}
          height={"55"}
        />
      </a>

      <Link to={"https://github.com/artiechokeheart"} target="_blank">
        <img
          className="github"
          src={GitLogo}
          alt="github logo"
          width={"55"}
          height={"55"}
        />
      </Link>
    </div>
  );
};
