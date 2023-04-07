import Pic from "../assets/pic.jpg";
import "./portfolio.css";
import Clock from "../assets/clock.png";
import Check from "../assets/check.png";
const Portfolio = () => {
  const skills = [
    "HTML",
    "CSS",
    "Sass",
    "JS",
    "React",
    "Redux",
    "C++",
    "C",
    "Java",
    "Android",
    "Kotlin",
    "React-Native",
  ];
  return (
    <div className="main-port">
      <div className="image">
        <img src={Pic} alt="Ankit" />
      </div>
      <h3 className="span">
        Ankit Kumar Sharma{" "}
        <span>
          <img src={Check} alt="Check" />
        </span>
      </h3>
      <p>Aspiring Software Engineer, Nepal</p>

      <div>
        <h2>Skills</h2>
        <div className="skillsets">
          {skills.map((skill) => (
            <div className="skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <p className="span">
        <span>
          <img src={Clock} alt="Check" />
        </span>
        &nbsp;Joined on Apr 20, 2023
      </p>
    </div>
  );
};

export default Portfolio;
