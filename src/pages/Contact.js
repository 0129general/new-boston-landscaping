// pages/Contact.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPencilAlt, faAngleDoubleRight, faPhone, faMapMarker, faAddressCard, faMapMarkerAlt, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  // Google Maps integration
  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Initialize map function
    window.initMap = function() {
      const mapOptions = {
        center: { lat: 42.2668, lng: -71.4634 }, // Ashland, Massachusetts coordinates
        zoom: 14,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9c9c9" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }]
          }
        ]
      };

      const map = new window.google.maps.Map(document.getElementById("gmap_canvas"), mapOptions);

      const marker = new window.google.maps.Marker({
        position: { lat: 42.2668, lng: -71.4634 },
        map: map,
        title: "New Boston Landscaping",
        animation: window.google.maps.Animation.DROP
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="map-info-window">
            <h3>New Boston Landscaping</h3>
            <p>Ashland, Massachusetts</p>
            <a href="https://www.google.com/maps?q=Ashland,+Massachusetts" target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </div>
        `
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    };

    return () => {
      // Cleanup
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return (
    <main>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="banner-content">
            <h1>Contact Us</h1>
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
            <li>Contact</li>
          </ul>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content-section">
        <div className="container">
          <div className="content-rows">
            {/* Location Row */}
            <div className="content-row location-row">
              <section className="content-section location-section">
                <div className="section-header">
                  <div className="header-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div className="decoration-line"></div>
                  </div>
                  <h2 className="section-title">Our Location</h2>
                  <div className="separator">
                    <span className="separator-line"></span>
                    <span className="separator-line"></span>
                  </div>
                  <p className="section-subtitle">Find us in Ashland, Massachusetts</p>
                </div>

                <div className="section-content">
                  <div className="map-container">
                    <div className="map-wrapper">
                      <div id="gmap_canvas" className="google-map"></div>
                      <div className="map-overlay">
                        <div className="overlay-content">
                          <div className="location-icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                          </div>
                          <div className="location-info">
                            <h5 className="location-title">New Boston Landscaping</h5>
                            <p className="location-address">Ashland, Massachusetts</p>
                            <a
                              href="https://www.google.com/maps?q=Ashland,+Massachusetts"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="directions-link"
                            >
                              <span>Get Directions</span>
                              <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Contact Form Row */}
            <div className="content-row form-row">
              <section className="content-section form-section">
                <div className="section-header">
                  <div className="header-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="decoration-line"></div>
                  </div>
                  <h2 className="section-title">Contact Form</h2>
                  <p className="section-subtitle">Send us a message and we'll get back to you</p>
                </div>

                <div className="section-content">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
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
                            placeholder="Enter your message"
                            rows="4"
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-actions">
                        <button type="submit" className="submit-button">
                          <span>Send Message</span>
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
              </section>
            </div>

            {/* Contact Details Row */}
            <div className="content-row details-row">
              <section className="content-section details-section">
                <div className="section-header">
                  <div className="header-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-icon">
                      <FontAwesomeIcon icon={faAddressCard} />
                    </div>
                    <div className="decoration-line"></div>
                  </div>
                  <h2 className="section-title">Contact Details</h2>
                  <p className="section-subtitle">Get in touch with us through any of these channels</p>
                </div>

                <div className="section-content">
                  <div className="contact-info-grid">
                    <div className="contact-info-card">
                      <div className="card-content">
                        <div className="icon-wrapper">
                          <div className="icon-circle">
                            <FontAwesomeIcon icon={faPhone} />
                          </div>
                        </div>
                        <div className="info-content">
                          <h5 className="info-title">Phone</h5>
                          <p className="info-text">
                            <a href="tel:6177631191" className="contact-link">
                              <span>617 763 1191</span>
                              <FontAwesomeIcon icon={faPhone} className="link-icon" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="contact-info-card">
                      <div className="card-content">
                        <div className="icon-wrapper">
                          <div className="icon-circle">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </div>
                        </div>
                        <div className="info-content">
                          <h5 className="info-title">Email</h5>
                          <p className="info-text">
                            <a href="mailto:newbostonlandscaping@gmail.com" className="contact-link">
                              <span>newbostonlandscaping@gmail.com</span>
                              <FontAwesomeIcon icon={faEnvelope} className="link-icon" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="contact-info-card">
                      <div className="card-content">
                        <div className="icon-wrapper">
                          <div className="icon-circle">
                            <FontAwesomeIcon icon={faMapMarker} />
                          </div>
                        </div>
                        <div className="info-content">
                          <h5 className="info-title">Address</h5>
                          <p className="info-text">
                            <span>Ashland, Massachusetts</span>
                            <FontAwesomeIcon icon={faMapMarker} className="link-icon" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
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

        .main-content-section {
          padding: 4rem 0;
          background-color: #f8f9fa;
          position: relative;
          overflow: hidden;
        }

        .main-content-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('assets/images/background/pattern.png');
          background-size: 200px;
          opacity: 0.05;
          pointer-events: none;
        }

        .content-rows {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .content-row {
          position: relative;
          z-index: 1;
        }

        .content-row::after {
          content: "";
          position: absolute;
          bottom: -2rem;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(40, 167, 69, 0.3), transparent);
        }

        .content-row:last-child::after {
          display: none;
        }

        .content-section {
          margin-bottom: 0;
          position: relative;
          background-color: white;
          border-radius: 1.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          z-index: 1;
        }

        .content-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #28a745, #20c997, #28a745);
          background-size: 200% 100%;
          animation: gradient-shift 3s ease infinite;
        }

        .content-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
        }

        .location-row .content-section {
          max-width: 1000px;
          margin: 0 auto;
        }

        .form-row .content-section {
          max-width: 800px;
          margin: 0 auto;
        }

        .details-row .content-section {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          padding: 3rem 3rem 2rem;
          position: relative;
          background: linear-gradient(135deg, rgba(40, 167, 69, 0.05) 0%, rgba(40, 167, 69, 0) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 600px;
          margin: 0 auto;
          overflow: hidden;
        }

        .section-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(40, 167, 69, 0.1) 0%, transparent 70%);
          animation: pulse-bg 4s ease-in-out infinite;
          z-index: 0;
        }

        .header-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .decoration-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #28a745, transparent);
          position: relative;
          animation: shimmer 2s infinite;
        }

        .decoration-icon {
          color: #28a745;
          font-size: 1.75rem;
          animation: pulse 2s infinite;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(40, 167, 69, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.4);
        }

        .content-section:hover .decoration-icon {
          transform: rotate(360deg);
          background-color: rgba(40, 167, 69, 0.2);
          box-shadow: 0 0 20px rgba(40, 167, 69, 0.4);
        }

        .separator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 1.5rem 0;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .separator-line {
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #28a745, transparent);
          border-radius: 3px;
          animation: shimmer 2s infinite;
          position: relative;
          overflow: hidden;
        }

        .separator-line::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          animation: shine 3s infinite;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #212529;
          margin-bottom: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          display: inline-block;
          text-align: center;
          width: 100%;
          padding: 0 1rem;
          z-index: 1;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .section-title::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #28a745, transparent);
          border-radius: 3px;
          animation: shimmer 2s infinite;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          margin-top: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          width: 100%;
          position: relative;
          padding: 0 1rem;
          z-index: 1;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .section-content {
          padding: 0 3rem 3rem;
        }

        .location-section .section-content {
          padding-bottom: 4rem;
        }

        .form-section .section-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .details-section .section-content {
          padding: 2rem 3rem 4rem;
        }

        .map-container {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .map-container:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .map-wrapper {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .google-map {
          width: 100%;
          height: 500px;
          border: none;
          position: relative;
        }

        .map-overlay {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          max-width: 300px;
        }

        .map-wrapper:hover .map-overlay {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .overlay-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .location-icon {
          width: 50px;
          height: 50px;
          background: #28a745;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .map-wrapper:hover .location-icon {
          transform: rotate(360deg);
        }

        .location-info {
          flex-grow: 1;
        }

        .location-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #212529;
          margin: 0 0 0.5rem 0;
        }

        .location-address {
          font-size: 1rem;
          color: #6c757d;
          margin: 0 0 1rem 0;
        }

        .directions-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #28a745;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }

        .directions-link:hover {
          color: #218838;
          background-color: rgba(40, 167, 69, 0.1);
        }

        .directions-link .fa-external-link-alt {
          font-size: 0.875rem;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .directions-link:hover .fa-external-link-alt {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-form {
          background-color: white;
          border-radius: 1rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .contact-form:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .form-row {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          width: 100%;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 15px;
          color: #28a745;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .form-control {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          font-size: 1rem;
          line-height: 1.5;
          color: #495057;
          background-color: #f8f9fa;
          border: 1px solid #ced4da;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          border-color: #28a745;
          outline: 0;
          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
        }

        .form-control:focus + .input-icon {
          color: #218838;
          transform: scale(1.2);
        }

        textarea.form-control {
          min-height: 120px;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 1rem;
        }

        .submit-button,
        .reset-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 150px;
          justify-content: center;
        }

        .submit-button {
          background: linear-gradient(135deg, #28a745, #218838);
          color: white;
          box-shadow: 0 4px 10px rgba(40, 167, 69, 0.3);
        }

        .submit-button:hover {
          background: linear-gradient(135deg, #218838, #1e7e34);
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(40, 167, 69, 0.4);
        }

        .reset-button {
          background: linear-gradient(135deg, #6c757d, #5a6268);
          color: white;
          box-shadow: 0 4px 10px rgba(108, 117, 125, 0.3);
        }

        .reset-button:hover {
          background: linear-gradient(135deg, #5a6268, #545b62);
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(108, 117, 125, 0.4);
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-info-card {
          text-align: center;
          transition: transform 0.3s ease;
          position: relative;
        }

        .contact-info-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(40, 167, 69, 0.05) 0%, rgba(40, 167, 69, 0) 100%);
          border-radius: 1rem;
          z-index: -1;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-10px);
        }

        .contact-info-card:hover::before {
          background: linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(40, 167, 69, 0) 100%);
        }

        .icon-wrapper {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background-color: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: transform 0.3s ease;
          position: relative;
        }

        .icon-wrapper::before {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          background: linear-gradient(135deg, #28a745, #20c997);
          z-index: -1;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover .icon-wrapper {
          transform: rotate(360deg);
        }

        .contact-info-card:hover .icon-wrapper::before {
          opacity: 0.5;
        }

        .icon-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #28a745, #218838);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
          transition: all 0.3s ease;
        }

        .contact-info-card:hover .icon-circle {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
        }

        .info-content {
          text-align: center;
        }

        .info-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #212529;
          position: relative;
          display: inline-block;
        }

        .info-title::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 2px;
          background-color: #28a745;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover .info-title::after {
          width: 50px;
        }

        .info-text {
          margin: 0;
          color: #6c757d;
          font-size: 1.1rem;
        }

        .contact-link {
          color: #28a745;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }

        .contact-link:hover {
          color: #218838;
          background-color: rgba(40, 167, 69, 0.1);
        }

        .link-icon {
          font-size: 1rem;
          transition: transform 0.3s ease;
        }

        .contact-link:hover .link-icon {
          transform: translateX(5px);
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse-bg {
          0% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          20% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes shimmer {
          0% {
            opacity: 0.5;
            transform: scaleX(0.8);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.1);
          }
          100% {
            opacity: 0.5;
            transform: scaleX(0.8);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.4);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 0 10px rgba(40, 167, 69, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
          }
        }

        @media (max-width: 992px) {
          .content-rows {
            gap: 3rem;
          }
          
          .contact-info-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .main-content-section {
            padding: 3rem 0;
          }

          .content-rows {
            gap: 2.5rem;
          }

          .content-section {
            margin-bottom: 0;
          }

          .section-header {
            padding: 2rem 2rem 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
          }

          .section-content {
            padding: 0 2rem 2rem;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .icon-wrapper {
            width: 100px;
            height: 100px;
          }

          .icon-circle {
            width: 80px;
            height: 80px;
            font-size: 2rem;
          }

          .form-actions {
            flex-direction: column;
          }

          .submit-button,
          .reset-button {
            width: 100%;
          }
        }

        .map-info-window {
          padding: 1rem;
          max-width: 200px;
        }

        .map-info-window h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #212529;
          margin: 0 0 0.5rem 0;
        }

        .map-info-window p {
          font-size: 0.9rem;
          color: #6c757d;
          margin: 0 0 1rem 0;
        }

        .map-info-window a {
          display: inline-block;
          color: #28a745;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .map-info-window a:hover {
          color: #218838;
        }
      `}</style>
    </main>
  );
};

export default Contact;
