import PropTypes from "prop-types";
import "./styles/Experiences.css";

function Experiences() {
  return (
    <>
      <div id="experiences_div">
        <h2 id="experiences_title">Experience</h2>
        <p id="experiences_desc">
          Hover over an experience to see the tools involved.
        </p>
        <Experience
          company_logo="/images/experiences/stevens_logo.svg"
          title="Course Assistant"
          location="Hoboken, NJ"
          date="January 2024 - Present"
          desc="Proctoring exams and grading assignments on topics such as Turing Machines, computability, complexity classes, and reductions."
        />
        <Experience
          company_logo="/images/experiences/jostrong_logo.svg"
          title="Lead Developer"
          location="Hoboken, NJ"
          date="August 2024 - Present"
          desc="Developing a full-stack CRM-style web app for a fitness coach to improve efficiency and automate processes."
        />
        <Experience
          company_logo="/images/experiences/td_securities_logo.svg"
          title="Software Engineer Intern"
          location="New York, NY"
          date="June 2024 - August 2024"
          desc="Optimized trade surveillance systems and enterprise processes while creating comprehensive documentation."
        />
      </div>
    </>
  );
}

Experience.propTypes = {
  company_logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

function Experience({ company_logo, title, location, date, desc }) {
  return (
    <>
      <div className="experience">
        <img src={company_logo} alt="Stevens Logo" />
        <h3>{title}</h3>
        <div className="experience_container">
          <div className="experience_box left">
            <span>{location}</span>
          </div>
          <div className="experience_box right">
            <span>{date}</span>
          </div>
        </div>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default Experiences;
