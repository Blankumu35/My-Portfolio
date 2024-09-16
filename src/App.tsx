import {FC, useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './App.css';
import './Pages/Tech Skills.css';
import './Pages/Education.css';
import './Pages/Experience.css';
import './Pages/Projects.css';
import './Pages/ContactMe.css'
import Navbar from './Components/Navbar';
import pic from './assets/Beni.jpeg';
import aboutBg from './assets/background1.jpg'
import projectsbg from './assets/bg6.jpg'
import backgroundSPACE from '../dist/assets/background-Ci4S26Mj.mp4'
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


import { FaArrowLeft, FaArrowRight, FaHtml5, FaInstagram } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { RiJavascriptFill } from 'react-icons/ri';
import { Icon } from '@iconify/react';
import background from './assets/window.png';
import { LiaGithub, LiaLinkedin } from 'react-icons/lia';
import { ImGithub, ImLinkedin, ImMail } from 'react-icons/im';

gsap.registerPlugin(ScrollTrigger);




function App() {


interface TechSkill {
  icon: JSX.Element;
  altIcon: JSX.Element;
  name: string;
  skillLevels: number[];
  skillTitle: string[];
  Augments: JSX.Element[];
  augmentNames: string[];
}
const [selectedLogo, setSelectedLogo] = useState<TechSkill | null>(null);  

 const projects = [
  {
    id: 1,
    title: 'Football App',
    description: "Check scores, fixtures and stats in an app that's dedicated to the Beautiful Game.",
    github: 'https://github.com/Blankumu35/Football-App',
    tryNow: 'https://github.com/Blankumu35/Football-App',
    backgroundUrl: '/src/assets/football.jpeg', // Add the URL for the background image
  },
  {
    id: 2,
    title: 'Movie Recommender',
    description: 'Find the perfect Film / TV Show based on your personal preferences.',
    github: 'https://github.com/Blankumu35/Movie-Recommender-App',
    tryNow: 'https://github.com/Blankumu35/Movie-Recommender-App',
    backgroundUrl: '/src/assets/Mocies.jpg', // Add the URL for the background image
  },
  {
    id: 3,
    title: 'Connect 4',
    description: 'Play against AI or a friend',
    github: 'https://github.com/Blankumu35/Connect-4',
    tryNow: 'https://github.com/Blankumu35/Connect-4',
    backgroundUrl: '/src/assets/connect4.jpg', // Add the URL for the background image
  },
];


const logos: TechSkill[] = [
    { icon: <FaHtml5 style={{ color: 'indianred' }} />, altIcon: <FaHtml5 style={{ color: 'indianred' }} />, name: 'HTML5', skillLevels: [90, 85, 80, 75, 70], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"],  Augments:[], augmentNames:[] },
    { icon: <IoLogoCss3 style={{ color: 'blue' }} />, altIcon: <IoLogoCss3 style={{ color: 'blue' }} />, name: 'CSS3', skillLevels: [80, 75, 70, 65, 60], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="logos:bootstrap" />, <Icon icon="logos:tailwindcss-icon" />], augmentNames:["Bootstrap", "Tailwind"] },
    { icon: <Icon icon="logos:tailwindcss-icon" />, altIcon: <IoLogoCss3 style={{ color: 'blue' }} />, name: 'Tailwind', skillLevels: [80, 75, 70, 65, 60], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="logos:bootstrap" />, <Icon icon="logos:tailwindcss-icon" />], augmentNames:[] },
    { icon: <RiJavascriptFill style={{ color: 'gold' }} />, altIcon: <RiJavascriptFill style={{ color: 'gold' }} />, name: 'JavaScript', skillLevels: [85, 80, 75, 70, 65], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="devicon:typescript" />], augmentNames:["TypeScript"] },
    { icon: <Icon icon="devicon:typescript" />, altIcon: <RiJavascriptFill style={{ color: 'gold' }} />, name: 'TypeScript', skillLevels: [85, 80, 75, 70, 65], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="devicon:typescript" />], augmentNames:["TypeScript"] },
    { icon: <Icon icon="devicon:react" />, altIcon: <Icon icon="devicon:react" />, name: 'React', skillLevels: [75, 70, 65, 60, 55], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="skill-icons:nodejs-dark" />, <Icon icon="skill-icons:expressjs-dark" />, <Icon icon="tabler:brand-react-native" style={{ color: '#00a3f5' }} />], augmentNames:["NodeJS", "ExpressJS", "React Native"] },
    { icon: <Icon icon="skill-icons:nodejs-dark" />, altIcon: <Icon icon="devicon:react" />, name: 'NodeJS', skillLevels: [75, 70, 65, 60, 55], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="skill-icons:nodejs-dark" />, <Icon icon="skill-icons:expressjs-dark" />, <Icon icon="tabler:brand-react-native" style={{ color: '#00a3f5' }} />], augmentNames:["NodeJS", "ExpressJS", "React Native"] },
    { icon: <Icon icon="skill-icons:expressjs-dark" />, altIcon: <Icon icon="devicon:react" />, name: 'ExpressJS', skillLevels: [75, 70, 65, 60, 55], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="skill-icons:nodejs-dark" />, <Icon icon="skill-icons:expressjs-dark" />, <Icon icon="tabler:brand-react-native" style={{ color: '#00a3f5' }} />], augmentNames:["NodeJS", "ExpressJS", "React Native"] },
    { icon: <Icon icon="logos:python" />, altIcon: <Icon icon="logos:python" />, name: 'Python', skillLevels: [70, 65, 60, 55, 50], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[<Icon icon="logos:django-icon" />, <Icon icon="logos:numpy" />, <Icon icon="logos:matplotlib-icon" />], augmentNames:["Django", "Numpy", "Matplotlib"] },
    { icon: <Icon icon="devicon:java" />, altIcon: <Icon icon="devicon:java" />, name: 'Java', skillLevels: [65, 60, 55, 50, 45], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[], augmentNames:[] },
    { icon: <Icon icon="logos:mysql" />, altIcon: <Icon icon="logos:mysql-icon" />, name: 'MySQL', skillLevels: [60, 55, 50, 45, 40], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[], augmentNames:[] },
    { icon: <Icon icon="devicon:mongodb-wordmark" style={{ height: 40, width: 40 }} />, altIcon: <Icon icon="devicon:mongodb" width="1.2em" height="1.2em" />, name: 'MongoDB', skillLevels: [50, 45, 40, 35, 30], skillTitle: ["HTML","CSS","JAVA","REACT","VUE"], Augments:[], augmentNames:[] },
];

  const handleLogoClick = (logo: TechSkill) => {
    setSelectedLogo(logo);
  };

 /* const handleClosePopup = () => {
    setSelectedLogo(null);
  }; */

  const logoBox = () => {
    return logos.map((logo, index) => (
      <div key={index} className="logo" onClick={() => handleLogoClick(logo)}>
        {logo.icon}
      </div>
    ));
  };
  useEffect(() =>{
    document.querySelector(`#mini-nav a[data-section='tech']`)?.classList.add('active-subtitle');
  })
   
      

    let handleDetails = (section:string) => {

    // Remove the active class from all links
    document.querySelectorAll('#mini-nav a').forEach((link) => {
      link.classList.remove('active-subtitle');
    });

  // Add the active class to the clicked link
  document.querySelector(`#mini-nav a[data-section='${section}']`)?.classList.add('active-subtitle');

  const educationElement = document.getElementById('education');
  const techElement = document.getElementById('tech');

  // Ensure both elements are found
  if (educationElement && techElement) {
    if (section === 'education') {
      techElement.style.display = 'none';
      educationElement.style.display = 'block';
    } else if (section === 'tech') {
      educationElement.style.display = 'none';
      techElement.style.display = 'block';
    }
  }
};

