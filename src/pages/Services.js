// pages/Services.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faLeaf, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Landscaping Services",
      image: "assets/images/our-work/pic1.jpg",
      description:
        "Flower bed planting, Lawn Repair, Mulch Application, Shrub Installation [...]",
      link: "/services_landscaping",
    },
    {
      id: 2,
      title: "Seasonal Services",
      image: "assets/images/our-work/pic2.jpg",
      description:
        "Fall Clean Up, Lawn Aerating, Snow Removal, Spring Clean Up [...]",
      link: "/services_seasonal",
    },
    {
      id: 3,
      title: "Masonry Services",
      image: "assets/images/our-work/pic3.jpg",
      description:
        "Stone Walls, Installing Paving Stone, Asphalt Driveways, Firepits, Patios, Walkways [...]",
      link: "/services_masonry",
    },
    {
      id: 4,
      title: "Fences",
      image: "assets/images/our-work/pic4.jpg",
      description:
        "We offer a comprehensive selection of high quality fences from maintenance free vinyl and aluminum to traditional wood and functional chain link. The vinyl styles with a full solid panel. [...]",
      link: "/services_fences",
    },
  ];

  return (
    <main>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="banner-content">
            <h1>Services</h1>
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
            <li>Services</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-content">
            <div className="section-header">
              <h2 className="section-title">Our Services</h2>
              <div className="section-divider">
                <span className="divider-line"></span>
                <span className="divider-icon">
                  <FontAwesomeIcon icon={faLeaf} />
                </span>
                <span className="divider-line"></span>
              </div>
              <p className="section-subtitle">
                What we can offer for you. If you have questions, just give us a call
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                    <div className="service-overlay">
                      <Link to={service.link} className="service-link">
                        <span>Learn More</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                  <div className="service-content">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <h3>
                      <Link to={service.link}>{service.title}</Link>
                    </h3>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      {service.features?.map((feature, index) => (
                        <li key={index}>
                          <FontAwesomeIcon icon={faCheck} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .banner-section {
          position: relative;
          height: 300px;
          background-image: url("assets/images/background/header.jpg");
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
          content: "/";
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

        .services-section {
          padding: 6rem 0;
          background-color: #f8f9fa;
        }

        .services-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #212529;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
        }

        .divider-line {
          width: 50px;
          height: 2px;
          background-color: #28a745;
        }

        .divider-icon {
          color: #28a745;
          font-size: 1.5rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .service-card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        .service-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.1);
        }

        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .service-overlay {
          opacity: 1;
        }

        .service-link {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: 2px solid white;
          border-radius: 2rem;
          transition: all 0.3s ease;
        }

        .service-link:hover {
          background: white;
          color: #28a745;
        }

        .service-content {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-icon {
          width: 50px;
          height: 50px;
          background: #28a745;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .service-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .service-content h3 a {
          color: #212529;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .service-content h3 a:hover {
          color: #28a745;
        }

        .service-content p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
          margin-top: auto;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #495057;
          margin-bottom: 0.5rem;
        }

        .service-features li svg {
          color: #28a745;
          font-size: 0.875rem;
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 4rem 0;
          }

          .services-content {
            gap: 3rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 500px;
          }

          .service-card {
            max-width: 100%;
          }

          .service-image {
            height: 200px;
          }
        }
      `}</style>
    </main>
  );
};

export default Services;
