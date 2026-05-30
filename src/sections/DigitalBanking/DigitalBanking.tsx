import { Check, ArrowRight } from "lucide-react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./DigitalBanking.css";

const featureList1 = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
];

const featureList2 = [
  "Adaptive & Intelligent API monetization",
  "Ambient User Experience",
  "Cloud-native With lower TCO",
];

const featureList3 = [
  "Branchless & Paperless Banking",
  "Digital Transformation Capability",
  "Optimized, Adoptable and Scalable",
];

interface DigitalCardProps {
  image: string;
  title: string;
  desc: string;
  features: string[];
  index: number;
  reverse?: boolean;
  bgNumber?: string;
}

const DigitalCard = ({
  image,
  title,
  desc,
  features,
  index,
  reverse,
  bgNumber,
}: DigitalCardProps) => {
  const [cardRef, cardVisible] =
    useIntersectionObserver<HTMLDivElement>({ threshold: 0.12 });

  const delay = 100 + index * 120;

  return (
    <div
      className={`digital-card ${reverse ? "reverse" : ""} ${cardVisible ? "digital-card--visible" : ""}`}
      ref={cardRef}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {bgNumber && <div className="digital-bg-number">{bgNumber}</div>}

      <div className="phone-wrapper">
        <img
          src="/images/phone-frame.png"
          alt="Phone Frame"
          className="phone-frame"
        />
        <img
          src={image}
          alt="Screen"
          className="phone-screen"
        />
      </div>

      <div className="digital-info">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="feature-list">
          {features.map((f) => (
            <div className="feature-item" key={f}>
              <Check size={13} />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DigitalBanking = () => {
  const [leftRef, leftVisible] =
    useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [ctaRef, ctaVisible] =
    useIntersectionObserver<HTMLDivElement>({ threshold: 0.12 });

  const cards = [
    {
      image: "/images/mobile-screen-1.png",
      title: "Fully compliant with regulatory requirement",
      desc: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
      features: featureList1,
      bgNumber: undefined,
    },
    {
      image: "/images/mobile-screen-2.png",
      title: "No legacy IT systems",
      desc: "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
      features: featureList2,
      reverse: true,
      bgNumber: undefined,
    },
    {
      image: "/images/mobile-screen-3.png",
      title: "No traditional branches",
      desc: "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
      features: featureList3,
      bgNumber: "7",
    },
  ];

  return (
    <section className="digital-banking">
      {/* TOP MARQUEE */}
      <div className="digital-topbar">
        <div className="marquee-track">
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
        <div className="digital-bg-text">N7</div>

        {/* LEFT */}
        <div
          className={`digital-left ${leftVisible ? "digital-left--visible" : ""}`}
          ref={leftRef}
        >
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
          <div
            className={`digital-actions ${leftVisible ? "digital-actions--visible" : ""}`}
          >
            <button className="digi-primary-btn">REQUEST DEMO</button>
            <a href="#" className="digi-learn-more">
              <div className="digi-learn-content">
                <span className="digi-learn-more__text">LEARN MORE</span>
                <ArrowRight size={14} className="digi-learn-more__arrow" />
              </div>
              <div className="digi-learn-line"></div>
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
          {cards.map((card, i) => (
            <DigitalCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </div>

      {/* INNER CTA */}
      <div
        className={`digital-cta ${ctaVisible ? "digital-cta--visible" : ""}`}
        ref={ctaRef}
      >
        {/* BG TEXT */}
        <div className="digital-cta-bg">N7</div>

        {/* LEFT */}
        <div
          className={`digital-cta-left ${ctaVisible ? "digital-cta-left--visible" : ""}`}
        >
          <div className="digital-cta-text">
            <h2>
              Take the full advantage of
              <br />
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
        <div
          className={`digital-cta-actions ${ctaVisible ? "digital-cta-actions--visible" : ""}`}
        >
          <button className="digi-cta-secondary-btn">CONTACT US</button>
          <button className="digi-cta-primary-btn">REQUEST DEMO</button>
        </div>
      </div>
    </section>
  );
};

export default DigitalBanking;