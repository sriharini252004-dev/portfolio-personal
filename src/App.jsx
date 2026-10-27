import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting me! This is a demo form.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Responsive Design",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio website to showcase my profile, technical skills, projects, education and contact details.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "💻",
      live: "https://sriharini252004-dev.github.io/Personal-portfolio/",
      github: "https://github.com/sriharini252004-dev",
    },
    {
      title: "React Image Gallery",
      description:
        "A React application that displays images using reusable components, props and array mapping.",
      tech: ["React.js", "CSS", "Vite"],
      icon: "🖼️",
      live: "https://zenvora-login-ehmfy697g-image-gallery2.vercel.app",
      github: "https://github.com/sriharini252004-dev",
    },
    {
      title: "Favourite Student List",
      description:
        "A React application to view students and manage favourite students using Context API and React Router.",
      tech: ["React.js", "Context API", "React Router"],
      icon: "🎓",
      live: "https://favorite-students-list-ccfqa053s-image-gallery2.vercel.app",
      github: "https://github.com/sriharini252004-dev/Favorite-students-list",
    },
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo">
          Harini<span>Sri.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="/resume.pdf"
          className="resume-btn"
          download
        >
          Download Resume ↓
        </a>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="home">
          <div className="home-content">
            <p className="hello">HELLO, I'M</p>

            <h1>
              Harinisri <span>👋</span>
            </h1>

            <h2>Frontend Developer</h2>

            <p className="home-description">
              I'm an MCA graduate and aspiring Frontend Developer
              passionate about building clean, responsive and
              user-friendly web applications.
            </p>

            <div className="home-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Projects →
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="home-socials">
              <a
                href="https://github.com/sriharini252004-dev"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/harinisri25/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="home-image">
            <div className="profile-circle">
              <span>HS</span>
            </div>

            <div className="floating-card">
              <span>✨</span>
              <div>
                <strong>Frontend Developer</strong>
                <p>Learning & Building</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about section">
          <div className="section-heading">
            <p>GET TO KNOW ME</p>
            <h2>
              About <span>Me</span>
            </h2>
            <div className="heading-line"></div>
          </div>

          <div className="about-content">
            <div className="about-text">
              <h3>Hi, I'm Harinisri!</h3>

              <p>
                I'm an MCA graduate with an interest in frontend
                development and modern web technologies. I enjoy
                learning how websites work and creating responsive
                user interfaces using HTML, CSS, JavaScript and React.
              </p>

              <p>
                As a fresher, I'm improving my coding skills through
                hands-on practice and projects. I'm looking for an
                opportunity to learn from experienced developers,
                contribute to real projects and grow as a developer.
              </p>

              <a href="#contact" className="primary-btn">
                Let's Connect →
              </a>
            </div>

            <div className="about-details">
              <div className="detail-card">
                <span>🎓</span>
                <div>
                  <h4>Education</h4>
                  <p>Master of Computer Applications</p>
                </div>
              </div>

              <div className="detail-card">
                <span>💻</span>
                <div>
                  <h4>Career Goal</h4>
                  <p>Frontend Developer</p>
                </div>
              </div>

              <div className="detail-card">
                <span>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="detail-card">
                <span>🌱</span>
                <div>
                  <h4>Currently Learning</h4>
                  <p>React.js & Full Stack Development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills section">
          <div className="section-heading">
            <p>WHAT I WORK WITH</p>
            <h2>
              Technical <span>Skills</span>
            </h2>
            <div className="heading-line"></div>
          </div>

          <p className="section-description">
            Technologies and tools I'm learning and using in my projects.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-icon">
                  {["🌐", "🎨", "⚡", "⚛️", "💅", "📱", "🔧", "🐙"][index]}
                </span>
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects section">
          <div className="section-heading">
            <p>MY RECENT WORK</p>
            <h2>
              Featured <span>Projects</span>
            </h2>
            <div className="heading-line"></div>
          </div>

          <p className="section-description">
            A selection of projects I've built while learning web development.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <span>{project.icon}</span>
                  <p>PROJECT</p>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-tags">
                    {project.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source Code ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="education section">
          <div className="section-heading">
            <p>MY ACADEMIC JOURNEY</p>
            <h2>
              Education <span>Background</span>
            </h2>
            <div className="heading-line"></div>
          </div>

          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <p className="education-year">2024–2026</p>
              <h3>Master of Computer Applications</h3>
              <p>Dr. M.G.R. Educational and Research Institute</p>
              <span>Postgraduate Degree</span>
            </div>

            <div className="education-card">
              <div className="education-icon">📚</div>
              <p className="education-year">Undergraduate</p>
              <h3>Bachelor of Computer Applications</h3>
              <p>T.B.M.L. College, Porayar</p>
              <span>Undergraduate Degree</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="section-heading">
            <p>LET'S TALK</p>
            <h2>
              Contact <span>Me</span>
            </h2>
            <div className="heading-line"></div>
          </div>

          <p className="section-description">
            Have an internship opportunity or want to connect?
            I'd be happy to hear from you.
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's build something great!</h3>

              <p>
                I'm interested in frontend development internships
                and entry-level opportunities where I can learn,
                contribute and grow.
              </p>

              <div className="contact-item">
                <span>💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/harinisri25/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span>💻</span>
                <div>
                  <h4>GitHub</h4>
                  <a
                    href="https://github.com/sriharini252004-dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View my repositories
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="primary-btn">
                Send Message →
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo">
          Harini<span>Sri.</span>
        </a>

        <p>
          Designed & built by Harinisri | © {new Date().getFullYear()}
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;