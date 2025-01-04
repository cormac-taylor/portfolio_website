import PropTypes from "prop-types";
import "./styles/Projects.css";

function Projects() {
  return (
    <>
      <div id="projects_div">
        <h2>Projects</h2>
        <Project
          title="Proj_1"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor"
        />
        <Project
          title="Proj_2"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor"
        />
        <Project
          title="Proj_3"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor"
        />
        <Project
          title="Proj_4"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor"
        />
        <Project
          title="Proj_5"
          desc="Desc."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor"
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
          <a href={github_url} target="_blank">GitHub</a>
        </div>
      </div>
    </>
  );
}

export default Projects;
