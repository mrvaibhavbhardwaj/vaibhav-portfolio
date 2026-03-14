import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Training
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications (AIML)</h4>
                <h5>Chandigarh University</h5>
              </div>
              <h3>2024-26</h3>
            </div>
            <p>
              Pursuing MCA with a specialization in Artificial Intelligence and Machine Learning. Current CGPA: 8.0.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>Shobhit University</h5>
              </div>
              <h3>2021-24</h3>
            </div>
            <p>
              Completed BCA program. Graduated with 8.5 CGPA.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist Training</h4>
                <h5>Technook / Internshala</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed two comprehensive 2-month data science training programs focusing on data analytics and practical ML implementations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
