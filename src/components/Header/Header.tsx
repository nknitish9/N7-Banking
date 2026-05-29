import "./Header.css";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">N7</div>

        <div className="navbar-right">
          <ul className="nav-links">
            <li>
              SOLUTIONS <ChevronDown className="nav-arrow" />
            </li>

            <li>
              RESOURCES <ChevronDown className="nav-arrow" />
            </li>

            <li>ABOUT US</li>
          </ul>

          <button className="demo-btn">
            REQUEST DEMO
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;