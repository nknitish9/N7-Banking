import "./Solutions.css";

import { ArrowRight } from "lucide-react";

const Solutions = () => {
  return (
    <section className="solutions">

      <div className="solutions-content">

        {/* LEFT SIDE */}

        <div className="solutions-header">
          <h2>
            All of our solutions are
            tailor-made to your needs
          </h2>

          <button className="solutions-btn">
            REQUEST DEMO
          </button>
        </div>

        {/* RIGHT SIDE */}

        <div className="solutions-grid">
          {/* CARD 1 */}
          <div className="solutions-card">
            <div className="solutions-card-icon">
              <img
                src="/svg/core.svg"
                alt="Solution Icon"
                className="solution-icon-img"
              />
            </div>

            <h3>
              Core Banking CB7
            </h3>

            <p>
              CB7 helps your financial institution improve
              the client experience, automate and optimize
              procedures, simplify banking operations for
              your employees, improve risk management,
              increase productivity, and ensure full
              regulatory compliance.
            </p>

            <a href="" className="learn-more">
              <span>LEARN MORE </span>
              <ArrowRight size={14}/>
            </a>

          </div>

          {/* CARD 2 */}
          <div className="solutions-card">
            <div className="solutions-card-icon">
              <img
                src="/svg/digital.svg"
                alt="Solution Icon"
                className="solution-icon-img"
              />
            </div>

            <h3>
              Digital Banking N7
            </h3>

            <p>
              N7 brings full capabilities across strategy,
              human-centred design, operations, engineering
              and data science to create and deliver
              disruptive innovation. Our approach to
              building digital banks is specifically
              designed to help clients
            </p>

            <a href="#" className="learn-more">
              <span>LEARN MORE </span>
              <ArrowRight size={14}/>
            </a>

          </div>

          {/* CARD 3 */}
          <div className="solutions-card">
            <div className="solutions-card-icon">
              <img
                src="/svg/open.svg"
                alt="Solution Icon"
                className="solution-icon-img"
              />
            </div>

            <h3>
              Open Banking
            </h3>

            <p>
              Our API banking helps you to gain actionable
              insights, enable account aggregation,
              streamline customer onboarding, KYC, and
              payment initiation, offer predictive
              budgeting tools, and introduce enhanced
              credit scoring.
            </p>

            <a href="#" className="learn-more">
              <span>LEARN MORE </span>
              <ArrowRight size={14}/>
            </a>

          </div>

          {/* CARD 4 */}
          <div className="solutions-card">
            <span className="solutions-badge">
              NBFC
            </span>

            <div className="solutions-card-icon">
              <img
                src="/svg/loanO.svg"
                alt="Solution Icon"
                className="solution-icon-img"
              />
            </div>

            <h3>
              Loan Origination System
            </h3>

            <p>
              N7 brings full capabilities across strategy,
              human-centred design, operations, engineering
              and data science to create and deliver
              disruptive innovation. Our approach to
              building digital banks is specifically
              designed to help clients
            </p>

            <a href="#" className="learn-more">

              <span>LEARN MORE </span>

              <ArrowRight size={14}/>

            </a>

          </div>

          {/* CARD 5 */}
          <div className="solutions-card">
            <span className="solutions-badge">
              NBFC
            </span>

            <div className="solutions-card-icon">
              <img
                src="/svg/loanM.svg"
                alt="Solution Icon"
                className="solution-icon-img"
              />
            </div>

            <h3>
              Loan Management System
            </h3>

            <p>
              N7 brings full capabilities across strategy,
              human-centred design, operations, engineering
              and data science to create and deliver
              disruptive innovation. Our approach to
              building digital banks is specifically
              designed to help clients
            </p>

            <a href="#" className="learn-more">
              <span>LEARN MORE </span>
              <ArrowRight size={14}/>
            </a>

          </div>
        </div>
      </div>

      <div className="solutions-glow-wrapper">
        <div className="solutions-glow"></div>
      </div>

    </section>
  );
};

export default Solutions;

