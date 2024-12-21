import "./styles/Header.css";

function Header() {
  return (
    <>
      <nav>
        {/* add logo for nav */}
        <a href="/">
          <img src="/no_logo.jpeg" alt="No logo." />
        </a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
      </nav>
    </>
  );
}

export default Header;
