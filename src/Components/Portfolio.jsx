import React from "react";

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title:
      "An intuitive and feature-rich image editor web app for all your photo customization needs! 🚀",
    description:
      "Start editing your image for better feature in the most simplest manner, get started now.",
    url: "https://jishantukripal.github.io/Image-Editor/",
  },
  {
    title: "Tic Tac Toe Game built with HTML, CSS, and JavaScript.",
    description: "Play tic tac toe while exploring the possibilities of programming.",
    url: "https://jishantukripal.github.io/Tic-Tac-Toe/",
  },
  {
    title: "My Resume Site",
    description: "Site on which you are reading about it.",
    url: "#",
  },
  {
    title: "🧮 A simple and stylish calculator web app for your everyday arithmetic needs! 🚀",
    description: "Do your basic calculation with a calculator that I created using programming.",
    url: "https://jishantukripal.github.io/Simple-Calculator/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
