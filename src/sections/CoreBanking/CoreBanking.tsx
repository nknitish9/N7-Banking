import { ArrowRight } from "lucide-react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./CoreBanking.css";

const featureData = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

const CoreBanking = () => {
  const [heroRef, heroVisible] =
    useIntersectionObserver<HTMLElement>({ threshold: 0.08 });

  const [featuresRef, featuresVisible] =
    useIntersectionObserver<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section
      className={`core-banking ${heroVisible ? "core-banking--visible" : ""}`}
      ref={heroRef}
    >
      {/* BACKGROUND TEXT */}
      <div className="core-banking-bg-text">CB7</div>

      {/* CONTENT */}
      <div className="core-banking-content">
        {/* LEFT */}
        <div
          className={`core-banking-left ${heroVisible ? "core-banking-left--visible" : ""}`}
        >
          <div className="core-banking-text">
            <h2 className="core-banking__heading">
              A complete cloud-based
              <br />
              core banking.
            </h2>

            <p className="core-banking__desc">
              Faster time to market with our cloud-based
              core banking services
            </p>
          </div>

          {/* BUTTON */}
          <div
            className={`core-actions ${heroVisible ? "core-actions--visible" : ""}`}
          >
            <button className="primary-btn">REQUEST DEMO</button>

            <a href="#" className="learn-more">
              <div className="learn-content">
                <span className="learn-more__text">LEARN MORE</span>
                <ArrowRight size={14} className="learn-more__arrow" />
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`core-banking-right ${heroVisible ? "core-banking-right--visible" : ""}`}
        >
          <div className="core-top-line"></div>
          <img
            src="/images/dashboard.png"
            alt="Dashboard"
            className="core-dashboard-image"
          />
          <div className="core-bottom-line"></div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div
        className={`core-features-content ${featuresVisible ? "core-features-content--visible" : ""}`}
        ref={featuresRef}
      >
        {/* LEFT IMAGE */}
        <div
          className={`core-features-left ${featuresVisible ? "core-features-left--visible" : ""}`}
        >
          <div className="core-feature-top-line"></div>
          <img
            src="/images/dashboard-2.png"
            alt="Core Banking"
            className="core-feature-image"
          />
          <div className="core-feature-bottom-line"></div>
        </div>

        {/* RIGHT TEXT */}
        <div
          className={`core-features-right ${featuresVisible ? "core-features-right--visible" : ""}`}
        >
          <h3 className="core-features__title">
            Run a more efficient, flexible,
            <br />
            and digitally connected core
            <br />
            banking system
          </h3>

          <div className="core-feature-details">
            <h4>What you will get:</h4>

            <div className="feature-grid">
              <div className="feature-column">
                {featureData.slice(0, 5).map((item) => (
                  <div className="feature-item" key={item}>
                    <div className="feature-check"></div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="feature-column">
                {featureData.slice(5).map((item) => (
                  <div className="feature-item" key={item}>
                    <div className="feature-check"></div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBanking;