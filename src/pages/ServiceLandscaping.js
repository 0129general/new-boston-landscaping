import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Mock data (Ensure these image paths are correct relative to your public folder)
const galleryImages = [
  {
    id: 1,
    src: "assets/images/Portfolio-detail/landscaping1.jpg",
    alt: "Landscaping project 1",
    gridClass: "col-lg-4 col-md-4 col-sm-4 col-xs-6",
  },
  {
    id: 2,
    src: "assets/images/Portfolio-detail/landscaping4.jpg",
    alt: "Landscaping project 4",
    gridClass: "col-lg-4 col-md-4 col-sm-4 col-xs-6",
  },
  {
    id: 3,
    src: "assets/images/Portfolio-detail/landscaping2.jpg",
    alt: "Landscaping project 2",
    gridClass: "col-lg-4 col-md-4 col-sm-4 col-xs-6",
  },
  {
    id: 4,
    src: "assets/images/Portfolio-detail/landscaping3.jpg",
    alt: "Landscaping project 3",
    gridClass: "col-lg-4 col-md-4 col-sm-4 col-xs-6",
  },
];

const landscapingServices = [
  "Spring Clean Up",
  "Mulching & Bed Maintenance",
  "Weekly Maintenance",
  "Pruning & Shrub Care",
  "Seasonal Color",
  "Lawn Fertilization & Turf Management",
  "Fall Clean Up",
];

const relatedProjects = [
  {
    id: 1,
    src: "assets/images/our-work/pic1.jpg",
    alt: "Related Landscaping Project",
    link: "/services/landscaping",
  },
  {
    id: 2,
    src: "assets/images/our-work/pic2.jpg",
    alt: "Related Seasonal Project",
    link: "/services/seasonal", // Update with actual link if needed
  },
  {
    id: 3,
    src: "assets/images/our-work/pic3.jpg",
    alt: "Related Masonry Project",
    link: "/services/masonry", // Update with actual link if needed
  },
  {
    id: 4,
    src: "assets/images/our-work/pic4.jpg",
    alt: "Related Fences Project",
    link: "/services/fences", // Update with actual link if needed
  },
];

