import { CERTIFICATIONS } from "../data/profileData";

const CertificationsSection = () => {
  return (
    <div className="cert-section section-container" id="certifications" style={{ marginTop: 80, marginBottom: 80 }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: 10 }}>
          <span style={{ color: '#5eead4' }}>Certifications</span> & Training
        </h2>
        <p style={{ color: '#888', marginBottom: 40, fontSize: '0.9rem' }}>
          Industry-recognized certifications validating expertise across IT infrastructure, networking, and cloud technologies.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16 }}>
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} style={{
              background: '#0a0e17', border: '1px solid #1a1a2e', borderRadius: 8,
              padding: '20px', transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#5eead4'; e.currentTarget.style.boxShadow = '0 0 20px rgba(94,234,212,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a2e'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ color: '#5eead4', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
                {cert.issuer} {cert.year && `• ${cert.year}`}
              </div>
              <div style={{ color: '#eae5ec', fontSize: '0.9rem', fontWeight: 500 }}>{cert.name}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="/Certificate_merged.pdf" target="_blank" rel="noreferrer"
            style={{ color: '#5eead4', border: '1px solid #5eead4', padding: '8px 24px', borderRadius: 4, textDecoration: 'none', fontSize: '0.85rem' }}
            data-cursor="disable">
            View All Certificates (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
