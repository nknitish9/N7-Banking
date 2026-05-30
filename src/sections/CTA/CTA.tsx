import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./CTA.css";

const CTA = () => {
  const [cardRef, cardVisible] =
    useIntersectionObserver<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section className="cta">
      {/* CARD */}
      <div
        className={`cta-card ${cardVisible ? "cta-card--visible" : ""}`}
        ref={cardRef}
      >
        {/* BG TEXT */}
        <div className="cta-bg-text">CB7</div>

        {/* LEFT */}
        <div
          className={`cta-left ${cardVisible ? "cta-left--visible" : ""}`}
        >
          <div className="cta-text">
            <h2 className="cta__heading">
              Take the full advantage of
              <br />
              going paper-less now.
            </h2>

            <p className="cta__desc">
              CB7 helps your financial institution improve
              the client experience, automate and optimize
              procedures, simplify banking operations
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`cta-right ${cardVisible ? "cta-right--visible" : ""}`}
        >
          <button className="cta-secondary-btn">CONTACT US</button>

          <button className="cta-primary-btn">REQUEST DEMO</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;