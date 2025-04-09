// pages/Reviews.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPencilAlt,
  faAngleDoubleRight,
  faQuoteLeft,
  faUserCircle,
  faStar,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const testimonials = [
    {
      id: 1,
      text: "New Boston Landscaping did an amazing job with our yard. They were professional, timely, and the results exceeded our expectations. Highly recommend!",
      author: "Sarah Johnson",
    },
    {
      id: 2,
      text: "The team at New Boston Landscaping is exceptional. They transformed our backyard into a beautiful outdoor living space. Very satisfied with their work.",
      author: "Michael Thompson",
    },
    {
      id: 3,
      text: "Great service from start to finish. They were responsive, professional, and delivered exactly what we wanted. Will definitely use them again!",
      author: "Emily Davis",
    },
    {
      id: 4,
      text: "New Boston Landscaping has been maintaining our property for years. They're reliable, thorough, and always do a great job. Very happy with their service.",
      author: "Robert Wilson",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="banner-content">
            <h1>Client Reviews</h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <section className="breadcrumb-section">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Reviews</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="section-header">
              <h2 className="section-title">What our clients say about us</h2>
              <div className="section-divider">
                <span className="divider-line"></span>
                <span className="divider-icon">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </span>
                <span className="divider-line"></span>
              </div>
              <p className="section-subtitle">Real experiences from our satisfied customers</p>
              <div className="more-reviews">
                <a
                  href="https://www.thumbtack.com/ma/ashland/landscaping/landscaping-general-contracting-services"
                  className="more-reviews-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View More Reviews</span>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <FontAwesomeIcon icon={faUserCircle} />
                      </div>
                      <div className="author-info">
                        <span className="author-name">{testimonial.author}</span>
                        <div className="rating">
                          {[...Array(5)].map((_, index) => (
                            <FontAwesomeIcon
                              key={index}
                              icon={faStar}
                              className={index < 5 ? "star-filled" : "star-empty"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-box">
            <div className="form-header">
              <h4 className="form-title">Share Your Experience</h4>
              <div className="form-divider">
                <span className="divider-line"></span>
                <span className="divider-icon">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </span>
                <span className="divider-line"></span>
              </div>
              <p className="form-subtitle">We value your feedback and would love to hear about your experience with our services</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <div className="input-group">
                    <span className="input-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <div className="input-group">
                    <span className="input-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <div className="input-group">
                    <span className="input-icon">
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </span>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Share your experience with us"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-button">
                    <span>Submit Review</span>
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                  </button>
                  <button type="reset" className="reset-button" onClick={handleReset}>
                    <span>Clear Form</span>
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                  </button>
                </div>
              </div>
            </form>
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
          color: #28a745;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .breadcrumb li a:hover {
          color: #218838;
          text-decoration: underline;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .testimonials-section {
          padding: 6rem 0;
          background-color: #f8f9fa;
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(40, 167, 69, 0.05) 0%, rgba(40, 167, 69, 0) 100%);
          pointer-events: none;
        }

        .testimonials-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #212529;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          margin-bottom: 2rem;
          font-weight: 400;
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
          position: relative;
        }

        .divider-line::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #28a745, transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .divider-icon {
          color: #28a745;
          font-size: 1.5rem;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .more-reviews {
          margin-top: 2rem;
        }

        .more-reviews-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background-color: #28a745;
          color: white;
          text-decoration: none;
          border-radius: 2rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(40, 167, 69, 0.2);
        }

        .more-reviews-button:hover {
          background-color: #218838;
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(40, 167, 69, 0.3);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        .testimonial-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #28a745, #20c997);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .testimonial-card:hover::before {
          opacity: 1;
        }

        .testimonial-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .quote-icon {
          color: #28a745;
          font-size: 2rem;
          margin-bottom: 1rem;
          opacity: 0.2;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover .quote-icon {
          opacity: 0.4;
          transform: scale(1.1);
        }

        .testimonial-text {
          color: #495057;
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 2rem;
          font-style: italic;
          flex-grow: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          background: #e9ecef;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #28a745;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover .author-avatar {
          background: #28a745;
          color: white;
          transform: rotate(360deg);
        }

        .author-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .author-name {
          font-weight: 600;
          color: #212529;
          transition: color 0.3s ease;
        }

        .testimonial-card:hover .author-name {
          color: #28a745;
        }

        .rating {
          display: flex;
          gap: 0.25rem;
        }

        .star-filled {
          color: #ffc107;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover .star-filled {
          transform: scale(1.2);
        }

        .star-empty {
          color: #e9ecef;
          font-size: 0.875rem;
        }

        .contact-form-section {
          padding: 6rem 0;
          background-color: #f8f9fa;
          position: relative;
          overflow: hidden;
        }

        .contact-form-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(40, 167, 69, 0.05) 0%, rgba(40, 167, 69, 0) 100%);
          pointer-events: none;
        }

        .contact-form-box {
          background-color: white;
          border-radius: 1rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          padding: 3rem;
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }

        .form-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: #212529;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          margin-top: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .form-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .form-row {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-group {
          width: 100%;
        }

        .form-label {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          color: #495057;
          margin-bottom: 0.5rem;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: #28a745;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .form-control {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          font-size: 1rem;
          line-height: 1.5;
          color: #495057;
          background-color: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          border-color: #28a745;
          outline: none;
          box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
        }

        .form-control:focus + .input-icon {
          color: #28a745;
          transform: scale(1.1);
        }

        textarea.form-control {
          min-height: 150px;
          resize: vertical;
        }

        .form-actions {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .submit-button,
        .reset-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          border: none;
          border-radius: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 180px;
          justify-content: center;
        }

        .submit-button {
          background-color: #28a745;
          color: white;
          box-shadow: 0 4px 6px rgba(40, 167, 69, 0.2);
        }

        .submit-button:hover {
          background-color: #218838;
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(40, 167, 69, 0.3);
        }

        .reset-button {
          background-color: #6c757d;
          color: white;
          box-shadow: 0 4px 6px rgba(108, 117, 125, 0.2);
        }

        .reset-button:hover {
          background-color: #5a6268;
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(108, 117, 125, 0.3);
        }

        @media (max-width: 768px) {
          .contact-form-section {
            padding: 4rem 0;
          }

          .contact-form-box {
            padding: 2rem;
            margin: 0 1rem;
          }

          .form-title {
            font-size: 1.75rem;
          }

          .form-subtitle {
            font-size: 1rem;
          }

          .form-actions {
            flex-direction: column;
            gap: 1rem;
          }

          .submit-button,
          .reset-button {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
};

export default Reviews;
