import React from "react"


const Header = () => {
    const data = {
        name: 'Remi mendoza',
        headerTagline: [
            //Line 1 For Header
            "Building digital",
            //Line 2 For Header
            "products, Sites,",
            //Line 3 For Header
            "and experience",
          ],
        //Header Paragraph
        headerParagraph:
        "Welcome",

        //Contact Email
        contactEmail: "Mendozaremi@gmail.com",
    }
    // End Header Details -----------------------

  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h1>
            </div>
            <p>{data.headerParagraph}</p>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "mendozaremi@gmail.com"
              }`}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
        </div>
      </div>
    </div>
  )
}

export default Header
