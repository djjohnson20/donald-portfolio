import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="brand">
          <p>Donald Johnson | Developer</p>
        </div>
        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
