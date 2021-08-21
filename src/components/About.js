import React from "react"

const About = () => {

    const data = {
        aboutParaOne:
        "A  brief history about me, I began my coding journey at The Knowledge House. TKH exposed me to the core foundations of web development. After graduating from the intro to web development program I accepted a grant offered by New York City’s Tech Talent Pipeline which helped me enroll in Fullstack Academy",
      aboutParaTwo:
        "At Fullstack I gained the closest experience to working as a software engineer. I experienced standups and working with rotational dev teams on various projects. Throughout my coding journey I have been exposed to the following technologies that keep me interested day in and day out",
      aboutParaThree:
        "I am now proud to call myself a software engineer, I look forward to working with a great company and team",
      aboutImage:
        "https://i.imgur.com/6igEXS1.png",
    };

  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
              <h1>About Me</h1>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
