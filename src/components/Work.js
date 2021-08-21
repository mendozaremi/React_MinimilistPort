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
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
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
        "https://imgur.com/tqy0KtM&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Aplier/Aplier",
    },
    {
      title: "Photography Port", //Project Title - Add Your Project Title Here
      para:
        "Material UI Photograghy portfolio", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mendozaremi/React_PhotoPort",
    },
    {
      title: "Breaking bad", //Project Title - Add Your Project Title Here
      para:
        "Breaking Bad casting app", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mendozaremi/React_BreakingBad",
    },
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/8a37LwY.png&auto=format&fit=crop&w=400&q=60",
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
