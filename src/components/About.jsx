import "./styles/About.css";
import { getAge } from "../utilities/index.js";
import { Info, Circuit } from "./index.js";

const BIRTHDAY = "4/13/2004";

function About() {
  return (
    <>
      <Circuit />
      <div id="portrait">
        <img src="/images/portrait_b&w.png" alt="Portrait of Cormac Taylor" />
      </div>
      <div className="tub">
        <div className="about_container right">
          <h2>A {getAge(new Date(BIRTHDAY))} year old studying CS.</h2>
          <p>
            I&apos;m a computer science student with a strong foundation in
            algorithms, machine learning, and web development.
          </p>
          <p>
            Currently, I&apos;m a Algorithmic Complexity course assistant at
            Stevens. In July, I&apos;ll be joining TD Securities&apos;s full
            time rotational program.
          </p>
          <Info
            infoTitle="Understanding the Background"
            infoDesc="To be completed."
          />
        </div>
      </div>
    </>
  );
}

export default About;
