// pages/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLeaf,
  faTh,
  faImage,
  faUserCircle,
  faAngleDoubleRight,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "assets/images/main-slider/slider2/slide2.jpg",
      title: "We Build Your Dream",
      subtitle: "Get in touch for a free estimate",
      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
    {
      id: 2,
      image: "assets/images/main-slider/slider2/slide3.jpg",
      title: "Landscaping Services",
      subtitle: "",
      buttonText: "Read more",
      buttonLink: "/services",
    },
    {
      id: 3,
      image: "assets/images/main-slider/slider2/slide1.jpg",
      title: "Masonry Services & Fences",
      subtitle: "",
      buttonText: "Read more",
      buttonLink: "/services",
    },
    {
      id: 4,
      image: "assets/images/main-slider/slider2/slide4.jpg",
      title: "Heavy Equipment Snow Removal",
      subtitle: "Get in touch for a free estimate",
      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
  ];

  const services = [
    {
      id: 1,
      image: "assets/images/our-work/pic1.jpg",
      title: "Landscaping",
      description: "Flower bed planting, Lawn Repair, Mulch Application, Shrub Installation...",
      link: "/services/landscaping",
      icon: faLeaf,
    },
    {
      id: 2,
      image: "assets/images/our-work/pic2.jpg",
      title: "Seasonal",
      description: "Fall Clean Up, Lawn Aerating, Snow Removal, Spring Clean Up...",
      link: "/services/seasonal",
      icon: faLeaf,
    },
    {
      id: 3,
      image: "assets/images/our-work/pic3.jpg",
      title: "Masonry",
      description: "Stone Walls, Paving, Asphalt, Firepits, Patios, Walkways...",
      link: "/services/masonry",
      icon: faTh,
    },
    {
      id: 4,
      image: "assets/images/our-work/pic4.jpg",
      title: "Fences",
      description: "Vinyl, Wood, Chain Link, Aluminum fencing and installation...",
      link: "/services/fences",
      icon: faImage,
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "They did an amazing job! Thank you!",
      name: "David Matin",
    },
    {
      id: 2,
      text: "I tried a few landscaping services before New Boston Landscaping and no one compares! They are fantastic. So professional, thorough and flexible. I highly recommend them!",
      name: "Matt",
    },
    {
      id: 3,
      text: "I highly recommend New Boston for your home. They are reliable, friendly, trust-worthy, and professional. My home looks great after their work. Our friends always comment about how great our house looks :)",
      name: "Amanda",
    },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main>
      {/* Hero Slider Section */}
      <section className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay"></div>
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
                <Link to={slide.buttonLink} className="slide-button">
                  {slide.buttonText} <FontAwesomeIcon icon={faAngleDoubleRight} />
                </Link>
              </div>
            </div>
          ))}
          <div className="slider-controls">
            {slides.map((_, index) => (
              <button 
                key={index} 
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-content">
            <div className="section-header">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">Professional solutions to improve and maintain your property</p>
              <div className="section-divider">
                <span className="divider-line"></span>
                <span className="divider-icon">
                  <FontAwesomeIcon icon={faLeaf} />
                </span>
                <span className="divider-line"></span>
              </div>
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
                    <h3>{service.title}</h3>
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

      {/* About Company Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <div className="section-header">
                <h2 className="section-title">About Company</h2>
                <div className="section-divider">
                  <span className="divider-line"></span>
                  <span className="divider-icon">
                    <FontAwesomeIcon icon={faLeaf} />
                  </span>
                  <span className="divider-line"></span>
                </div>
              </div>
              <div className="about-text">
                <p className="highlight-text">
                  With over 15 years of experience, we are pleased to offer our high-quality services to both residential and commercial businesses.
                </p>
                <p>
                  We have been able to build a reputation of delivering personal service, and value to our customers throughout Metrowest and surrounding areas.
                </p>
                <p>
                  We provide a wide variety of maintenance and seasonal services from weekly lawn care, to snow removal, spring/fall clean ups and more.
                </p>
              </div>
              
              <div className="service-types">
                {serviceTypes.map((service) => (
                  <Link to={service.link} key={service.id} className="service-type">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <div className="service-info">
                      <h4>{service.title}</h4>
                      <span className="service-arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="about-image">
              <img src="assets/images/about-pic2.png" alt="About New Boston Landscaping" />
              <div className="experience-badge">
                <span className="years">15+</span>
                <span className="text">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="overlay"></div>
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <div className="separator">
              <span className="separator-line"></span>
              <span className="separator-line"></span>
            </div>
          </div>
          
          <div className="testimonials-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-icon">
                  <FontAwesomeIcon icon={faUserCircle} />
                </div>
                <div className="testimonial-content">
                  <p>{testimonial.text}</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-slider {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .slider-container {
          position: relative;
          height: 100%;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .slide.active {
          opacity: 1;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .slide-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
          padding: 100px 20px;
          text-align: center;
          color: white;
        }

        .slide-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .slide-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.85;
        }

        .slide-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #007bff;
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.75rem 1.5rem;
          border-radius: 0.25rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .slide-button:hover {
          background-color: #0056b3;
          transform: translateY(-3px);
        }

        .slider-controls {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 3;
        }

        .slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-dot.active {
          background-color: white;
          transform: scale(1.2);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
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

        .section-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          margin-bottom: 2rem;
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
          height: 200px;
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
          color: #212529;
          margin-bottom: 1rem;
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

        .about-section {
          padding: 6rem 0;
          background-color: #f8f9fa;
          position: relative;
          overflow: hidden;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 4rem;
          align-items: center;
        }

        .about-content {
          position: relative;
          z-index: 2;
        }

        .about-text {
          margin: 2rem 0;
        }

        .highlight-text {
          font-size: 1.25rem;
          color: #28a745;
          font-weight: 500;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .about-text p {
          color: #495057;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
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
          padding: 1rem;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }

        .service-type:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background: #28a745;
          color: white;
        }

        .service-type:hover .service-icon {
          background: white;
          color: #28a745;
        }

        .service-type:hover .service-arrow {
          transform: translateX(5px);
          opacity: 1;
        }

        .service-icon {
          width: 50px;
          height: 50px;
          background: #28a745;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          transition: all 0.3s ease;
        }

        .service-info {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .service-info h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .service-arrow {
          opacity: 0;
          transition: all 0.3s ease;
        }

        .about-image {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .about-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .about-image:hover img {
          transform: scale(1.05);
        }

        .experience-badge {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          background: rgba(40, 167, 69, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #28a745;
          padding: 1rem;
          border-radius: 0.5rem;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .experience-badge:hover {
          background: rgba(40, 167, 69, 0.15);
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .experience-badge .years {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
          color: #28a745;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .experience-badge .text {
          font-size: 0.875rem;
          color: #28a745;
          opacity: 0.9;
          font-weight: 500;
        }

        .testimonials-section {
          position: relative;
          padding: 5rem 0;
          background-image: url('assets/images/background/bg3.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: white;
        }

        .testimonials-section .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
        }

        .testimonials-section .container {
          position: relative;
          z-index: 2;
        }

        .testimonials-section .section-header h2 {
          color: white;
        }

        .testimonials-slider {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .testimonial-card {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          background-color: rgba(255, 255, 255, 0.15);
        }

        .testimonial-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: #007bff;
        }

        .testimonial-content p {
          font-style: italic;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .testimonial-author {
          font-size: 1.1rem;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-image {
            max-width: 600px;
            margin: 0 auto;
          }

          .service-types {
            grid-template-columns: repeat(2, 1fr);
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .slide-title {
            font-size: 2rem;
          }

          .slide-subtitle {
            font-size: 1rem;
          }

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

          .about-section {
            padding: 4rem 0;
          }

          .highlight-text {
            font-size: 1.1rem;
          }

          .about-text p {
            font-size: 1rem;
          }

          .experience-badge {
            bottom: 1rem;
            right: 1rem;
            padding: 0.75rem;
            background: rgba(40, 167, 69, 0.15);
          }

          .experience-badge .years {
            font-size: 1.5rem;
          }

          .experience-badge .text {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </main>
  );
};

export default Home;