const ServiceLandscaping = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesVisible, setSlidesVisible] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesVisible(1);
      } else if (window.innerWidth < 992) {
        setSlidesVisible(2);
      } else {
        setSlidesVisible(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => 
          prev >= relatedProjects.length - slidesVisible ? 0 : prev + 1
        );
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slidesVisible]);

  // Simple carousel logic (shows 3 slides on desktop, adjust transform % if needed)
  // Consider a library like react-slick or swiper for production use
  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev >= relatedProjects.length - 3 ? 0 : prev + 1) // Adjust logic based on slides shown
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev === 0 ? relatedProjects.length - 3 : prev - 1) // Adjust logic based on slides shown
    );
  };

  // Calculate number of slides visible based on window width (basic example)
  // This is a basic approach; a more robust solution might use ResizeObserver
  const getSlidesVisible = () => {
    if (typeof window !== "undefined") {
      // Check if window exists (for server-side rendering)
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 992) return 2;
    }
    return 3;
  };

  const slideWidthPercentage = 100 / slidesVisible;
  const trackTransform = `translateX(-${currentSlide * slideWidthPercentage}%)`;

  return (
    <main>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="banner-content">
            <h1>Landscaping Services</h1>
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
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>Landscaping Services</li>
          </ul>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content-section">
        <div className="container">
          {/* Image Gallery */}
          <div className="image-gallery">
            {galleryImages.map((image) => (
              <div key={image.id} className={`gallery-item ${image.gridClass}`}>
                <img src={image.src} alt={image.alt} className="gallery-img" />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="divider">
            <span className="divider-dot"></span>
          </div>

          {/* Service Description */}
          <div className="service-description">
            <h6>
              Having a vibrant and attractive landscape is not only visually
              appealing but also increases the value of your property.
            </h6>
            <p>
              New Boston Landscaping understands this simple fact, and strives
              every day to help our customers get the very best from their
              projects.
            </p>
            <p>Here are some services we can offer for you:</p>
            <ul className="service-list">
              {landscapingServices.map((service, index) => (
                <li key={index}>
                  {/* TODO: Update Link destination when specific service pages are created */}
                  <Link
                    to={`/services/landscaping#${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="related-projects-section">
        <div className="container">
          <h2 className="section-title">Related Projects</h2>
          <div className="separator">
            <span className="separator-line"></span>
            <span className="separator-line"></span>
          </div>

          <div className="carousel-container">
            <button 
              className="carousel-control prev" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="carousel-track" style={{ transform: trackTransform }}>
              {relatedProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="carousel-slide"
                  style={{ width: `${slideWidthPercentage}%` }}
                >
                  <div className="project-card">
                    <img src={project.src} alt={project.alt} />
                    <div className="project-overlay">
                      <h3>{project.alt}</h3>
                      <Link to={project.link} className="view-project">
                        <FontAwesomeIcon icon={faLink} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="carousel-control next" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="carousel-indicators">
            {Array.from({ length: Math.ceil(relatedProjects.length / slidesVisible) }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${Math.floor(currentSlide / slidesVisible) === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index * slidesVisible)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .banner-section {
          position: relative;
          height: 300px;
          /* Ensure the path is correct relative to your public folder */
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

        .main-content-section {
          padding: 4rem 0;
        }

        .image-gallery {
          display: flex;
          flex-wrap: wrap;
          margin: -10px; /* Counteract item padding */
          margin-bottom: 2rem;
        }

        .gallery-item {
          padding: 10px; /* Spacing between items */
          box-sizing: border-box;
        }

        .gallery-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 0.25rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* Mimicking bootstrap grid classes for gallery layout */
        .col-xs-6 { width: 50%; }
        @media (min-width: 768px) {
          .col-sm-4 { width: 33.3333%; }
          .col-sm-8 { width: 66.6667%; }
        }
        @media (min-width: 992px) {
          .col-md-4 { width: 33.3333%; }
          .col-md-8 { width: 66.6667%; }
        }
        @media (min-width: 1200px) {
          .col-lg-4 { width: 33.3333%; }
          .col-lg-8 { width: 66.6667%; }
        }

        .divider {
          text-align: center;
          margin: 3rem 0;
          position: relative;
          height: 1px;
          background-color: #e0e0e0;
        }

        .divider-dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #007bff;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .service-description {
          text-align: justify;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #333;
        }

        .service-description h6 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #212529;
        }

        .service-description p {
          margin-bottom: 1rem;
        }

        .service-list {
          list-style: none;
          padding: 0;
          margin-top: 1.5rem;
          columns: 2;
          gap: 1rem;
        }

        .service-list li {
          margin-bottom: 0.75rem;
        }

        .service-list a {
          color: #007bff;
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
          padding-left: 1.5rem;
        }

        .service-list a::before {
          content: '\\2713'; /* Checkmark */
          position: absolute;
          left: 0;
          color: #28a745;
          font-weight: bold;
        }

        .service-list a:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        /* Related Projects Section */
        .related-projects-section {
          padding: 4rem 0;
          background-color: #f8f9fa; /* Light background for contrast */
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #212529;
          text-transform: uppercase;
        }

        .separator {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 3rem;
        }

        .separator-line {
          width: 50px;
          height: 3px;
          background-color: #007bff;
        }

        .carousel-container {
          position: relative;
          overflow: hidden;
          margin: 0 -15px;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-slide {
          padding: 0 15px;
          flex-shrink: 0;
        }

        .project-card {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-card img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          padding: 20px;
          color: white;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-overlay {
          transform: translateY(0);
        }

        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .carousel-control:hover {
          background: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .carousel-control.prev {
          left: 15px;
        }

        .carousel-control.next {
          right: 15px;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: #ddd;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #4CAF50;
          transform: scale(1.2);
        }

        @media (max-width: 992px) {
          .service-list {
            columns: 1;
          }
          .carousel-slide {
             min-width: 50%; /* Show 2 slides */
          }
        }

        @media (max-width: 768px) {
          .banner-content h1 {
            font-size: 2rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .image-gallery {
             margin: -5px;
          }
          .gallery-item {
             padding: 5px;
          }
          .carousel-slide {
             min-width: 100%; /* Show 1 slide */
          }
          .carousel-control {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </main>
  );
};

export default ServiceLandscaping;
