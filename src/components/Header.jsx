import { useNavigate } from "react-router-dom";
import "./styles/Header.css";
import PropTypes from "prop-types";

const EMAIL = "cormacmtaylor@gmail.com";

function Header() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/", { state: { redirected: true } });
  };

  return (
    <>
      <nav className="nav_container">
        <div className="nav_box left">
          <div onClick={handleNavigation}>
            <img
              src="/images/ct_logo.svg"
              alt="CT Logo"
              className="nav_img"
            />
          </div>
        </div>
        <div className="nav_box right">
          <NavExternalLink
            url="https://www.cormac-taylor.com/Cormac_Taylor_Resume.pdf"
            txt="Resume"
          />
          <NavExternalLink
            url={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
            txt="Contact"
          />
        </div>
      </nav>
    </>
  );
}

NavExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
};

function NavExternalLink({ url, txt }) {
  return (
    <>
      <a href={url} target="_blank" className="nav_link center">
        {txt}
        <img
          src="/images/new_tab.svg"
          alt="New window icon by Grand Iconic - Flaticon"
          className="new_tab_icon"
        />
      </a>
    </>
  );
}

export default Header;
