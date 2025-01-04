import "./styles/Experiences.css";

function Experiences() {
  return (
    <>
      <div id="experiences_div">
        <h2>Experience</h2>
        <Experience />
        <Experience />
        <Experience />
        <Experience />
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <div className="experience">
        <h3>Exp. Title</h3>
        <p>Desc.</p>
      </div>
    </>
  );
}

export default Experiences;
