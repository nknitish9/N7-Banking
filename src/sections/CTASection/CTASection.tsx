import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./CTASection.css";

const CTASection = () => {
  const [sectionRef, sectionVisible] =
    useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      className={`cta-section ${sectionVisible ? "cta-section--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="cta-content">
        {/* LEFT */}
        <div
          className={`cta-left ${sectionVisible ? "cta-left--visible" : ""}`}
        >
          <h2>
            Take the full advantage of
            <br />
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
        <div
          className={`cta-buttons ${sectionVisible ? "cta-buttons--visible" : ""}`}
        >
          <button className="cta-contact-btn">CONTACT US</button>
          <button className="cta-request-btn">REQUEST DEMO</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;