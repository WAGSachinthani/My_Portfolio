// Portfolio.js

import React from 'react';
import './home_style.css'; // Import your CSS file

function Portfolio() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#about Me">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="about">
        <h2>My PROFILE</h2>
        <p>Welcome to my portfolio! I'm currently pursuing a BEng (Hons) in Software Engineering at Informatics Institute of Technology, and I have successfully completed the second year of my university. An ambitious person, I'm currently pursuing a BEng (Hons) in Software Engineering at Informatics Institute of Technology and I have successfully completed the second year of my university. I am learning about different programming languages and frameworks, and I am constantly expanding my skills with new technologies. I am open to new opportunities where I can contribute to impactful projects and work with talented people. My ultimate career ambition is to evolve into a highly proficient and experienced software engineer in the field.</p>
      </section>

      <section id="projects">
        <h2>MY PROJECTS</h2>
        <div className="project">
          <h3>2D Game - HTML | CSS | JavaScript</h3>
          <p>
            Welcome to the 2D game project! The game is developed using HTML, CSS, and JavaScript, aiming to provide an engaging experience for players of all ages. Below, you'll find all the information you need to get started with the game. The game features three unique cartoon characters in a 2D environment. Players can control these characters and navigate through different levels, each presenting its own challenges and obstacles. The goal is to overcome these obstacles and reach the end of each level.
          </p>
        </div>
        <div className="project">
          <h3>Tesla Web Page Clone - HTML | CSS</h3>
          <p>
            Welcome to the Tesla web page replica project! This project aims to redesign the Tesla company web page using HTML and CSS. I have developed a replica of the Tesla company web page using modern web development technologies such as HTML and CSS. The goal of this project is to closely mimic the design and functionality of the official Tesla webpage, providing users with an immersive browsing experience.
          </p>
        </div>
        <div className="project">
          <h3>Thrill of Ceylon Web Site - HTML | CSS | JavaScript</h3>
          <p>
            Welcome to the Thrill of Ceylon project! This project aims to create an entertainment website using HTML, JavaScript, and CSS. I have developed a Home page and Gallery page using modern web development technologies such as HTML, JavaScript, and CSS. The website aims to provide users with an immersive and engaging experience through various forms of entertainment, including animations, images, and text content.
          </p>
        </div>
        <div className="project">
          <h3>FitFlow Mobile App - Flutter | Python</h3>
          <p>
            Welcome to the FitFlow project! This project aims to create a workout recommendation and customization mobile application using Flutter, Python, and machine learning algorithms. Details about the project's features, purpose, and challenges faced during development will be provided soon.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>CONTACT ME</h2>
        <div className="contact-infomation">
          <p>If you'd like to get in touch with me, feel free to reach out through any of the following channels:</p>
          <ul>
            <li>Email: gimhanisachinthani6@gmail.com</li>
            <li>Phone: 076 0279680</li>
            <li>Social Media:
              <ul>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/wickrama-arachchige-sachinthani-354b40207/">wickrama-arachchige-sachinthani</a></li>
                <li>Github: <a href="https://github.com/WAGSachinthani">WAGSachinthani</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </>
  );
}

export default Portfolio;
