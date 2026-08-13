import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills">
      <SectionTitle title="Skills" description="Technologies and tools I use to build web applications." />

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category}>
          <h3>{category}</h3>

          <ul>
            {skillList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
