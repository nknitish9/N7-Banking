import "./CoreBanking.css";
import { ArrowRight } from "lucide-react";

const CoreBanking = () => {
  return (
    <section className="core-banking">

      {/* BACKGROUND TEXT */}

      <div className="core-banking-bg-text">
        CB7
      </div>

      {/* CONTENT */}

      <div className="core-banking-content">
        {/* LEFT */}

        <div className="core-banking-left">
          <div className="core-banking-text">
            <h2>
              A complete cloud-based
              core banking.
            </h2>

            <p>
              Faster time to market with our cloud-based
              core banking services
            </p>
          </div>

          {/* BUTTON */}
          <div className="core-actions">
            <button className="primary-btn">
                REQUEST DEMO
            </button>

            {/* LEARN MORE */}
            <a href="#" className="learn-more">
                <div className="learn-content">
                  <span>LEARN MORE</span>
                  <ArrowRight size={14} />
                </div>
                <div className="learn-line"></div>
            </a>
          </div>

        </div>

        {/* RIGHT */}

        <div className="core-banking-right">
            {/* TOP BORDER */}
            <div className="core-top-line"></div>
            {/* IMAGE */}
            <img
                src="/images/dashboard.png"
                alt="Dashboard"
                className="core-dashboard-image"
            />
            {/* BOTTOM BORDER */}
            <div className="core-bottom-line"></div>
        </div>

      </div>

      {/* SECOND SECTION */}

      <div className="core-features-content">

        {/* LEFT IMAGE */}

        <div className="core-features-left">
            <div className="core-feature-top-line"></div>
            <img
            src="/images/dashboard-2.png"
            alt="Core Banking"
            className="core-feature-image"
            />

            <div className="core-feature-bottom-line"></div>

        </div>

        {/* RIGHT TEXT */}

        <div className="core-features-right">
            <h3>
            Run a more efficient, flexible,and digitally
            connected corebanking system
            </h3>

            <div className="core-feature-details">

                <h4>What you will get:</h4>

                <div className="feature-grid">

                    <div className="feature-column">

                    <div className="feature-item">
                        <div className="feature-check"></div>
                        <p>Customer-On Boarding</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-check"></div>
                        <p>Managing deposits and withdrawals</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-check"></div>
                        <p>Transaction management</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-check"></div>
                        <p>Interest Calculation</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-check"></div>
                        <p>
                        Payments processing (cash,
                        cheques, mandates, NEFT,
                        RTGS etc)
                        </p>
                    </div>

                    </div>

                    <div className="feature-column">

                    <div className="feature-item">
                        <div className="feature-check"></div>
                        <p>CRM Activities</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-check"></div>
                        <p>Configuring New Banking Products</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-check"></div>
                        <p>
                        Loan disbursal and Loan
                        management
                        </p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-check"></div>
                        <p>
                        Establishing criteria for minimum
                        balances, interest rates, number
                        of withdrawals allowed and so on.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBanking;
