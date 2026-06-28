import { PROFILE } from "../data/profileData";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          {PROFILE.bio}
        </p>
        <p className="para" style={{ marginTop: '1.5rem' }}>
          I currently lead IT operations at Safebooks Global, managing Microsoft 365, Entra ID (Azure AD),
          Microsoft Intune, Azure Virtual Desktop (AVD), network security, endpoint management, disaster recovery,
          and enterprise infrastructure supporting 100+ users across multiple business functions.
        </p>
      </div>
    </div>
  );
};

export default About;
