import { ACHIEVEMENTS } from "../data/profileData";
import { FaServer, FaUsers, FaGlobe, FaShieldAlt, FaLock, FaAward } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  FaServer: <FaServer />, FaUsers: <FaUsers />, FaGlobe: <FaGlobe />,
  FaShieldAlt: <FaShieldAlt />, FaLock: <FaLock />, FaAward: <FaAward />,
};

const AchievementsSection = () => {
  return (
    <div className="achievements-section section-container" style={{ marginTop: 80, marginBottom: 80 }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: 40 }}>
          Key <span style={{ color: '#5eead4' }}>Achievements</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} style={{
              background: '#0a0e17', border: '1px solid #1a1a2e', borderRadius: 8,
              padding: '24px', transition: 'border-color 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#5eead4'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a2e'; }}
            >
              <div style={{ color: '#5eead4', fontSize: '1.5rem', marginBottom: 12 }}>
                {iconMap[a.icon] || <FaAward />}
              </div>
              <h3 style={{ color: '#eae5ec', fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>
                {a.title}
              </h3>
              <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.6 }}>
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
