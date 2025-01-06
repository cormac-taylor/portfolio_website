import "./styles/Header.css";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "./index.js";

const EMAIL = "cormacmtaylor@gmail.com";

function Header() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/", { state: { redirected: true } });
  };

  return (
    <>
      <nav className="nav_container">
        <div id="nav_content">
          <div className="nav_box left">
            <div onClick={handleNavigation}>
              <img src="/images/logo.svg" alt="Logo" className="nav_img" />
            </div>
          </div>
          <div className="nav_box right">
            <ExternalLink
              url="https://www.cormac-taylor.com/Cormac_Taylor_Resume.pdf"
              txt="Resume"
            />
            <ExternalLink
              url={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
              txt="Contact"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
