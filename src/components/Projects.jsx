import PropTypes from "prop-types";
import "./styles/Projects.css";

function Projects() {
  return (
    <>
      <div id="projects_div">
        <h2 id="projects_title">Projects</h2>
        <p id="projects_desc">
          Hover over a project to see the related skills.
        </p>
        <Project
          title="Portfolio Website"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/personal_website"
        />
        <Project
          title="Neural Network"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/neural_network"
        />
        <Project
          title="Full Stack Web App"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/cs546_group22_final_project"
        />
        <Project
          title="Mini Chat App"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/chat_app"
        />
        <Project
          title="CRUD API Server"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/sports_team_API_server"
        />
        <Project
          title="Multiplayer Trivia"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/online_multiplayer_trivia_game"
        />
        <Project
          title="Mini Unix Shell"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/mini_shell"
        />
        <Project
          title="CPU and Assembler"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
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
        <div className="project_container">
          <div className="project_box center">
            <a href={youtube_url} target="_blank" className="proj_link">
              Walkthrough
              <img
                src="/images/new_tab.svg"
                alt="New window icon by Grand Iconic - Flaticon"
                className="new_tab_icon"
              />
            </a>
          </div>
          <div className="project_box center divider">
            <a href={github_url} target="_blank" className="proj_link">
              Source Code
              <img
                src="/images/new_tab.svg"
                alt="New window icon by Grand Iconic - Flaticon"
                className="new_tab_icon"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
