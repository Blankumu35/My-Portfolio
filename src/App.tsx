import './App.css'
import pic from './Beni.jpeg';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { Icon } from '@iconify/react';



function App() {

   

    const logoBox = () => {
    let logos = [<FaHtml5 style={{color:'indianred'}} />, <IoLogoCss3 style={{color:'blue'}}/>, <RiJavascriptFill style={{color:'gold'}}/>, <Icon icon="devicon:react" />,
    <Icon icon="logos:python" /> , <Icon icon="devicon:java" />,
    <Icon icon="logos:mysql" />, <Icon icon="devicon:mongodb-wordmark" style={{height:40, width:40}} />, <Icon icon="vscode-icons:file-type-cpp3" />,
    <Icon icon="skill-icons:aws-light" />, <Icon icon="logos:google-cloud" />];

    return logos.map((logo, index) => (
      <div key={index} className="logo">
        {logo}
      </div>
    ));
  };

      

    let handleDetails = (section) => {

    // Remove the active class from all links
    document.querySelectorAll('#mini-nav a').forEach((link) => {
      link.classList.remove('active-subtitle');
    });

    // Add the active class to the clicked link
    document.querySelector(`#mini-nav a[data-section='${section}']`).classList.add('active-subtitle');

    if (section === 'tech') {
      document.getElementById('awards').style.display = 'none';
      document.getElementById('education').style.display = 'none';
      document.getElementById('tech').style.display = 'block';
    } else if (section === 'awards') {
      document.getElementById('education').style.display = 'none';
      document.getElementById('tech').style.display = 'none';
      document.getElementById('awards').style.display = 'block';
    } else if (section === 'education') {
      document.getElementById('tech').style.display = 'none';
      document.getElementById('awards').style.display = 'none';
      document.getElementById('education').style.display = 'block';
    }
  };

  return (
    <>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
      </nav>
      <section id="home" className="container">
        <div className="Main-Title">
          <p>Aspiring Software Engineer</p>
          <h1>
            Hello, I'm <span style={{ color: 'orange' }}>Beni</span>
            <br />
            Welcome to my <br />
            World.
          </h1>
        </div>
      </section>
      <section id="about" className="container">
        <div className="about-me-image">
          <img src={pic} alt="Beni" />
        </div>
        <div className="about-me-details">
          <h2>About Me</h2>
          <p>
            Hi, I'm Beni Lankumu. I am currently pursuing a career in software development. My interests include developing web applications, learning new programming languages, and solving complex problems. I'm currently in my 3rd year of studying Computer Science in Trinity College Dublin and hope the journey will be a complete success!
          </p>
          <li id="mini-nav">
            <a data-section="tech" onClick={() => handleDetails('tech')}>Tech Skills</a>
            <a data-section="awards" onClick={() => handleDetails('awards')}>Award</a>
            <a data-section="education" onClick={() => handleDetails('education')}>Education & Certification</a>
          </li>
          <div className="extra-details">
            <div id="tech" style={{ display: 'none' }}>
               <div className="logo-box">
                {logoBox()}
              </div>
            </div>
            <div id="awards" style={{ display: 'none' }}>
              <p className='bold-text'>SwEng 2024 Industry Showcase</p>
              <p className='subtext'>2nd place</p>
            </div>
            <div id="education" style={{ display: 'none' }}>
              <p className='bold-text'>Computer Science<span className='light-text'> - Trinity College Dublin</span></p>
              <p className='subtext'><span className='light-text'>2022 - Present</span></p>
              <p className='bold-text'>Leaving Certificate<span className='light-text'> - Ashfield College</span></p>
              <p><span className='subtext'>2022</span></p>
            </div>
          </div>
        </div>
      </section>
       <section id="projects" className="container">
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on:</p>
        <div className="project-cards">
          <div className="project-card">
            <h3>Football app</h3>
            <p>Description of Football App.</p>
            <a href="#">View Project</a>
          </div>
          <div className="project-card">
            <h3>Movie Recommender</h3>
            <p>Description of Movie Recommender.</p>
            <a href="#">View Project</a>
          </div>
          <div className="project-card">
            <h3>Connect 4</h3>
            <p>Connect 4 is a classic two-player game</p>
            <a href="#">View Project</a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Beni Lankumu. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
