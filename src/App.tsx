import './App.css';
import pic from './Beni.jpeg';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { RiJavascriptFill } from 'react-icons/ri';
import { Icon } from '@iconify/react';
import trophyImage from './trophy.png'; 
import timelineBg from './background.mp4';
import { useState } from 'react';


function App() {
  const [selectedLogo, setSelectedLogo] = useState(null);

const logos = [
    { icon: <FaHtml5 style={{ color: 'indianred' }} />, altIcon: <FaHtml5 style={{ color: 'indianred' }} />, name: 'HTML5', skillLevels: [90, 85, 80, 75, 70], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"],  Augments:[]},
    { icon: <IoLogoCss3 style={{ color: 'blue' }} />, altIcon: <IoLogoCss3 style={{ color: 'blue' }} />, name: 'CSS3', skillLevels: [80, 75, 70, 65, 60], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="logos:bootstrap" />, <Icon icon="logos:tailwindcss-icon" />] },
    { icon: <RiJavascriptFill style={{ color: 'gold' }} />, altIcon: <RiJavascriptFill style={{ color: 'gold' }} />, name: 'JavaScript', skillLevels: [85, 80, 75, 70, 65], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="devicon:typescript" />] },
    { icon: <Icon icon="devicon:react" />, altIcon: <Icon icon="devicon:react" />, name: 'React', skillLevels: [75, 70, 65, 60, 55], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="skill-icons:nodejs-dark" />, <Icon icon="skill-icons:expressjs-dark" />, <Icon icon="tabler:brand-react-native"  style={{color: '#00a3f5'}} />] },
    { icon: <Icon icon="logos:python" />, altIcon: <Icon icon="logos:python" />, name: 'Python', skillLevels: [70, 65, 60, 55, 50], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="logos:django-icon" />, <Icon icon="logos:numpy" />, <Icon icon="logos:matplotlib-icon" />] },
    { icon: <Icon icon="devicon:java" />, altIcon: <Icon icon="devicon:java" />, name: 'Java', skillLevels: [65, 60, 55, 50, 45], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[] },
    { icon: <Icon icon="logos:mysql" />, altIcon: <Icon icon="logos:mysql-icon" />, name: 'MySQL', skillLevels: [60, 55, 50, 45, 40], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[] },
    { icon: <Icon icon="devicon:mongodb-wordmark" style={{ height: 40, width: 40 }} />, altIcon: <Icon icon="devicon:mongodb" width="1.2em" height="1.2em" />, name: 'MongoDB', skillLevels: [50, 45, 40, 35, 30], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[] },
    { icon: <Icon icon="skill-icons:aws-light" />, altIcon: <Icon icon="skill-icons:aws-light" />, name: 'AWS', skillLevels: [60, 55, 50, 45, 40], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[] },
    { icon:<Icon icon="devicon:azure" width="1em" height="1em" />, altIcon: <Icon icon="devicon:azure" width="1em" height="1em" />, name: 'Azure', skillLevels: [65, 60, 55, 50, 45], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[] }
  ];

  const handleLogoClick = (logo) => {
    setSelectedLogo(logo);
  };

  const handleClosePopup = () => {
    setSelectedLogo(null);
  };

  const logoBox = () => {
    return logos.map((logo, index) => (
      <div key={index} className="logo" onClick={() => handleLogoClick(logo)}>
        {logo.icon}
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
        <ul id="mini-nav">
          <li><a data-section="tech" onClick={() => handleDetails('tech')}>Tech Skills</a></li>
          <li><a data-section="awards" onClick={() => handleDetails('awards')}>Awards</a></li>
          <li><a data-section="education" onClick={() => handleDetails('education')}>Education & Certification</a></li>
        </ul>
        <div className="extra-details">
          <div id="tech" style={{ display: 'none' }}>
            <div className="logo-box">
              {logoBox()}
            </div>
          </div>
          <div id="awards" style={{ display: 'none' }}>
            <div className="trophy">
        <img src={trophyImage} alt="Trophy" className="trophy-image" style={{height:185,width:195}}/>
        <div className="trophy-details">
          <p className='award-text'>Year: <span style={{fontWeight:'normal'}}>2024</span></p>
          <p className='award-text'>Category: <span style={{fontWeight:'normal'}}>SwEng Industry Showcase</span></p>
          <p className='award-text'>Description: <span style={{fontWeight:'normal'}}>2nd place in the SwEng 2024 Industry Showcase</span></p>
        </div>
      </div>
          </div>
          <div id="education" style={{ display: 'none' }}>
          <div className='timeline-display'>
            <video autoPlay loop muted id="background-video">
                  <source src={timelineBg} type="video/mp4" width='700' height='700'/>
              </video>
            <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3>Leaving Certificate</h3>
                    <p className='light-text'>Ashfield College</p>
                    <p className='subtext'>2020 - 2022</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3>Computer Science <span style={{fontSize:14}}>(BA)</span></h3>
                    <p className='light-text'>Trinity College Dublin</p>
                    <p className='subtext'>2022 - Present</p>
                  </div>
                </div>
              </div>
            </div>
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
{selectedLogo && (
        <div className="logo-overlay">
          <div className="logo-popup">
            <button className="close-button" onClick={handleClosePopup}>X</button>
            <div className="logo-content">
              <div style={{ marginBottom: -20 }}><h1>Tititori</h1></div>
              <div className='logo-and-details'>
                <div className='logo-section'>
                  <div className="logo-placeholder resized-logo">
                    {selectedLogo.altIcon}
                    <div className="logo-placeholder logo-name">
                      <h3 style={{ marginTop: -100 }}>{selectedLogo.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="logo-details">
                  <h3 style={{ marginBottom: 5 }}>Technical Skills</h3>
                  <div className='logo-tech-details'>
                    {selectedLogo.skillLevels.map((level, index) => (
                      <div key={index} className="skills-bar-container">
                        <div className="skills-bar-header">
                          <span className="skills-bar-title">{selectedLogo.skillTitle[index]}</span>
                          <span className="skills-bar-percentage">{level}%</span>
                        </div>
                        <div className="skills-bar">
                          <div className="skills-bar-fill" style={{ width: `${level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='logo-attr-details'>
                    <h3>Augments</h3>
                    <div className='logo-augments'>
                      {selectedLogo.Augments.map((augLogo, index) => (
                        <div key={index} className='logo-augments-logo'>
                          {augLogo}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer>
        <p>&copy; 2024 Beni Lankumu. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;