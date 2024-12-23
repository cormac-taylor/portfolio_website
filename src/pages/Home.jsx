import "./styles/Home.css";
import TypingEffect from "../components/TypingEffect.jsx";

const NAME = "Cormac Taylor";

function Home() {
  return (
    <>
      <section className="full_screen_section section">
        <div id="landing_container">
          <div>
            <TypingEffect text={NAME} />
            <p id="landing_description">a highly curious troubleshooter.</p>
          </div>
        </div>
      </section>
      <div className="full_screen_divider"></div>
      <section className="full_screen_section section"></section>
      <div className="full_screen_divider"></div>
      <section className="section">
        <h2>Projects</h2>
      </section>
    </>
  );
}

export default Home;
