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
    <div className="footer_box">
      <p>Check out the source code on <a href="https://github.com/cormac-taylor/personal_website">github</a>.</p>
    </div>
  );
}

function Contacts() {
  return (
    <div className="footer_box">
      <div>
        <a href="https://github.com/cormac-taylor" target="_blank">
          <img src="/linked_in.png" alt="GitHub Logo" />
        </a>
        <a href="https://www.linkedin.com/in/cormac-taylor/" target="_blank">
          <img src="/github.png" alt="LinkedIn Logo" />
        </a>
        <a href="https://www.youtube.com/@cormac-taylor" target="_blank">
          <img src="/youtube.png" alt="YouTube Logo" />
        </a>
      </div>
      <p>© 2024, cormac-taylor.com</p>
    </div>
  );
}

export default Footer;
