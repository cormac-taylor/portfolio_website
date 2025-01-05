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
          date="January, 2024 - Present"
          desc="Algorithmic Complexity"
        />
        <Experience
          company_logo="/images/jostrong_logo.svg"
          title="Lead Developer"
          location="Hoboken, NJ"
          date="August, 2024 - Present"
          desc="Web Development"
        />
        <Experience
          company_logo="/images/td_securities_logo.svg"
          title="Software Engineer"
          location="New York, NY"
          date="June, 2024 - August, 2024"
          desc="Backend Engineering"
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
        <p>{title}</p>
        <div>
          <span>{location}</span>
          <br />
          <span>{date}</span>
        </div>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default Experiences;
