// pages/About.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLeaf,
  faTh,
  faImage,
  faLifeRing,
  faTrophy,
  faThumbsUp,
  faUsers,
  faChartArea,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const serviceTypes = [
    {
      id: 1,
      icon: faHome,
      title: "Construction",
      link: "/services",
    },
    {
      id: 2,
      icon: faLeaf,
      title: "Seasonal Services",
      link: "/services/seasonal",
    },
    {
      id: 3,
      icon: faTh,
      title: "Masonry Services",
      link: "/services/masonry",
    },
    {
      id: 4,
      icon: faImage,
      title: "Landscaping Services",
      link: "/services/landscaping",
    },
  ];

  const whyChooseUs = [
    {
      id: 1,
      icon: faLifeRing,
      title: "BEST QUALITY",
    },
    {
      id: 2,
      icon: faTrophy,
      title: "INTEGRITY",
    },
    {
      id: 3,
      icon: faThumbsUp,
      title: "STRATEGY",
    },
    {
      id: 4,
      icon: faUsers,
      title: "SAFETY",
    },
    {
      id: 5,
      icon: faChartArea,
      title: "COMMUNITY",
    },
    {
      id: 6,
      icon: faCogs,
      title: "SUSTAINABILITY",
    },
  ];

  return (
    <main>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="banner-content">
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <section className="breadcrumb-section">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About</li>
          </ul>
        </div>
      </section>

      {/* About Company Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="assets/images/about-pic2.png" alt="About New Boston Landscaping" />
            </div>
            <div className="about-content">
              <div className="section-header">
                <h2>About Company</h2>
                <div className="separator">
                  <span className="separator-line"></span>
                  <span className="separator-line"></span>
                </div>
              </div>
              <p>
                With over 15 years of experience, we are pleased to offer our high-quality services to both residential and commercial businesses. We have been able to build a reputation of delivering personal service, and value to our customers throughout Metrowest and surrounding areas.
              </p>
              <p>
                We provide a wide variety of maintenance and seasonal services from weekly lawn care, to snow removal, spring/fall clean ups and more.
              </p>
              
              <div className="service-types">
                {serviceTypes.map((service) => (
                  <div key={service.id} className="service-type">
                    <div className="service-icon">
                      <Link to={service.link}>
                        <FontAwesomeIcon icon={service.icon} />
                      </Link>
                    </div>
                    <div className="service-info">
                      <h4>{service.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <div className="separator">
              <span className="separator-line"></span>
              <span className="separator-line"></span>
            </div>
          </div>
          
          <div className="features-grid">
            {whyChooseUs.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .banner-section {
          position: relative;
          height: 300px;
          background-image: url('assets/images/background/header.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .banner-content {
          position: relative;
          z-index: 2;
        }

        .banner-content h1 {
          font-size: 3rem;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0;
        }

        .breadcrumb-section {
          background-color: #f8f9fa;
          padding: 1rem 0;
        }

        .breadcrumb {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .breadcrumb li {
          display: flex;
          align-items: center;
          font-size: 1rem;
          color: #6c757d;
        }

        .breadcrumb li:not(:last-child)::after {
          content: '/';
          margin: 0 0.5rem;
          color: #6c757d;
        }

        .breadcrumb li a {
          color: #007bff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .breadcrumb li a:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-section {
          padding: 5rem 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 3rem;
          align-items: center;
        }

        .about-image img {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .section-header {
          margin-bottom: 2rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .separator {
          display: flex;
          gap: 10px;
          margin: 1rem 0;
        }

        .separator-line {
          width: 50px;
          height: 3px;
          background-color: #007bff;
        }

        .about-content p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: #495057;
        }

        .service-types {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .service-type {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .service-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background-color: #007bff;
          color: white;
          border-radius: 50%;
          font-size: 1.25rem;
        }

        .service-icon a {
          color: white;
          text-decoration: none;
        }

        .service-info h4 {
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          margin: 0;
        }

        .why-choose-section {
          padding: 5rem 0;
          background-color: #f8f9fa;
        }

        .why-choose-section .section-header {
          text-align: center;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          background-color: white;
          border-radius: 0.5rem;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          font-size: 2.5rem;
          color: #007bff;
          margin-bottom: 1.5rem;
        }

        .feature-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          text-transform: uppercase;
          margin: 0;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .banner-content h1 {
            font-size: 2rem;
          }

          .service-types {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};

export default About;
