import { PropsWithChildren } from "react";
import { PROFILE } from "../data/profileData";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            {PROFILE.name.split(" ")[0]}
            <br />
            <span>{PROFILE.name.split(" ").slice(1).join(" ")}</span>
          </h1>
        </div>
        <div className="landing-info">
          <h3>Senior IT Executive</h3>
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">Microsoft 365</div>
            <div className="landing-h2-2">Azure AD</div>
          </h2>
          <h2>
            <div className="landing-h2-info">Intune & AVD</div>
            <div className="landing-h2-info-1">Network & Security</div>
          </h2>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Landing;
