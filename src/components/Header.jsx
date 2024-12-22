import "./styles/Header.css";

function Header() {
  return (
    <>
      <div className="center">
        <nav className="nav_container">
          <a href="/" className="nav_link">
            Home
          </a>
          <a href="/about" className="nav_link">
            About
          </a>
          <a href="/blog" className="nav_link">
            Blog
          </a>
        </nav>
      </div>
    </>
  );
}

export default Header;
