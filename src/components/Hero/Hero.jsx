import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-intro">Hello, my name is</p>
        <h1>Donald Johnson</h1>
        <h2>Full Stack Developer</h2>
        <p className="hero-description">
          I build clean, responsive, and user-focused web applications with
          modern frontend and backend tools.
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
