import PropTypes from "prop-types";
import "./styles/Experiences.css";

function Experiences() {
  return (
    <>
      <div id="experiences_div">
        <h2>Experience</h2>
        <Experience
          company_logo="/images/stevens_logo.svg"
          title="Course Assistant"
          location="Hoboken, NJ"
          date="January 2024 - Present"
          desc="Proctoring exams and grading assignments on topics such as Turing Machines, computability, complexity classes, and reductions."
          // desc="Proctoring exams. Grading assignments and exams related to Turing Machines, computability, complexity classes, and reductions."
        />
        <Experience
          company_logo="/images/jostrong_logo.svg"
          title="Lead Developer"
          location="Hoboken, NJ"
          date="August 2024 - Present"
          desc="Developing a full-stack CRM-style web app for a fitness coach to improve efficiency and automate processes."
        />
        <Experience
          company_logo="/images/td_securities_logo.svg"
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
          <span className="experience_box">{location}</span>
          <span className="experience_box">{date}</span>
        </div>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default Experiences;
