import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { 
      to: "/services", 
      label: "Services",
      dropdown: [
        { to: "/service-landscaping", label: "Landscaping" },
        { to: "/service-masonry", label: "Masonry" },
        { to: "/service-seasonal", label: "Seasonal Services" },
      ]
    },
    { to: "/gallery", label: "Gallery" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { icon: faFacebook, url: "#", label: "Facebook" },
    { icon: faTwitter, url: "#", label: "Twitter" },
    { icon: faLinkedin, url: "#", label: "LinkedIn" },
    { icon: faYoutube, url: "#", label: "YouTube" },
    { icon: faInstagram, url: "#", label: "Instagram" },
  ];

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <a
              href="mailto:newbostonlandscaping@gmail.com"
              aria-label="Email us"
              className="contact-link"
            >
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              </div>
              <span className="contact-text">newbostonlandscaping@gmail.com</span>
            </a>
            <a href="tel:6177631191" aria-label="Call us" className="contact-link">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              </div>
              <span className="contact-text">617 763 1191</span>
            </a>
          </div>
          <div className="social-links">
            {socialLinks.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <div className="social-icon-wrapper">
                  <FontAwesomeIcon icon={icon} className="social-icon" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <Link to="/" className="logo">
            <img
              src="assets/images/logo-dark.svg"
              alt="New Boston Landscaping & Construction"
              width="200"
              height="50"
            />
          </Link>

          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>

          <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
            <ul>
              {navLinks.map(({ to, label, dropdown }, index) => (
                <li key={label} className={dropdown ? "has-dropdown" : ""}>
                  <Link to={to} className="nav-link">
                    {label}
                    {dropdown && (
                      <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                    )}
                  </Link>
                  {dropdown && (
                    <div 
                      className={`dropdown-menu ${activeDropdown === index ? "active" : ""}`}
                      onClick={() => toggleDropdown(index)}
                    >
                      <ul>
                        {dropdown.map(({ to, label }) => (
                          <li key={label}>
                            <Link to={to}>{label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .site-header {
          position: relative;
          z-index: 1000;
        }

        .top-bar {
          background: linear-gradient(90deg, #28a745, #20c997);
          padding: 0.75rem 0;
          font-size: 0.9rem;
          color: white;
          transition: all 0.3s ease;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-info {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .contact-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: all 0.5s ease;
        }

        .contact-link:hover::before {
          left: 100%;
        }

        .contact-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .contact-icon {
          font-size: 1rem;
          color: white;
          transition: all 0.3s ease;
        }

        .contact-text {
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .contact-link:hover .contact-icon-wrapper {
          background: white;
          transform: rotate(360deg);
        }

        .contact-link:hover .contact-icon {
          color: #28a745;
        }

        .contact-link:hover .contact-text {
          transform: translateX(5px);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .social-icon-wrapper {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .social-icon {
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .social-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #28a745, #20c997);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .social-link:hover::before {
          opacity: 1;
        }

        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .social-link:hover .social-icon-wrapper {
          transform: rotate(360deg);
        }

        .main-header {
          background: white;
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          transition: all 0.3s ease;
        }

        .main-header.scrolled {
          padding: 0.5rem 0;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
        }

        .logo {
          display: block;
          transition: all 0.3s ease;
        }

        .logo img {
          max-height: 50px;
          width: auto;
          transition: all 0.3s ease;
        }

        .main-header.scrolled .logo img {
          max-height: 40px;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          color: #28a745;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle:hover {
          color: #218838;
        }

        .main-nav ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0;
          position: relative;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #28a745, #20c997);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link:hover {
          color: #28a745;
        }

        .dropdown-icon {
          font-size: 0.75rem;
          transition: transform 0.3s ease;
        }

        .has-dropdown:hover .dropdown-icon {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          min-width: 200px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border-radius: 0.5rem;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          z-index: 100;
          padding: 0.5rem 0;
        }

        .dropdown-menu.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .has-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-menu ul {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 0;
          margin: 0;
        }

        .dropdown-menu li {
          padding: 0;
        }

        .dropdown-menu a {
          display: block;
          padding: 0.75rem 1.5rem;
          color: #333;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .dropdown-menu a:hover {
          background-color: rgba(40, 167, 69, 0.1);
          color: #28a745;
          padding-left: 2rem;
        }

        @media (max-width: 992px) {
          .contact-info {
            gap: 1rem;
          }

          .contact-text {
            display: none;
          }

          .contact-link {
            padding: 0.5rem;
          }

          .contact-icon-wrapper {
            width: 32px;
            height: 32px;
          }
        }

        @media (max-width: 768px) {
          .top-bar {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: block;
          }

          .main-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            max-height: 80vh;
            overflow-y: auto;
          }

          .main-nav.active {
            display: block;
          }

          .main-nav ul {
            flex-direction: column;
            gap: 0;
          }
          
          .main-nav li {
            width: 100%;
          }
          
          .nav-link {
            padding: 1rem 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }
          
          .dropdown-menu {
            position: static;
            box-shadow: none;
            opacity: 1;
            visibility: visible;
            transform: none;
            display: none;
            padding: 0;
            background-color: rgba(0, 0, 0, 0.02);
          }
          
          .dropdown-menu.active {
            display: block;
          }
          
          .dropdown-menu a {
            padding: 0.75rem 1.5rem 0.75rem 2.5rem;
          }
          
          .has-dropdown:hover .dropdown-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

Header.propTypes = {
  // Add any props if needed in the future
};

export default Header;
