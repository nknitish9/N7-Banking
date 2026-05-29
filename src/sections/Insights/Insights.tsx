import "./Insights.css";

import { ArrowRight } from "lucide-react";

const Insights = () => {
  return (
    <section className="insights">

      {/* LEFT GLOW */}

      <div className="insights-glow"></div>

      <div className="insights-content">

        {/* LEFT */}

        <div className="insights-left">

          <div className="insights-left-content">

            <h2>
              Get yourself up-to-speed on
              all the things happening in
              fintech
            </h2>

            <button className="insights-btn">
              INSIGHTS
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="insights-right">

          {/* FEATURED CARD */}

          <div className="featured-card">

            {/* ICON AREA */}

            <div className="featured-icon-box">
              <img
                src="/svg/Frame 54.svg"
                alt="Featured"
                className="featured-image"
              />
            </div>

            {/* CONTENT */}

            <div className="featured-content">
              <div className="small-card-content">
                <span className="featured-tag">
                    GETTING STARTED
                </span>

                <h3>
                    How to transition from a
                    traditional to a digital
                    bank
                </h3>

                <div className="featured-meta">
                    <span>David Grohl</span>
                    <span>17/08/24</span>
                </div>
              </div>

              <button className="read-more-btn">
                READ MORE
              </button>

            </div>

          </div>

          {/* SMALL CARDS */}

          <div className="insights-grid">

            <div className="small-card">
              <div className="small-card-content">
                <span className="featured-tag">
                    GETTING STARTED
                </span>

                <h3>
                    How to transition from a
                    traditional to a digital bank
                </h3>

                <div className="featured-meta">
                    <span>David Grohl</span>
                    <span>17/08/24</span>
                </div>
              </div>

              <button className="read-more-btn">
                READ MORE
              </button>

            </div>

            <div className="small-card">
              <div className="small-card-content">
                <span className="featured-tag">
                    GETTING STARTED
                </span>

                <h3>
                    How to transition from a
                    traditional to a digital bank
                </h3>

                <div className="featured-meta">
                    <span>David Grohl</span>
                    <span>17/08/24</span>
                </div>

              </div>
              <button className="read-more-btn">
                READ MORE
              </button>

            </div>

          </div>

          {/* BOTTOM LINK */}

          <a href="#" className="all-insights">
            <span>READ ALL INSIGHTS</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Insights;