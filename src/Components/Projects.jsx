import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
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
      <div className="project-container">
        <div className="project-intro">
          <h2>Wordslinger</h2>
          <div className="project-status">JOB COMPLETE</div>
        </div>
        <div className="project-tools">
          <div className="tool">Node.js</div>
          <div className="tool">PSQL</div>
          <div className="tool">TypeScript</div>
          <div className="tool">Jest</div>
          <div className="tool">Websocket.io</div>
          <div className="tool">React Native</div>
          <div className="tool">CSS</div>
          <div className="tool">HTML</div>
          <div className="tool">Netlify</div>
          <div className="tool">Render</div>
          {/* <div className="tool"></div> */}
        </div>
        <div className="project-description">
          <p>
            A group project done as part of my Northcoders course. The deployed
            application is a Western-themed language learning game that works on
            mobile and in browser; there is a RESTFul API for the backend and it
            uses React Native for the frontend.
          </p>
          <p>
            The app gamifies leanguage learning through flashcards and spaced
            reptition. Users can learn French, German and Spanish while having
            fun and even play against others in our multiplayer mode.
          </p>
        </div>
        <div className="project-images">
          <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/46/b0/t-i-1648723616-blank-website-design-template_ver_1.jpeg" />
        </div>
        <div className="project-links">
          <Link
            to={"https://wordslinger.netlify.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend
          </Link>
          <Link
            to={"https://wordslingerserver.onrender.com/api/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend
          </Link>
          <Link
            to={"https://youtu.be/_sw5hRN_kWo?si=jdK0aczJmKKmoqkL&t=22"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo Video
          </Link>
        </div>
      </div>
      <div className="project-container">
        <div className="project-intro">
          <h2>360 Business Connections</h2>
          <div className="project-status">IN PROGRESS</div>
        </div>
        <div className="project-tools">
          <div className="tool">Wix Studio</div>
          <div className="tool">Wix SDK</div>
          {/* <div className="tool"></div> */}
        </div>
        <div className="project-description">
          <p>A small solo project done for my internship at Digital Edge.</p>
          <p>
            While Wix is often seen as a low-code or no code solution to website
            development, it doesn't have to be. Wix uses JavaScript. Node.js,
            and MongoDB for its backend, as well as a React-based framework for
            its frontend. My experience using it has shown me the only time I
            "drag and drop" is for design and to get elements onto the page
            fast.
          </p>
          <p>
            For this website, I created a basic website that searches, filters
            and sorts businesses. There is a form to add new businesses with
            full validation that is fully coded using the Wix SDK.
          </p>
        </div>
        <div className="project-images">
          <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/46/b0/t-i-1648723616-blank-website-design-template_ver_1.jpeg" />
        </div>
        <div className="project-links">
          <Link
            to={"https://artemisswilkinson.wixstudio.com/360business"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </Link>
        </div>
      </div>
    </section>
  );
};
