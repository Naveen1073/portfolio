import AboutImg from "../images/about-img.webp";
import RoundedText from "../images/text2.svg";
import WorkingEmoji from "../images/working-emoji.png";
import "../about/about.css";


function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                Front-end Developer <br />
              </h4>
              <p>
              Hello, my name is Naveen, and I'm a Frontend Developer. My passion is to develop efficient and user-friendly applications.
                <br />
                <br />
                I'm currently diving into the world of web development with a focus on JavaScript, React, and Python for building responsive and interactive websites
                <br />
                <br />
                Excited to explore more and grow in the field of web development!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
