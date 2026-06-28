import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior IT Executive</h4>
                <h5>Safebooks Global Pvt. Ltd.</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Leading enterprise IT infrastructure, Microsoft 365, Azure, Intune, and security operations for 100+ users. Managing 15+ domains, cloud services, and disaster recovery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Administrator</h4>
                <h5>L. C. Institute of Technology</h5>
              </div>
              <h3>2022-23</h3>
            </div>
            <p>
              Managed campus-wide IT infrastructure, Sophos Firewall, Google Workspace, and endpoint management across academic and administrative departments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Asset Coordinator</h4>
                <h5>Meditab India</h5>
              </div>
              <h3>2021-22</h3>
            </div>
            <p>
              Managed enterprise IT asset lifecycle, Active Directory administration, endpoint management, and service desk operations for a healthcare technology company.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Engineer</h4>
                <h5>Electrotherm (India) Limited</h5>
              </div>
              <h3>2018-21</h3>
            </div>
            <p>
              Supported enterprise infrastructure, hardware deployment, software installation, and IT service delivery for a large manufacturing organization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Network Engineer</h4>
                <h5>YOU Broadband India Ltd.</h5>
              </div>
              <h3>2017-18</h3>
            </div>
            <p>
              Managed network operations, connectivity troubleshooting, and customer support escalations for a major ISP.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Executive</h4>
                <h5>Patel Infotech</h5>
              </div>
              <h3>2012-17</h3>
            </div>
            <p>
              Delivered IT infrastructure support, hardware solutions, CCTV deployment, networking, and asset management services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
