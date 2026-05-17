import "./Skills.css";
import skills from "../../data/skills";

function Skills() {
  return (
    <section id="skills">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <article className="skill-card" key={skillGroup.category}>
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
