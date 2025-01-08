import "./styles/Skills.css";
import Info from "./Info";

function Skills() {
  return (
    <>
      <div>
        <div id="skills_div">
          <div>
            <h2>Tool Belt</h2>
          </div>
        </div>
        <Info
          infoTitle="Understanding the Background"
          infoDesc="It's a 3D graph of nodes and vertices. It visualizes the tools, languages, and software I've worked with. Each node represents an image of a tool or technology, and the edges connecting them illustrate how they've connected in my life."
        />
      </div>
    </>
  );
}

export default Skills;
