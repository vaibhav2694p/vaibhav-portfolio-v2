import { useEffect, useRef, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading, setLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const initRef = useRef(false);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }, 200);
  }

  useEffect(() => {
    if (isLoaded && !initRef.current) {
      initRef.current = true;
      import("./utils/initialFX")
        .then((module) => {
          setClicked(true);
          setTimeout(() => {
            try {
              if (module.initialFX) module.initialFX();
            } catch {}
            setIsLoading(false);
          }, 400);
        })
        .catch(() => {
          setClicked(true);
          setTimeout(() => setIsLoading(false), 400);
        });
    }
  }, [isLoaded, setIsLoading]);

  useEffect(() => {
    const startProgress = () => {
      let p = 0;
      const interval = setInterval(() => {
        if (p <= 70) {
          p += Math.round(Math.random() * 8) + 2;
          if (p > 70) p = 70;
          setLoading(p);
        } else {
          clearInterval(interval);
          const slowInterval = setInterval(() => {
            p += Math.round(Math.random() * 3) + 1;
            setLoading(p);
            if (p >= 90) clearInterval(slowInterval);
          }, 300);
        }
      }, 80);
      return () => clearInterval(interval);
    };
    const cleanup = startProgress();
    return cleanup;
  }, [setLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    target.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          VP
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> Senior IT Executive</span>
            <span> Microsoft 365 Specialist</span>
            <span> Azure AD Administrator</span>
            <span> Intune Expert</span>
            <span> AVD Specialist</span>
            <span> Network & Security Professional</span>
            <span> IT Infrastructure Specialist</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
