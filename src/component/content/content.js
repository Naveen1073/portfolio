import "../content/content.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=bootstrap,js",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=react,python",
    id: 3,
  },

];

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End React Developer</h1>
                
                <p>
                  Hii, I'm Naveen, a passionate Front-end Developer. As a fresher in the field, I bring enthusiasm, dedication, and a strong foundation in front-end development 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/stefan-topalovic-dev/"
                  >
                    <AiOutlineLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/stefvndev"
                  >
                    <FaGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;