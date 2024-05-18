import './App.css'

function App() {

  return (
    <>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>
    <section id="home" className="container">
    <div className='Main-Title'>
        <p>Aspiring Software Engineer</p>
        <h1>Hello, I'm <span style={{color:'orange'}}>Beni</span><br></br>
            Welcome to my <br></br>World.
        </h1>
    </div>
 

    </section>
    <section id="about" className="container">
        <h2>About Me</h2>
        <p>Hi, I'm Beni Lankumu. I am currently pursuing a career in software development.<br></br>
         My interests include developing web applications, learning new programming<br></br> 
         languages, and solving complex problems. I'm currently in my 3rd year of studying<br></br>
         Computer Science in Trinity College Dublin and hope the journey will be a complete<br></br> 
         success! </p>
    </section>
    <section id="projects" className="container">
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on:</p>
        <ul>
            <li><strong>Football app:</strong> Description of project 1.</li>
            <li><strong>Movie Recommender:</strong> Description of project 2.</li>
            <li><strong>Connect 4:</strong> Description of project 3.</li>
        </ul>
    </section>
    <section id="contact" className="container">
        <h2>Contact</h2>
        <p>You can reach me at:</p>
        <p>Email: <a href="mailto:beni.lankumu@example.com">lankumur@tcd.ie</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/beni-lankumu-37805b200/" target="_blank">Link</a></p>
    </section>
    <footer>
        <p>&copy; 2024 Beni Lankumu. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
