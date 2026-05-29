import "./Footer.css";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* GLOW EFFECTS */}
      <div className="footer-bottom-glow"></div>
      <div className="footer-content">

        {/* LEFT */}
        <div className="footer-brand">
          <img
            src="/svg/n7-logo.svg"
            alt="N7 Logo"
            className="footer-logo"
          />
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <div className="footer-columns">
            {/* COLUMN 1 */}
            <div className="footer-column">
                <div className="footer-address">
                <h4>London</h4>
                <p>
                    Linktia Infosystems Ltd – CB7,
                    26 Main Road Sundridge,
                    TN14 6EP, England,
                    United Kingdom.
                </p>
                </div>

                <div className="footer-links">
                    <h4>Solutions</h4>
                    <a href="#">
                        Core Banking CB7
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Digital Banking N7
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Open Banking
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Loan Origination System
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Loan Management System
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Digital Transformation
                        <ArrowRight size={14} />
                    </a>
                </div>
            </div>

            {/* COLUMN 2 */}
            <div className="footer-column">
                <div className="footer-address">
                    <h4>Dubai</h4>
                    <p>
                        Linktia Infosystems Ltd –
                        CB7, Jumeirah Business
                        Center 5 Cluster W,
                        Jumeirah Lakes Towers,
                        Dubai, United Arab Emirates
                    </p>
                    </div>

                    <div className="footer-links">
                    <h4>N7 Banking</h4>
                    <a href="#">
                        About Us
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Solutions
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Contact
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Company
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Careers
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Insights
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Core Team
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        Brand Center
                        <ArrowRight size={14} />
                    </a>
                </div>
            </div>

            {/* COLUMN 3 */}
            <div className="footer-column">
                <div className="footer-address">
                    <h4>India</h4>
                    <p>
                        Linktia Infosystems Ltd –
                        CB7, Nirmal, Anand Nagar,
                        Suncity Road, Pune,
                        Maharashtra, 411041, India
                    </p>
                    </div>

                    <div className="footer-links">
                    <h4>Our Socials</h4>
                    <a href="#">
                        LinkedIn
                        <ArrowRight size={14} />
                    </a>

                    <a href="#">
                        X
                        <ArrowRight size={14} />
                    </a>
                </div>
            </div>

          </div>
          {/* COPYRIGHT */}

          <div className="footer-copyright">
            Copyright © 2022 by Linktia Infosystems Limited —
            [CB7 and N7 as Commercial Brand] —
            [Registered under the Companies Act 2006
            in England and Wales | Number of
            Incorporation 13100992]
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;