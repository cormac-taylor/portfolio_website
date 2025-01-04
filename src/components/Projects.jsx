import "./styles/Projects.css";

function Projects() {
  return (
    <>
      <div id="projects_div">
        <h2>Projects</h2>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </>
  );
}

function Project() {
  return (
    <>
      <div className="project">
        <h3>Proj. Title</h3>
        <p>Desc.</p>
      </div>
    </>
  );
}

export default Projects;
