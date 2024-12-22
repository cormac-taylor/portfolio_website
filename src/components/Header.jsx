import "./styles/Header.css";

const EMAIL = "cormacmtaylor@gmail.com";

function Header() {
  return (
    <>
      <nav className="nav_container">
        <div className="nav_box left">
          <a href="/">
            <img src="no_logo.jpeg" alt="No Logo" className="nav_img" />
          </a>
        </div>
        <div className="nav_box right">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
            target="_blank"
            className="nav_link center"
          >
            Contact
            <img
              src="/new_tab.png"
              alt="New window icon by Grand Iconic - Flaticon"
              className="new_tab_icon"
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
