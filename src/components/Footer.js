// components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const usefulLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { icon: faFacebook, url: "#", label: "Facebook" },
    { icon: faTwitter, url: "#", label: "Twitter" },
    { icon: faLinkedin, url: "#", label: "LinkedIn" },
    { icon: faYoutube, url: "#", label: "YouTube" },
    { icon: faInstagram, url: "#", label: "Instagram" },
  ];

  const contactInfo = [
    { icon: faMapMarkerAlt, text: "Ashland, Massachusetts" },
    { icon: faPhone, text: "617 763 1191" },
    { icon: faEnvelope, text: "newbostonlandscaping@gmail.com" },
    { icon: faClock, text: "Mon-Sat: 8:00 AM - 6:00 PM" },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">
                <img
                  src="assets/images/logo-light.svg"
                  alt="New Boston Landscaping & Construction"
                  width="200"
                  height="50"
                />
              </div>
              <p>
                We provide a wide variety of maintenance and seasonal services
                for residential and commercial properties.
              </p>
              <div className="social-icons">
                {socialLinks.map(({ icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer-links">
              <h5>Quick Links</h5>
              <ul>
                {usefulLinks.map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to} className="footer-link">
                      <FontAwesomeIcon icon={faAngleDoubleRight} className="link-icon" />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-contact">
              <h5>Contact Info</h5>
              <ul>
                {contactInfo.map(({ icon, text }, index) => (
                  <li key={index} className="contact-item">
                    <div className="contact-icon">
                      <FontAwesomeIcon icon={icon} />
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-cta">
              <h5>Ready to Transform Your Space?</h5>
              <p>
                We are ready to build your dream. Tell us more about your project.
              </p>
              <Link to="/contact" className="cta-button">
                Contact us <FontAwesomeIcon icon={faAngleDoubleRight} className="button-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="center-content">
            <p>
              &copy; {currentYear}{" "}
              <a 
                href="http://ratesoffice.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="copyright-link"
              >
                Rates Office
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: #212529;
          color: #f8f9fa;
          position: relative;
          overflow: hidden;
        }
        
        .site-footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('assets/images/background/pattern.png');
          background-size: 200px;
          opacity: 0.03;
          pointer-events: none;
        }

        .footer-top {
          padding: 4rem 0;
          position: relative;
        }
        
        .footer-top::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .footer-about {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .footer-logo {
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .footer-logo img {
          max-width: 200px;
          height: auto;
          transition: all 0.3s ease;
        }
        
        .footer-logo:hover img {
          transform: scale(1.05);
        }

        .footer-about p {
          color: #adb5bd;
          line-height: 1.6;
          margin: 0;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .social-icon::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #28a745, #20c997);
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 0;
        }
        
        .social-icon:hover::before {
          opacity: 1;
        }
        
        .social-icon svg {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .social-icon:hover svg {
          transform: rotate(360deg);
        }

        .footer-links h5,
        .footer-contact h5,
        .footer-cta h5 {
          margin: 0 0 1.5rem 0;
          font-size: 1.25rem;
          font-weight: 600;
          position: relative;
          padding-bottom: 0.75rem;
        }
        
        .footer-links h5::after,
        .footer-contact h5::after,
        .footer-cta h5::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg, #28a745, #20c997);
          border-radius: 2px;
        }

        .footer-links ul,
        .footer-contact ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #adb5bd;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.25rem 0;
          position: relative;
        }
        
        .footer-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #28a745, #20c997);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }

        .footer-link:hover {
          color: #fff;
          padding-left: 0.5rem;
        }
        
        .link-icon {
          font-size: 0.75rem;
          color: #28a745;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover .link-icon {
          transform: translateX(5px);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #adb5bd;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          color: #fff;
          transform: translateX(5px);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: rgba(40, 167, 69, 0.1);
          color: #28a745;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover .contact-icon {
          background-color: #28a745;
          color: #fff;
          transform: rotate(360deg);
        }

        .footer-cta {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .footer-cta p {
          color: #adb5bd;
          line-height: 1.6;
          margin: 0;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #28a745, #20c997);
          color: #fff;
          font-weight: 600;
          text-transform: uppercase;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(40, 167, 69, 0.3);
          position: relative;
          overflow: hidden;
          align-self: flex-start;
        }
        
        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: all 0.5s ease;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(40, 167, 69, 0.4);
        }
        
        .button-icon {
          transition: transform 0.3s ease;
        }
        
        .cta-button:hover .button-icon {
          transform: translateX(5px);
        }

        .footer-bottom {
          background-color: #1a1d20;
          padding: 1.5rem 0;
          text-align: center;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .footer-bottom p {
          margin: 0;
          color: #adb5bd;
          font-size: 0.875rem;
          text-align: center;
        }

        .copyright-link {
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .copyright-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #28a745;
          transition: width 0.3s ease;
        }
        
        .copyright-link:hover::after {
          width: 100%;
        }

        .copyright-link:hover {
          color: #28a745;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
          
          .footer-cta {
            grid-column: span 2;
            align-items: center;
            text-align: center;
          }
          
          .cta-button {
            align-self: center;
          }
        }

        @media (max-width: 768px) {
          .footer-top {
            padding: 3rem 0;
          }
          
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .footer-cta {
            grid-column: auto;
          }
          
          .footer-links h5,
          .footer-contact h5,
          .footer-cta h5 {
            text-align: center;
          }
          
          .footer-links h5::after,
          .footer-contact h5::after,
          .footer-cta h5::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .footer-about {
            align-items: center;
            text-align: center;
          }
          
          .center-content{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4rem;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
          }
          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
