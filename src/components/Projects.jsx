import "./styles/Projects.css";
import PropTypes from "prop-types";
import { ExternalLink } from "./index.js";

Projects.propTypes = {
  setSkillSubset: PropTypes.func.isRequired,
};

function Projects({ setSkillSubset }) {
  return (
    <>
      <div id="projects_div">
        <h2 id="projects_title">Recent Projects</h2>
        <p id="projects_desc">
          Hover over a project to see the tools involved.
        </p>
        <Project
          setToSubset={() => setSkillSubset("portfolio_website")}
          resetSubset={() => setSkillSubset(null)}
          src="/images/projects/portfolio_website.png"
          alt="Screen shot of home page for this website"
          title="Portfolio Website"
          date="January 2025"
          desc="You're admiring it right now! It's a collection of some of the best things I've done, formatted in a way that's easy for you to parse."
          youtube_url="https://youtu.be/2w1KS-3VzIU"
          github_url="https://github.com/cormac-taylor/personal_website"
        />
        <Project
          setToSubset={() => setSkillSubset("variable_neural_network")}
          resetSubset={() => setSkillSubset(null)}
          src="/images/projects/variable_neural_network.png"
          alt="Image of a neural network diagram"
          title="Variable Neural Network"
          date="December 2024"
          desc="A simple customizable neural network made from scratch using ReLU and gradient descent for classification."
          youtube_url="https://youtu.be/WrUIKdE7VhM"
          github_url="https://github.com/cormac-taylor/neural_network"
        />
        <Project
          setToSubset={() => setSkillSubset("full_stack_web_app")}
          resetSubset={() => setSkillSubset(null)}
          src="/images/projects/full_stack_web_app.png"
          alt="Screen shot of home page for the Full Stack Web App"
          title="Full Stack Web App"
          date="December 2024"
          desc="A full-stack app allowing users to borrow nearby board games, read reviews of games and users, and check out upcoming meetups!"
          youtube_url="https://youtu.be/wPT4nlQ146o"
          github_url="https://github.com/cormac-taylor/cs546_group22_final_project"
        />
        <Project
          setToSubset={() => setSkillSubset("mini_chat_app")}
          resetSubset={() => setSkillSubset(null)}
          src="/images/projects/mini_chat_room.png"
          alt="no image"
          title="Mini Chat App"
          date="November 2024"
          desc="A simple chat room app enabling multiple users to communicate across various rooms, using a command-line-like interface."
          youtube_url="https://youtu.be/7dskLY4Oli4"
          github_url="https://github.com/cormac-taylor/chat_app"
        />
        <Project
          setToSubset={() => setSkillSubset("crud_api_server")}
          resetSubset={() => setSkillSubset(null)}
          src="/images/projects/crud_api_server.png"
          alt="no image"
          title="CRUD API Server"
          date="October 2024"
          desc="A simple CRUD (Create, Read, Update, and Delete) API server for managing sport teams and games."
          youtube_url="https://youtu.be/stBiSaHK8WU"
          github_url="https://github.com/cormac-taylor/sports_team_API_server"
        />
      </div>
    </>
  );
}

Project.propTypes = {
  setToSubset: PropTypes.func.isRequired,
  resetSubset: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  youtube_url: PropTypes.string.isRequired,
  github_url: PropTypes.string.isRequired,
};

function Project({
  setToSubset,
  resetSubset,
  src,
  alt,
  title,
  date,
  desc,
  youtube_url,
  github_url,
}) {
  return (
    <>
      <div
        className="project"
        onMouseOver={setToSubset}
        onMouseOut={resetSubset}
      >
        <div className="thumbnail">
          <img src={src} alt={alt} />
        </div>
        <div className="project_content">
          <h3>{title}</h3>
          <span>{date}</span>
          <p>{desc}</p>
        </div>
        <div className="project_container">
          <div className="project_box center">
            <ExternalLink url={youtube_url} txt="Walkthrough" />
          </div>
          <div className="project_box center divider">
            <ExternalLink url={github_url} txt="Source Code" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
