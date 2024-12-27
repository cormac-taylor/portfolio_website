import "./styles/About.css";
import { getAge } from "../utilities/index.js";
import { Info, Spipa } from "./index.js";

const BIRTHDAY = "4/13/2004";

function About() {
  return (
    <>
      <Spipa />
      <div className="about_container">
        <div className="about_box left bottom">
          <img src="/images/portrait_b&w.png" alt="Portrait of Cormac Taylor" />
        </div>
        <div className="about_box right right_box">
          <h2>a {getAge(new Date(BIRTHDAY))} year old studying cs</h2>
          <p>oivenoivn</p>
          <p>jcneronvoren</p>
          <Info
            infoTitle="Understanding the background"
            infoDesc={
              "To be completed."
            }
          />
        </div>
      </div>
    </>
  );
}

export default About;