interface ArrowProps {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const NextArrow: FC<ArrowProps> = ({ onClick}) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
}

const PrevArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
}

  const [imageIndex, setImageIndex] = useState(1)
  useEffect(() => {
    console.log(imageIndex)
    if(imageIndex===3){
      setImageIndex(0)
    }
  },[imageIndex])
  const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  arrows:true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  beforeChange:(current: number, next: number) => { setImageIndex(next+1); console.log(current)},
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
          centerMode: true,
  centerPadding: '0px',
        beforeChange:(current: number, next: number) => { setImageIndex(next+1); console.log(current)},
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: true,
  centerPadding: '0px',
          beforeChange:(current:number, next:number) => { setImageIndex(next+1); console.log(current)},

      },
    },
  ],
};

  useEffect(() => {
    sliderSettings
}, [window.innerWidth])

   useEffect(() => {
    const gifContainer = document.querySelector('.gif-container') as HTMLElement | null;
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.pageX;
      console.log(mouseX)
      if(gifContainer){
      gifContainer.style.left = `${mouseX - 2470 / 2}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



   
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

  const handleSubmit = () => {
    axios.post("http://localhost:3000/send-email",formData)
              .then((response:AxiosResponse) => {response.data
               alert('Message sent successfully')})

              .catch((error:AxiosError) => { console.error('Error:', error);
               alert('An error occurred. Please try again later.')});

              
              
  };



   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
      const [screenHeight, setScreenHeight] = useState(window.innerWidth);

   const [scrollY, setScrollY] = useState(window.scrollY);


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);

    };

     const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listeners for window resize and scroll
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(`Screen Width: ${screenWidth}, ScrollY: ${scrollY}, height:${screenHeight} oWidth: ${window.outerWidth}`);
    console.log((1536 - screenWidth) / 100);

    // Select the about-me-image element safely
    const aboutMeImageElement = document.querySelector('.about-me-image') as HTMLElement | null;

    if (aboutMeImageElement) {
        if (screenWidth < 800) {
            if (scrollY >= 100) {
                setTimeout(() => {
                    aboutMeImageElement.style.display = 'none';
                }, 2500);
            } else {
                aboutMeImageElement.style.display = 'block';
            }
        } else {
            aboutMeImageElement.style.display = 'block';
        }
    }
}, [screenWidth, scrollY, screenHeight]);

useEffect(() => {
  console.log(selectedLogo)
})


  useEffect(() => {
    // Set initial styles

    const home = document.querySelector('#home') as HTMLElement | null;
    gsap.set('.about-me-details', { opacity: 0 });
     if(scrollY <= 100){
    gsap.set('.about-me-image', { scale: 0.81, xPercent: (82-(((1536-screenWidth)/10)*1.25)), yPercent: 8}); 
    }else{
    gsap.set('.about-me-image', { scale: 0.81, xPercent: 82, yPercent: 8}); 
    }

    const tl = gsap.timeline({
      duration: 1,
      ease: 'ease',
    });

    tl.to('#home', {
      scale: 8,
      duration: 0.00001,
      ease: 'ease',
      scrollTrigger: {
        trigger: '.main-content',
        start:'top -6%',
        end: '+=10%',
        scrub: 2,
        pin: true,
        markers: false,
        onLeaveBack: () => {
            if(home){
          home.style.display = 'block';
          }
          tl.to('.about-me-details', { opacity: 0 });
          tl.to('.about-me-image img', { borderRadius: 50, duration: 0.9, scrub: 1, ease: 'power1.inOut', stagger: 0.5, markers: false });
          tl.to('.about-me-image', { scale: 0.81, xPercent: 82, yPercent: 7 });
        },
      },
      onComplete: () => {
          if(home){
          home.style.display = 'none';
          }
          tl.to('.about-me-image img', {  borderRadius: 50, duration: 0.9, scrub: 1, ease: 'power1.inOut', stagger: 0, markers: false });
          tl.fromTo('.about-me-image',{ scale: 0.81, xPercent: 82, yPercent: 8}, { scale: 1, xPercent: 0, yPercent: 8, ease: 'power1.inOut', markers: false, duration: 0.9, scrub: 1, stagger: 0 });
          tl.fromTo('.about-me-details', { opacity: 0 }, { opacity: 1, duration: 0.9, scrub: 1, stagger: 0 });
        
      },
    });
  }, []);

  
  return (
    <>
    <Navbar />
    <div className='main-content'>
    <div className='transition-container'>
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
            <li><a data-section="education" onClick={() => handleDetails('education')}>Education & Certification</a></li>
          </ul>
          <div className="extra-details">
            <div id="tech">
              <div className="logo-box">
                {logoBox()}
              </div>

            </div>
            <div id="education" style={{ display: 'none' }}>
              <div className="timeline-display">
               <video autoPlay loop muted id="background-video">
                        <source src={backgroundSPACE} type="video/mp4" width='700' height='700'/>
                    </video>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h3>Leaving Certificate</h3>
                      <p className="light-text">Ashfield College</p>
                      <p className="subtext">2020 - 2022</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h3>Computer Science <span style={{ fontSize: 10 }}>(BA)</span></h3>
                      <p className="light-text">Trinity College Dublin</p>
                      <p className="subtext">2022 - Present</p>
                    </div>
                  </div>
                  <div className="gif-container">
                    <div className="gif-background"></div>
                  </div>
                </div>           
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="home" className="container">
        <img src={background} className="background" alt="background" />
        <div className="Main-Title">
          <h1 className='Start-Title' style={{ marginBottom:60}}>
            Hello,<br className='break' /> I'm <span className="Name-Text-Main">BENI</span>
            <br />
           <span className='Aspire-title' style={{fontSize:20}}>Aspiring Software Engineer</span>
          </h1>
          <div className='animated-color' />
          <h2 className='follow-me'>Follow me</h2>

          <div className='Socials'> 
          <a href='https://www.linkedin.com/in/beni-lankumu-37805b200/' target='_blank'><ImLinkedin /></a>
          <a href='https://github.com/Blankumu35'target='_blank'><ImGithub /></a>
          <a href='https://www.instagram.com/beni_03_35/'target='_blank'><FaInstagram /></a>
          </div>
        </div>
      </section>
      </div>
      <img src={projectsbg} className='background-projects' />
       <section id="projects" className="container">
      <h2 style={{ display: 'flex', justifyContent: 'center', fontSize: 70, marginTop:-20 }} className="Name-Text-Projects">Projects</h2>
      <div className="project-cards">
      <Slider {...sliderSettings}>
         {projects.map((project,index) => (
          <div className={index === imageIndex? "slide activeSlide" : "slide"} >

          <div
            key={project.id}
            className="project-card"
          >
          
          <img src={project.backgroundUrl} className='project-card md:w-100 md:h-50'/>
            <div className="project-card-text">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-btn-container">
                <button className="project-btn">
                  <a target="blank" style={{ color: '#ff6f61' }} href={project.github}>View in Github</a>
                </button>
                <button className="project-btn" style={{ backgroundColor: '#ff6f61' }}>
                  <a target="blank" style={{ color: 'white' }} href={project.tryNow}>Try it now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        ))}
        </Slider>
      </div>
    </section>
    <img src={aboutBg} className='background-contact' />
     <section id="contact" className="container">
      <h2 style={{color:'whitesmoke'}}>Contact Me</h2>

      <div className="contact-wrapper">
        <aside className="contact-aside">
          <h3>Reach Me</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/beni-lankumu-37805b200/" target="_blank" rel="noopener noreferrer"><LiaLinkedin style={{backgroundColor:'blue', borderRadius:10}}/><span className='reach-me-name'>Linkedin</span></a></li>
            <li><a href="mailto:lankumur@tcd.ie"><ImMail style={{backgroundColor:'blue', borderRadius:10}}/><span className='reach-me-name'>Email</span></a></li>
            <li><a href="https://github.com/Blankumu35" target="_blank" rel="noopener noreferrer"><LiaGithub style={{backgroundColor:'blue', borderRadius:10}}/><span className='reach-me-name'>Github</span></a></li>
          </ul>
        </aside>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="subject"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-btn">Submit</button>
      </form>
      </div>
    </section>
   
  </div>
      <footer style={{marginTop:-35, zIndex:2000}}>
        <p>&copy; 2024 Beni Lankumu. All rights reserved.</p>
      </footer>
    </>
  );
};


export default App;