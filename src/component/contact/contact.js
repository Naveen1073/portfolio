// import { IconMail, IconMapSearch } from "@tabler/icons-react";
import { MdOutlineMailOutline } from "react-icons/md";
// import { FiMapPin } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import '../contact/contact.css'

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              {/* <h3>Don't be shy! Hit me up! 👇</h3> */}
            </div>
            <div className="contact__icons">

            <div className="contact__icon-box">
                <span>
                  <FaPhoneAlt className="icons" width={40} height={40} />
                </span>
                <div className="contact__info">
                  <h3>Phone</h3>
                  <p>+91 9360-264-461</p>
                </div>
              </div>
              {/* <div className="contact__icon-box">
                <span>
                  <FiMapPin className="icons" width={40} height={40} />
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Belgrade, Serbia</p>
                </div>
              </div> */}

              <div className="contact__icon-box">
                <span>
                  <MdOutlineMailOutline className="icons" width={40} height={40} />
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:aknaveen222@gmail.com">
                  aknaveen222@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
