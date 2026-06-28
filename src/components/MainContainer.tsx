import { PropsWithChildren, useEffect, useRef, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import SkillsSection from "./SkillsSection";
import CertificationsSection from "./CertificationsSection";
import AchievementsSection from "./AchievementsSection";
import setSplitText from "./utils/splitText";
import { setAllTimeline } from "./utils/GsapScroll";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const fallbackRef = useRef(false);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    const fallback = setTimeout(() => {
      if (!fallbackRef.current) {
        fallbackRef.current = true;
        setAllTimeline();
      }
    }, 5000);
    return () => {
      clearTimeout(fallback);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <SkillsSection />
            <CertificationsSection />
            <AchievementsSection />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
