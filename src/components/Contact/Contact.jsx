import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-content">
        <h2>Contact</h2>
        <p className="contact-description">
          I am currently open to new opportunities and would love to connect.
          Whether you want to discuss a project, collaboration, or potential
          role, feel free to reach out.
        </p>

        <div className="contact-links">
          <a href="mailto:djjohnson380@gmail.com">Email Me</a>
          <a
            href="https://github.com/djjohnson20"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/donald-johnson-1ba06b293"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
