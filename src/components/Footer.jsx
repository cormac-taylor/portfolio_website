import "./styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer_container">
        <GitHubRef />
        <Contacts />
      </footer>
    </>
  );
}

function GitHubRef() {
  return (
    <div className="footer_box left">
      <p>
        Feel free to check out the source code on{" "}
        <a href="https://github.com/cormac-taylor/personal_website">github</a>.
      </p>
    </div>
  );
}

function Contacts() {
  return (
    <div className="footer_box right">
      <div className="img_links_container">
        <a
          href="https://www.linkedin.com/in/cormac-taylor/"
          target="_blank"
          className="img_links_box"
        >
          <img src="/linked_in_logo.png" alt="GitHub Logo" />
        </a>
        <a
          href="https://github.com/cormac-taylor"
          target="_blank"
          className="img_links_box"
        >
          <img src="/github_logo.png" alt="LinkedIn Logo" />
        </a>
        <a
          href="https://www.youtube.com/@cormac-taylor"
          target="_blank"
          className="img_links_box"
        >
          <img src="/youtube_logo.png" alt="YouTube Logo" />
        </a>
      </div>
      <p>© 2024, cormac-taylor.com</p>
    </div>
  );
}

export default Footer;
