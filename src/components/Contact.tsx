import { MdArrowOutward, MdCopyright, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { PROFILE } from "../data/profileData";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a href={PROFILE.linkedIn} target="_blank" rel="noreferrer" data-cursor="disable">
                LinkedIn — vaibhav-patel-b14267227
              </a>
            </p>
            <p style={{ marginTop: 8 }}>
              <a href={`mailto:${PROFILE.email}`} data-cursor="disable" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <MdEmail /> {PROFILE.email}
              </a>
            </p>
            <p style={{ marginTop: 8 }}>
              <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} data-cursor="disable" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <MdPhone /> {PROFILE.phone}
              </a>
            </p>
            <p style={{ marginTop: 8 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#888' }}>
                <MdLocationOn /> {PROFILE.location}
              </span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              GitHub <MdArrowOutward />
            </a>
            <a href={PROFILE.linkedIn} target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
            <a href={PROFILE.resume} target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Certifications</h4>
            <a href="/Certificate_merged.pdf" target="_blank" rel="noreferrer" style={{ color: '#5eead4', fontSize: '0.9rem' }} data-cursor="disable">
              View Certificates <MdArrowOutward style={{ display: 'inline' }} />
            </a>
            <h2 style={{ marginTop: 40 }}>
              Designed and Developed <br /> by <span>{PROFILE.name}</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
