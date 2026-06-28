import { useEffect, useState, useCallback } from "react";
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { GitHubRepo } from "../types";

const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3776ab', JavaScript: '#f7df1e', TypeScript: '#3178c6',
  HTML: '#e34c26', CSS: '#563d7c', Java: '#b07219',
  'C++': '#f34b7d', 'C#': '#178600', Go: '#00add8',
  Rust: '#dea584', Ruby: '#701516', PHP: '#4F5D95',
  Shell: '#89e051', null: '#8b949e',
};

const Work = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/vaibhav2694p/repos?per_page=50&sort=updated")
      .then((r) => r.json())
      .then((data) => {
        setRepos(data.filter((r: GitHubRepo) => !r.fork).slice(0, 10));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    const n = currentIndex === 0 ? repos.length - 1 : currentIndex - 1;
    goToSlide(n);
  }, [currentIndex, goToSlide, repos.length]);

  const goToNext = useCallback(() => {
    const n = currentIndex === repos.length - 1 ? 0 : currentIndex + 1;
    goToSlide(n);
  }, [currentIndex, goToSlide, repos.length]);

  if (loading) return <div className="work-section" id="work"><div className="work-container section-container"><h2>My <span>Projects</span></h2><p style={{ color: '#888', padding: '40px 0' }}>Loading projects...</p></div></div>;
  if (repos.length === 0) return <div className="work-section" id="work"><div className="work-container section-container"><h2>My <span>Projects</span></h2><p style={{ color: '#888', padding: '40px 0' }}>No projects found. Visit my <a href="https://github.com/vaibhav2694p" target="_blank" rel="noreferrer" style={{ color: '#5eead4' }}>GitHub</a>.</p></div></div>;

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} aria-label="Previous project" data-cursor="disable">
            <MdArrowBack />
          </button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next project" data-cursor="disable">
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {repos.map((r, idx) => (
                <div className="carousel-slide" key={r.id}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{idx + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{r.name}</h4>
                        <p className="carousel-category">{r.description || "No description"}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Details</span>
                          <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap' }}>
                            {r.language && <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#888' }}>
                              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: LANGUAGE_COLORS[r.language] || '#8b949e' }} />
                              {r.language}
                            </span>}
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#888' }}>
                              <FaStar /> {r.stargazers_count}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#888' }}>
                              <FaCodeBranch /> {r.forks_count}
                            </span>
                            <span style={{ color: '#666', fontSize: '0.85rem' }}>{formatDate(r.updated_at)}</span>
                          </div>
                        </div>
                        <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                          <a href={r.html_url} target="_blank" rel="noreferrer" data-cursor="disable" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', border: '1px solid #5eead4', borderRadius: 4, color: '#5eead4', fontSize: '0.85rem', textDecoration: 'none' }}>
                            <FaGithub /> View on GitHub
                          </a>
                          {r.homepage && (
                            <a href={r.homepage} target="_blank" rel="noreferrer" data-cursor="disable" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', border: '1px solid #888', borderRadius: 4, color: '#ccc', fontSize: '0.85rem', textDecoration: 'none' }}>
                              <FaExternalLinkAlt /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <a href={r.html_url} target="_blank" rel="noreferrer" data-cursor="disable" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#0a0e17', border: '1px solid #1a1a2e', borderRadius: 8, padding: 20 }}>
                        <FaGithub size={64} color="#333" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {repos.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
