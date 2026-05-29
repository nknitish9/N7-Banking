import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import useScrollDirection from "../../hooks/useScrollDirection";
import "./Header.css";

const Header = () => {
  const { direction, isAtTop, scrollY } = useScrollDirection({
    threshold: 8,
    topOffset: 32,
  });

  // Hide on downward scroll once we are past the top of the page.
  const isHidden = direction === "down" && !isAtTop && scrollY > 120;

  // Trigger the entrance animation only after the component has mounted
  // (avoids a flash on the very first paint).
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const headerClassName = [
    "header",
    mounted ? "is-mounted" : "",
    isHidden ? "is-hidden" : "",
    !isAtTop ? "is-scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName}>
      <nav className="navbar">
        <a href="#top" className="logo" aria-label="N7 — Back to top">
          N7
        </a>

        <div className="navbar-right">
          <ul className="nav-links">
            <li className="nav-item">
              <span className="nav-item__label">SOLUTIONS</span>
              <ChevronDown className="nav-arrow" aria-hidden="true" />
            </li>

            <li className="nav-item">
              <span className="nav-item__label">RESOURCES</span>
              <ChevronDown className="nav-arrow" aria-hidden="true" />
            </li>

            <li className="nav-item">
              <span className="nav-item__label">ABOUT US</span>
            </li>
          </ul>

          <button className="demo-btn" type="button">
            <span className="demo-btn__label">REQUEST DEMO</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
