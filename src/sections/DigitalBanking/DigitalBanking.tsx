import "./DigitalBanking.css";

import {
  ArrowRight,
  Check,
} from "lucide-react";

const DigitalBanking = () => {
  return (
    <section className="digital-banking">

      {/* TOP MARQUEE */}

      <div className="digital-topbar">
        <div className="marquee-track">
          {/* SET 1 */}

          <div className="marquee-group">
            <span>✳</span>
            <span>N7</span>
            <span>✳</span>
            <span>Say 👋</span>
            <span>to the new way of banking</span>
            <span>✳</span>
            <span>CB7</span>
            <span>✳</span>
            <span>Say 👋</span>
            <span>to the new way of banking</span>
          </div>

          {/* SET 2 */}

          <div className="marquee-group">
            <span>✳</span>
            <span>N7</span>
            <span>✳</span>
            <span>Say 👋</span>
            <span>to the new way of banking</span>
            <span>✳</span>
            <span>CB7</span>
            <span>✳</span>
            <span>Say 👋</span>
            <span>to the new way of banking</span>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}

      <div className="digital-wrapper">

        {/* BG TEXT */}
        <div className="digital-bg-text">
          N7
        </div>

        {/* LEFT */}

        <div className="digital-left">
          <div className="digital-heading">
            <h2>
              Digital banking
              <br />
              out-of-the-box
            </h2>

            <p>
              N7 helps your financial institution improve
              the client experience, automate and optimize
              procedures
            </p>

          </div>

          {/* ACTIONS */}

          <div className="digital-actions">
            <button className="primary-btn">
              REQUEST DEMO
            </button>

            <a href="#" className="learn-more">
              <div className="learn-content">
                <span>LEARN MORE</span>
                <ArrowRight size={14} />
              </div>
              <div className="learn-line"></div>
            </a>
          </div>

        </div>

        {/* SVG OUTSIDE */}
        <div className="learn-svg">
            <img
            src="/svg/Vector.svg"
            alt="vector"
            className="learn-vector"
            />
        </div>

        {/* RIGHT */}

        <div className="digital-right">

          {/* CARD 1 */}
          <div className="digital-card">
            <div className="phone-wrapper">
                {/* PHONE FRAME */}
                <img
                    src="/images/phone-frame.png"
                    alt="Phone Frame"
                    className="phone-frame"
                />
                {/* SCREEN UI */}
                <img
                    src="/images/mobile-screen-1.png"
                    alt="Screen"
                    className="phone-screen"
                />
            </div>

            <div className="digital-info">
              <h4>
                Fully compliant with regulatory requirement
              </h4>

              <p>
                The governance of risk management with
                regulations is achieved by our risk
                management framework that is fully integrated
                to work with digital bank’s operational-risk
                protocols and procedures.
              </p>

              <div className="feature-list">

                <div className="feature-item">
                  <Check size={13} />
                  <span>Pre-integrated Security System</span>
                </div>

                <div className="feature-item">
                  <Check size={13} />
                  <span>
                    Fully Compliant With Regulatory Requirement
                  </span>
                </div>

                <div className="feature-item">
                  <Check size={13} />
                  <span>Digitally Connected Core</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}

          <div className="digital-card reverse">
            <div className="digital-info">
              <h4>No legacy IT systems</h4>
              <p>
                Our Digital Banking solution and multilayered
                approach help financial institutions take
                advantage of digital transformation by ensuring
                customer trust and regulatory compliance.
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <Check size={13} />
                  <span>
                    Adaptive & Intelligent API monetization
                  </span>
                </div>

                <div className="feature-item">
                  <Check size={13} />
                  <span>Ambient User Experience</span>
                </div>

                <div className="feature-item">
                  <Check size={13} />
                  <span>Cloud-native With lower TCO</span>
                </div>
              </div>
            </div>

            <div className="phone-wrapper">
                {/* PHONE FRAME */}
                <img
                    src="/images/phone-frame.png"
                    alt="Phone Frame"
                    className="phone-frame"
                />
                {/* SCREEN UI */}
                <img
                    src="/images/mobile-screen-2.png"
                    alt="Screen"
                    className="phone-screen"
                />
            </div>

          </div>

          {/* CARD 3 */}

          <div className="digital-card">
            <div className="digital-bg-number">7</div>
            <div className="phone-wrapper">
                {/* PHONE FRAME */}
                <img
                    src="/images/phone-frame.png"
                    alt="Phone Frame"
                    className="phone-frame"
                />
                {/* SCREEN UI */}
                <img
                    src="/images/mobile-screen-3.png"
                    alt="Screen"
                    className="phone-screen"
                />
            </div>

            <div className="digital-info">
              <h4>No traditional branches</h4>
              <p>
                Our Digital Banking out-of-the-box helps you
                to accelerate innovation while reducing risks
                and optimising operational costs for a
                seamless branchless experience.
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <Check size={13} />
                  <span>
                    Branchless & Paperless Banking
                  </span>
                </div>

                <div className="feature-item">
                  <Check size={13} />
                  <span>
                    Digital Transformation Capability
                  </span>
                </div>

                <div className="feature-item">
                  <Check size={13} />
                  <span>
                    Optimized, Adoptable and Scalable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
            CTA SECTION
        ========================= */}

        <div className="digital-cta">

        {/* BG TEXT */}

        <div className="digital-cta-bg">
            N7
        </div>

        {/* LEFT */}

        <div className="digital-cta-left">
            <div className="digital-cta-text">
                <h2>
                    Take the full advantage of
                    going paper-less now.
                </h2>

                <p>
                    N7 helps your financial institution improve
                    the client experience, automate and optimize
                    procedures, simplify banking operations
                </p>
            </div>
        </div>

        {/* RIGHT */}

        <div className="digital-cta-actions">
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

export default DigitalBanking;