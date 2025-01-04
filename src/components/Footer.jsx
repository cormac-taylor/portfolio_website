import "./styles/Footer.css";
import PropTypes from "prop-types";

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
        <a
          href="https://github.com/cormac-taylor/personal_website?tab=readme-ov-file#sources"
          target="_blank"
        >
          Acknowledgments
        </a>
        .
      </p>

      <p>
        Feel free to check out the source code on{" "}
        <a
          href="https://github.com/cormac-taylor/personal_website"
          target="_blank"
        >
          github
        </a>
        .
      </p>
    </div>
  );
}

function Contacts() {
  return (
    <div className="footer_box right">
      <div className="img_links_container">
        <SocialsExternalLink
          url="https://www.linkedin.com/in/cormac-taylor/"
          src="/images/linked_in_logo.png"
          alt="LinkedIn Logo"
        />
        <SocialsExternalLink
          url="https://github.com/cormac-taylor"
          src="/images/github_logo.png"
          alt="GitHub Logo"
        />
        <SocialsExternalLink
          url="https://www.youtube.com/@cormac-taylor"
          src="/images/youtube_logo.png"
          alt="YouTube Logo"
        />
      </div>
      <p>© 2024, cormac-taylor.com</p>
    </div>
  );
}

SocialsExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function SocialsExternalLink({ url, src, alt }) {
  return (
    <>
      <a href={url} target="_blank" className="img_links_box">
        <img src={src} alt={alt} />
      </a>
    </>
  );
}

export default Footer;
