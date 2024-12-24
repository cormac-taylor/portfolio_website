import "./styles/About.css";
import { getAge } from "../utilities/index.js";

const BIRTHDAY = "4/1/2004";

function About() {
  return (
    <>
      <div className="about_container">
        <div className="about_box left bottom">
          <img src="/images/portrait_b&w.png" alt="Portrait of Cormac Taylor" />
        </div>
        <div className="about_box right right_box">
          <h1>a {getAge(new Date(BIRTHDAY))} year old studing cs</h1>
        </div>
      </div>
    </>
  );
}

export default About;
