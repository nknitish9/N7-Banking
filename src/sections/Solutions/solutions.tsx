import { ArrowRight } from "lucide-react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./Solutions.css";

const cardData = [
  {
    icon: "/svg/core.svg",
    title: "Core Banking CB7",
    badge: null,
    desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: "/svg/digital.svg",
    title: "Digital Banking N7",
    badge: null,
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: "/svg/open.svg",
    title: "Open Banking",
    badge: null,
    desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    icon: "/svg/loanO.svg",
    title: "Loan Origination System",
    badge: "NBFC",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: "/svg/loanM.svg",
    title: "Loan Management System",
    badge: "NBFC",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
];

interface CardProps {
  icon: string;
  title: string;
  badge: string | null;
  desc: string;
  index: number;
}

const SolutionCard = ({ icon, title, badge, desc, index }: CardProps) => {
  const [cardRef, cardVisible] =
    useIntersectionObserver<HTMLDivElement>({ threshold: 0.15 });

  const delay = 100 + index * 80;

  return (
    <div
      className={`solutions-card ${cardVisible ? "solutions-card--visible" : ""}`}
      ref={cardRef}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {badge && <span className="solutions-badge">{badge}</span>}

      <div className="solutions-card-icon">
        <img
          src={icon}
          alt={`${title} icon`}
          className="solution-icon-img"
        />
      </div>

      <h3>{title}</h3>

      <p>{desc}</p>

      <a href="#" className="learn-more">
        <span className="learn-more__text">LEARN MORE</span>
        <ArrowRight size={14} className="learn-more__arrow" />
      </a>
    </div>
  );
};

const Solutions = () => {
  const [sectionRef, sectionVisible] =
    useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      className={`solutions ${sectionVisible ? "solutions--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="solutions-content">
        {/* LEFT SIDE */}
        <div
          className={`solutions-header ${sectionVisible ? "solutions-header--visible" : ""}`}
        >
          <h2>
            All of our solutions are
            <br />
            tailor-made to your needs
          </h2>

          <button className="solutions-btn">
            REQUEST DEMO
          </button>
        </div>

        {/* RIGHT SIDE — grid */}
        <div className="solutions-grid">
          {cardData.map((card, i) => (
            <SolutionCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </div>

      <div className="solutions-glow-wrapper" aria-hidden="true">
        <div className="solutions-glow"></div>
      </div>
    </section>
  );
};

export default Solutions;