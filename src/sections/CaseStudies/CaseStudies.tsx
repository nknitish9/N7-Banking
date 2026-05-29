import "./CaseStudies.css";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Zap,
} from "lucide-react";

const caseStudies = [
  {
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
  },
  {
    title: "How digital banking transformed customer journeys",
    company: "SmartFinder",
  },
  {
    title: "Increasing engagement with modern banking system",
    company: "ArtVenue",
  },
  {
    title: "Reducing the operational costs with N7",
    company: "Kontrastr",
  },
];

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % caseStudies.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + caseStudies.length) %
        caseStudies.length
    );
  };

  const nextSlide = () => {
    setActiveIndex(
      (prev) => (prev + 1) % caseStudies.length
    );
  };

  return (
    <section className="case-studies">

      <h2 className="case-title">
        Our Case Studies
      </h2>

      <div className="case-carousel">

        <div className="fade-left"></div>
        <div className="fade-right"></div>

        {caseStudies.map((item, index) => {
          let position = "hidden";

          if (index === activeIndex)
            position = "active";

          else if (
            index ===
            (activeIndex - 1 + caseStudies.length) %
              caseStudies.length
          )
            position = "prev";

          else if (
            index ===
            (activeIndex + 1) %
              caseStudies.length
          )
            position = "next";

          return (
            <div
              key={index}
              className={`case-slide ${position}`}
            >
              <div className="case-card">

                <div className="case-image">
                  <img
                    src="/svg/Frame 54.svg"
                    alt="Case Study"
                    className="case-image-svg"
                  />
                </div>

                <div className="case-content">

                  <div>
                    <span className="case-tag">
                      GETTING STARTED
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <div className="case-company">
                      <div className="company-icon">
                        <Zap
                          size={16}
                          fill="currentColor"
                        />
                      </div>

                      <span>
                        {item.company}
                      </span>
                    </div>
                  </div>

                  <button className="case-btn">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="case-footer">
        <div className="case-pagination">
          <button
            className="nav-btn"
            onClick={prevSlide}
          >
            <ArrowLeft size={18} />
          </button>

          <div className="pagination-dots">
            {caseStudies.map((_, index) => (
              <span
                key={index}
                className={
                  index === activeIndex
                    ? "active"
                    : ""
                }
              />
            ))}
          </div>

          <button
            className="nav-btn"
            onClick={nextSlide}
          >
            <ArrowRight size={18} />
          </button>

        </div>

        <a href="#" className="view-all">
          <div className="view-all-content">
            <span>VIEW ALL</span>
            <ArrowRight size={14} />
          </div>
        </a>

      </div>

    </section>
  );
};

export default CaseStudies;