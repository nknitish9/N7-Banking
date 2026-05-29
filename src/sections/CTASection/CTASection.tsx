import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">

        {/* LEFT */}
        <div className="cta-left">
          <h2>
            Take the full advantage of
            going paper-less now.
          </h2>

          <p>
            CB7 helps your financial institution
            improve the client experience,
            automate and optimize procedures,
            simplify banking operations
          </p>
        </div>

        {/* RIGHT */}

        <div className="cta-buttons">
          <button className="cta-contact-btn">
            CONTACT US
          </button>

          <button className="cta-request-btn">
            REQUEST DEMO
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;