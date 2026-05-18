import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-intro">Hello, my name is</p>
        <h1>Donald Johnson</h1>
        <h2>Full Stack Developer</h2>
        <p className="hero-description">
          I build responsive web applications with clean user experiences,
          practical backend architecture, and maintainable code.
        </p>

        <div className="hero-actions">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
