import "./styles/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <GitHubRef />
        <Contacts />
      </footer>
    </>
  );
}

function GitHubRef() {
  return (
    <div>
      <p>GitHubRef</p>
    </div>
  );
}

function Contacts() {
  return (
    <div>
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
      <p>GitHubRef</p>
    </div>
  );
}

export default Footer;
