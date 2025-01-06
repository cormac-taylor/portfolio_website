import PropTypes from "prop-types";
import "./styles/Projects.css";
import ExternalLink from "./ExternalLink";

function Projects() {
  return (
    <>
      <div id="projects_div">
        <h2 id="projects_title">Projects</h2>
        <p id="projects_desc">
          Hover over a project to see the related skills.
        </p>
        <Project
          src="/images/projects/portfolio_website.png"
          alt="Screen shot of home page for this website"
          title="Portfolio Website"
          date="January 2025"
          desc="You are admiring this right now! It's a collection of some of the best things I've made, so it's easy for you to parse."
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/personal_website"
        />
        <Project
          src="/images/projects/variable_neural_network.png"
          alt="Image of a neural network diagram"
          title="Variable Neural Network"
          date="December 2024"
          desc="A simple neural network from scratch using softmax and one-hot encoding for classification. It uses backpropagation and gradient descent to train."
          youtube_url="https://youtu.be/WrUIKdE7VhM"
          github_url="https://github.com/cormac-taylor/neural_network"
        />
        <Project
          src="/images/projects/full_stack_web_app.png"
          alt="Screen shot of home page for the Full Stack Web App"
          title="Full Stack Web App"
          date="December 2024"
          desc="Discover all things board games in one place: borrow games nearby, read reviews of your favorites, and check out upcoming meetups!"
          youtube_url="https://youtu.be/wPT4nlQ146o"
          github_url="https://github.com/cormac-taylor/cs546_group22_final_project"
        />
        <Project
          src="/images/no_image.jpeg"
          alt="no image"
          title="Mini Chat App"
          date="November 2024"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/chat_app"
        />
        <Project
          src="/images/no_image.jpeg"
          alt="no image"
          title="CRUD API Server"
          date="October 2024"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/sports_team_API_server"
        />
        <Project
          src="/images/no_image.jpeg"
          alt="no image"
          title="File System"
          date="May 2024"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/file_system"
        />

        <Project
          src="/images/no_image.jpeg"
          alt="no image"
          title="Multiplayer Trivia"
          date="May 2024"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/online_multiplayer_trivia_game"
        />
        <Project
          src="/images/no_image.jpeg"
          alt="no image"
          title="Mini Unix Shell"
          date="March 2024"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/mini_shell"
        />
        <Project
          src="/images/no_image.jpeg"
          alt="no image"
          title="Earliest Deadline First Scheduling"
          date="March 2024"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/earliest_deadline_first_scheduling"
        />
        <Project
          src="/images/no_image.jpeg"
          alt="no image"
          title="CPU and Assembler"
          date="December 2023"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis ac maximus massa posuere elit neque laoreet. Bibendum aliquam etiam nisi iaculis fames massa. "
          youtube_url="https://www.youtube.com/@cormac-taylor"
          github_url="https://github.com/cormac-taylor/custom_cpu_and_assembler"
        />
      </div>
    </>
  );
}
// https://www.youtube.com/@cormac-taylor
Project.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  youtube_url: PropTypes.string.isRequired,
  github_url: PropTypes.string.isRequired,
};

function Project({ src, alt, title, date, desc, youtube_url, github_url }) {
  return (
    <>
      <div className="project">
        <div className="thumbnail">
          <img src={src} alt={alt} />
        </div>
        <div className="project_content">
          <h3>{title}</h3>
          <span>{date}</span>
          <p>{desc}</p>
        </div>
        <div className="project_container">
          <div className="project_box center">
            <ExternalLink url={youtube_url} txt="Walkthrough" />
          </div>
          <div className="project_box center divider">
            <ExternalLink url={github_url} txt="Source Code" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
