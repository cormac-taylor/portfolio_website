import "./styles/About.css";
import { getAge } from "../utilities/index.js";
import { Info, Spipa } from "./index.js";

const BIRTHDAY = "4/13/2004";

function About() {
  return (
    <>
      <Spipa />
      <div id="portrait">
        <img src="/images/portrait_b&w.png" alt="Portrait of Cormac Taylor" />
      </div>
      <div className="center">
        <div className="about_container right">
          <h2>A {getAge(new Date(BIRTHDAY))} year old studying CS.</h2>
          <p>
            I have a strong foundation in algorithms, machine learning, and web
            development.
          </p>
          <p>
            I am currently a course assistant for Sandeep Bhatt&apos;s
            Algorithmic Complexity at Stevens Institute of Technology. I will be
            joining TD Securities&apos;s full time rotational program in July.
          </p>
          <Info
            infoTitle="Understanding the Background"
            infoDesc={"To be completed."}
          />
        </div>
      </div>
    </>
  );
}

export default About;
