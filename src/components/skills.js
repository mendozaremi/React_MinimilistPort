import React from "react"
import htmlIcon from "../images/html.svg"
import cssIcon from "../images/css.svg"
import reactIcon from "../images/react.svg"
import jsIcon from "../images/javascript.svg"
import designIcon from "../images/design.svg"
import codeIcon from "../images/code.svg"

const Skills = () => {

  const data = {
    skills: [
      {
        img: htmlIcon,
        para:
          "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.",
      },
      {
        img: cssIcon,
        para:
          "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
      },
      {
        img: jsIcon,
        para:
          "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
      },
      {
        img: reactIcon,
        para:
          "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. ",
      },
      {
        img: designIcon,
        para:
          "User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers.",
      },
      {
        img: codeIcon,
        para:
          "In communications and information processing, code is a system of rules to convert information—such as a letter, word, sound, image, or gesture—into another form",
      },
    ],
  
  }
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
