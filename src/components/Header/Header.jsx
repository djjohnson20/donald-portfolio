import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="brand">
          <p>Donald Johnson | Software Developer</p>
        </div>
      </div>
      <nav className="site-nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
