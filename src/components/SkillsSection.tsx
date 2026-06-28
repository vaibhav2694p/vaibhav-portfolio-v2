import { SKILL_CATEGORIES } from "../data/profileData";

const SkillsSection = () => {
  return (
    <div className="skills-section section-container" id="skills" style={{ marginTop: 80, marginBottom: 80 }}>
      <div className="skills-container" style={{ maxWidth: 1300, margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: 40 }}>
          Technical <span style={{ color: '#5eead4' }}>Skills</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={i} style={{
              background: '#0a0e17', border: '1px solid #1a1a2e', borderRadius: 8,
              padding: '24px', transition: 'border-color 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#5eead4'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a2e'; }}
            >
              <h3 style={{ color: '#5eead4', fontSize: '1rem', fontWeight: 500, marginBottom: 16, letterSpacing: 1 }}>
                {cat.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map((skill, j) => (
                  <span key={j} style={{
                    padding: '4px 12px', background: '#111827', border: '1px solid #1f2937',
                    borderRadius: 4, fontSize: '0.8rem', color: '#ccc',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
