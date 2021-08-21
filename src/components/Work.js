import React from "react"
import Card from "./Card"

const data = {
  projects: [
    {
      title: "TMBD Movie app", //Project Title - Add Your Project Title Here
      para:
        "Movie search app using TMBD's API", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mendozaremi/React_MovieSearch",
    },
    {
      title: "Netflix Clone", //Project Title - Add Your Project Title Here
      para:
        "A Netflix clone built using React", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/lIwR9JB.jpg&format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://remflix-cf959.web.app",
    },
    {
      title: "Aplier", //Project Title - Add Your Project Title Here
      para:
        "FullStack Academy capstone team project", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/foYrvpx.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Aplier/Aplier",
    },
    {
      title: "Photography Port", //Project Title - Add Your Project Title Here
      para:
        "Material UI Photograghy portfolio", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/7cfXRpU.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mendozaremi/React_PhotoPort",
    },
    {
      title: "Breaking bad", //Project Title - Add Your Project Title Here
      para:
        "Breaking Bad casting app", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/9M4xkEK.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mendozaremi/React_BreakingBad",
    },
    {
      title: "Kotlin Converter", //Project Title - Add Your Project Title Here
      para:
        "Converter app built on Kotlin. Convers temperature and currency", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/ilJeeWA.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mendozaremi/Kotlin_ConverterApp",
    },
  ]
}

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
            <h1>Work</h1>
          <div className="grid">
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
