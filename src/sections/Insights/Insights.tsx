import { ArrowRight } from "lucide-react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./Insights.css";

const smallCards = [
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

const Insights = () => {
  const [sectionRef, sectionVisible] =
    useIntersectionObserver<HTMLElement>({ threshold: 0.08 });

  return (
    <section
      className={`insights ${sectionVisible ? "insights--visible" : ""}`}
      ref={sectionRef}
    >
      {/* LEFT GLOW */}
      <div className="insights-glow"></div>

      <div className="insights-content">
        {/* LEFT */}
        <div
          className={`insights-left ${sectionVisible ? "insights-left--visible" : ""}`}
        >
          <div className="insights-left-content">
            <h2>
              Get yourself up-to-speed on
              <br />
              all the things happening in
              <br />
              fintech
            </h2>

            <button className="insights-btn">INSIGHTS</button>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`insights-right ${sectionVisible ? "insights-right--visible" : ""}`}
        >
          {/* FEATURED CARD */}
          <div
            className={`featured-card ${sectionVisible ? "featured-card--visible" : ""}`}
          >
            <div className="featured-icon-box">
              <img
                src="/svg/Frame 54.svg"
                alt="Featured"
                className="featured-image"
              />
            </div>

            <div className="featured-content">
              <div className="small-card-content">
                <span className="featured-tag">GETTING STARTED</span>

                <h3>
                  How to transition from a
                  <br />
                  traditional to a digital bank
                </h3>

                <div className="featured-meta">
                  <span>David Grohl</span>
                  <span>17/08/24</span>
                </div>
              </div>

              <button className="read-more-btn">READ MORE</button>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="insights-grid">
            {smallCards.map((card, i) => (
              <div
                className={`small-card ${sectionVisible ? `small-card--visible` : ""}`}
                key={i}
                style={{ transitionDelay: `${500 + i * 120}ms` }}
              >
                <div className="small-card-content">
                  <span className="featured-tag">{card.tag}</span>

                  <h3>{card.title}</h3>

                  <div className="featured-meta">
                    <span>{card.author}</span>
                    <span>{card.date}</span>
                  </div>
                </div>

                <button className="read-more-btn">READ MORE</button>
              </div>
            ))}
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