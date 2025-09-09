import GitLogo from "../assets/github-mark-white.svg";
import LinkedinLogo from "../assets/InBug-White.png";
import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <div className="socials">
      <button>
        <img
          src={GitLogo}
          alt="github logo"
          width={"85"}
          height={"85"}
          href="https://github.com/artiechokeheart"
        />
      </button>
      {/* <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">
        Click to open HereWeCode (new tab)
      </Link> */}
      <button>
        <img
          src={LinkedinLogo}
          alt="github logo"
          href="https://github.com/artiechokeheart"
          width={"85"}
          height={"85"}
        />
      </button>
    </div>
  );
};
