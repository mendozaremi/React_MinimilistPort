import React from "react"

// Social Icon
import githubIcon from "../images/github.svg"
import codepenIcon from "../images/codepen.svg"
import dribbbleIcon from "../images/dribbble.svg"
import instagramIcon from "../images/instagram.svg"

const Footer = () => {

    const data = {
      contactSubHeading: "Hire Me",
      social: [
      // Add Or Remove The Link Accordingly
            { img: githubIcon, url: "https://github.com/mendozaremi" },
            {
            img: codepenIcon,
            url: "https://www.codepen.com/mendozaremi",
            },
            {
            img: dribbbleIcon,
            url: "https://dribbble.com/Mendozaremi",
            },
            {
            img: instagramIcon,
            url: "https://www.instagram.com/remi.banks",
            },
       ],
    } 
    

  
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Made With <icon>❤</icon> by{" "}
            <a href="https://www.linkedin.com/in/remi-mendoza/">Remi</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
