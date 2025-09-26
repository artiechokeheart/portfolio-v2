import { Link } from "react-router-dom";
import news from "../assets/images/nc-news.png"
import wordslinger from "../assets/images/wordslinger-login.png"
import business from "../assets/images/business360.png"


export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <h2>Projects</h2>
      </div>
        {/* NC News */}
        <div className="project-container">
          <div className="project-title">
            <h2>NC News</h2>
          </div>
          <div className="project-status">
            <h3>MISSION STATUS</h3>
            Job Complete
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
          </div>
          <div className="project-body">
            <div className="project-description">
            <div className="project-links">
            <button>
            <Link
              to="https://artemis-nc-news.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              >
              Frontend
            </Link>
              </button>

              <button>
            <Link
              to="https://artemis-be-news.onrender.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend
            </Link>
              </button>
          </div>
              <p>
                A solo project done as part of my Northcoders course. The
                deployed website is the culmination of the RESTful API I created
                for the backend and the frontend is built using React.
              </p>
              <p>
                The aim was to create a Reddit-like website using the skills we
                learned during the course.
              </p>
              <p>
                For the design, I took inspiration from early internet forums.
              </p>
            </div>

            <div className="project-images">
              <img
                className="project-image"
                src={news}
                alt="NC News screenshot"
              />
            </div>
          </div>

        </div>

        {/* Wordslinger */}
        <div className="project-container">
          <div className="project-title">
            <h2>Wordslinger</h2>
          </div>
          <div className="project-status">
            <h3>MISSION STATUS</h3> 
            Job Complete <br />
            <h3>BONUS MISSION AVALIABLE </h3>
            Restyle 
            <br />
           In Progress
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
          </div>

          <div className="project-body">
            <div className="project-description">
              <div className="project-links">
            <button>

            <Link
              to="https://wordslinger.onrender.com/api/users"
              target="_blank"
              rel="noopener noreferrer"
              >
              Frontend
            </Link>
              </button>
              <button>

            <Link
              to="https://a-wordslinger.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend
            </Link>
              </button>
              <button>

            <Link
              to="https://youtu.be/_sw5hRN_kWo?si=jdK0aczJmKKmoqkL&t=22"
              target="_blank"
              rel="noopener noreferrer"
              >
              Demo Video
            </Link>
              </button>
          </div>
              <p>
                A group project done as part of my Northcoders course. The
                deployed application is a Western-themed language learning game
                that works on mobile and in browser; there is a RESTful API for
                the backend and it uses React Native for the frontend.
              </p>
              <p>
                The app gamifies language learning through flashcards and spaced
                repetition. Users can learn French, German and Spanish while
                having fun and even play against others in our multiplayer mode.
              </p>
            </div>

            <div className="project-images">
              <img
                className="project-image"
                src={wordslinger}
                alt="Wordslinger screenshot"
              />
            </div>
          </div>

          
        </div>

        {/* 360 Business Connections */}
        <div className="project-container">
          <div className="project-title">
            <h2>360 Business Connections</h2>
          </div>
          <div className="project-status">
           <h3>MISSION STATUS</h3> <br />
            In Progress
          </div>

          <div className="project-tools">
            <div className="tool">Wix SDK</div>
            <div className="tool">Wix Studio</div>
            <div className="tool">Wix IDE</div>
          </div>

          <div className="project-body">
            <div className="project-description">
                        <div className="project-links">
            <button>

            <Link
              to="https://artemisswilkinson.wixstudio.com/360business"
              target="_blank"
              rel="noopener noreferrer"
              >
              Website
            </Link>
              </button>
          </div>
              <p>
                A small solo project done for my internship at Digital Edge.
              </p>
              <p>
                While Wix is often seen as a low-code or no-code solution to
                website development, it doesn't have to be. Wix uses JavaScript,
                Node.js, and MongoDB for its backend, as well as a React-based
                framework for its frontend. My experience using it has shown me
                the only time I “drag and drop” is for design and to get
                elements onto the page fast.
              </p>
              <p>
                For this website, I created a basic site that searches, filters
                and sorts businesses. There is a form to add new businesses with
                full validation that is fully coded within Wix Studio/IDE using the Wix SDK.
              </p>
            </div>

            <div className="project-images">
              <img
                className="project-image"
                src={business}
                alt="360 Business Connections screenshot"
              />
            </div>
          </div>


        </div>

        {/* Blank Template */}
        {/* <div className="project-container">
    <div className="project-title"><h2>Project Title</h2></div>
    <div className="project-status">
      <h3>MISSION STATUS</h3> <br />
      Status Here
    </div>

    <div className="project-tools">
      <div className="tool">Tool One</div>
      <div className="tool">Tool Two</div>
    </div>

    <div className="project-body">
      <div className="project-description">
        <p>Short intro paragraph about the project goal and scope.</p>
        <p>Key technical details or interesting implementation notes.</p>
        <p>Anything else worth highlighting (performance, UX, etc.).</p>
      </div>

      <div className="project-images">
        <img src="https://via.placeholder.com/800x500" alt="Project screenshot" />
      </div>
    </div>

    <div className="project-links">
      <Link to="https://example.com" target="_blank" rel="noopener noreferrer">
        Live Site
      </Link>
      <Link to="https://github.com/example" target="_blank" rel="noopener noreferrer">
        Source
      </Link>
    </div>
  </div> */}
      </section>

  );
};
