import "./Hero.css";
import {
  Bell,
  HandCoins,
  BadgeDollarSign,
  LayoutGrid,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-heading-group">
            <h1>
              The new foundation
              <br />
              of modern banking
            </h1>

            <p>
              We drive innovation and growth, provide seamless
              customer experience and operational excellence
            </p>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn">
              REQUEST DEMO
            </button>

            <button className="secondary-btn">
              CONTACT US
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow"></div>
          {/* Main Image */}
          <img
            src="/images/hero-image.png"
            alt="Modern Banking"
            className="main-image"
          />

          {/* Balance Card */}
          <div className="balance-card">
            <div className="balance-card-inner">

              {/* TOP */}
              <div className="balance-top">
                <div className="user-info">
                  <img
                    src="/images/avatar1.jpg"
                    alt="avatar"
                    className="avatar"
                  />

                  <div className="user-info-text">
                    <h4>Toni Kross</h4>
                    <p>Good Morning</p>
                  </div>
                </div>
                <div className="notification">
                  <Bell size={14} strokeWidth={2} />
                </div>
              </div>

              {/* BALANCE */}
              <div className="balance-middle">
                <span>Total balance</span>
                <h2>$42,295.00 USD</h2>
              </div>
              <div className="balance-divider"></div>

              {/* ACTIONS */}
              <div className="balance-actions">
                <div className="action-item">
                  <div className="icon-box">
                    <HandCoins size={20} />
                  </div>
                  <p>Fund Transfer</p>
                </div>
                <div className="action-item">
                  <div className="icon-box">
                    <BadgeDollarSign size={20} />
                  </div>
                  <p>Add Money</p>
                </div>
                <div className="action-item">
                  <div className="icon-box">
                    <LayoutGrid size={20} />
                  </div>
                  <p>More</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Card */}
          <div className="activity-card">
            <div className="activity-card-inner">
              <h3>Recent activity</h3>
              <div className="activity-tabs">
                <span>This Day</span>
                <span className="active">This Week</span>
                <span>This Month</span>
                <span>6 Month</span>
              </div>

              <div className="activity-content">
                <div className="activity-left">
                  <div className="arrow-box">
                    ↗
                  </div>
                  <div>
                    <h4>
                      To Jin <span>. Work</span>
                    </h4>

                    <p>12 jun 2022</p>
                  </div>
                </div>
                <h4>-$59</h4>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trusted By Section */}
      <section className="trusted">
        <h3>Trusted By:</h3>
        <div className="trusted-logos">
          <div className="brand shells">
            <span className="logo-icon"></span>
            SHELLS
          </div>

          <div className="brand smartfinder">
            <span className="logo-icon"></span>
            SmartFinder
          </div>

          <div className="brand zoomerr">
            <span className="logo-icon"></span>
            Zoomerr
          </div>

          <div className="brand artvenue">
            <span className="logo-icon"></span>
            ArtVenue
          </div>

          <div className="brand kontrastr">
            <span className="logo-icon"></span>
            kontrastr
          </div>

          <div className="brand waves">
            <span className="logo-icon"></span>
            WAVESMARATHON
          </div>

        </div>
      </section>
    </section>
  );
};

export default Hero;