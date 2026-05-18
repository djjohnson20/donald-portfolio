import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="brand">
          <a href="#hero">Donald Johnson | Developer</a>
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
