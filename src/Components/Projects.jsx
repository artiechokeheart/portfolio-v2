import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-heading">
        <h3>Projects</h3>
        <p>Here are some of my projects</p>
      </div>
      <div className="project-container">
        <div className="project-intro">
          <h2>NC News</h2>
          <div className="project-status">JOB COMPLETE</div>
        </div>
        <div className="project-tools">
          <div className="tool">Node.js</div>
          <div className="tool">PSQL</div>
          <div className="tool">JavaScript</div>
          <div className="tool">Jest</div>
          <div className="tool">React</div>
          <div className="tool">CSS</div>
          <div className="tool">HTML</div>
          <div className="tool">Netlify</div>
          <div className="tool">Render</div>
          {/* <div className="tool"></div> */}
        </div>
        <div className="project-description">
          <p>
            A solo project done as part of my Northcoders course. The deployed
            website is the culmination of the RESTful API I created for the
            backend and the frontend is built using React.
          </p>
          <p>
            The aim was to create a Reddit-like website using the skills we
            learned during the course.
          </p>
          <p>For the design, I took inspiration from early internet forums.</p>
        </div>
        <div className="project-images">
          <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/46/b0/t-i-1648723616-blank-website-design-template_ver_1.jpeg" />
        </div>
        <div className="project-links">
          <Link
            to={"https://artemis-nc-news.netlify.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend
          </Link>
          <Link
            to={"https://artemis-be-news.onrender.com/api"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend
          </Link>
        </div>
      </div>
    </section>
  );
};
