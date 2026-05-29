import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">
      {/* CARD */}

      <div className="cta-card">
        {/* BG TEXT */}
        <div className="cta-bg-text">
          CB7
        </div>

        {/* LEFT */}
        <div className="cta-left">

          <div className="cta-text">

            <h2>
              Take the full advantage of
              going paper-less now.
            </h2>

            <p>
              CB7 helps your financial institution improve
              the client experience, automate and optimize
              procedures, simplify banking operations
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="cta-right">

          <button className="secondary-btn">
            CONTACT US
          </button>

          <button className="primary-btn">
            REQUEST DEMO
          </button>

        </div>

      </div>

    </section>
  );
};

export default CTA;