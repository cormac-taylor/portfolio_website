import PropTypes from "prop-types";
import "./styles/Projects.css";

function Projects() {
  return (
    <>
      <div id="projects_div">
        <h2>Projects</h2>
        <Project
          title="Portfolio Website"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/personal_website"
        />
        <Project
          title="Neural Network"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/neural_network"
        />
        <Project
          title="Full Stack Web App"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/cs546_group22_final_project"
        />
        <Project
          title="Mini Chat App"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/chat_app"
        />
        <Project
          title="CRUD API Server"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/sports_team_API_server"
        />
        <Project
          title="Multiplayer Trivia Game"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/online_multiplayer_trivia_game"
        />
        <Project
          title="Mini Unix Shell"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/mini_shell"
        />
        <Project
          title="CPU and Assembler"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/custom_cpu_and_assembler"
        />
      </div>
    </>
  );
}
// https://www.youtube.com/@cormac-taylor
Project.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  youtube_url: PropTypes.string.isRequired,
  github_url: PropTypes.string.isRequired,
};

function Project({ title, desc, youtube_url, github_url }) {
  return (
    <>
      <div className="project">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div>
          <a href={youtube_url} target="_blank">
            YouTube
          </a>
          <br />
          <a href={github_url} target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
