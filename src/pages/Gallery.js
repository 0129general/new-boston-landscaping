// pages/Gallery.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, image: "assets/images/gallery/IMG_1304.jpg", category: "house" },
    { id: 2, image: "assets/images/gallery/IMG_1119.jpeg", category: "house" },
    { id: 3, image: "assets/images/gallery/IMG_1189.jpg", category: "house" },
    { id: 4, image: "assets/images/gallery/IMG_1216.jpg", category: "house" },
    { id: 5, image: "assets/images/gallery/IMG_1239.jpg", category: "house" },
    { id: 6, image: "assets/images/gallery/IMG_1243.jpg", category: "house" },
    { id: 7, image: "assets/images/gallery/IMG_1153.jpeg", category: "house" },
    { id: 8, image: "assets/images/gallery/IMG_1129.jpeg", category: "house" },
    { id: 9, image: "assets/images/gallery/IMG_1116.jpeg", category: "house" },
    { id: 10, image: "assets/images/gallery/IMG_0699.jpeg", category: "house" },
    { id: 11, image: "assets/images/gallery/IMG_0828.jpg", category: "house" },
    { id: 12, image: "assets/images/gallery/IMG_1085.jpg", category: "house" },
    { id: 13, image: "assets/images/gallery/IMG_0983.jpg", category: "house" },
    { id: 14, image: "assets/images/gallery/IMG_0897.jpg", category: "house" },
    { id: 15, image: "assets/images/gallery/IMG_0252.jpg", category: "house" },
    { id: 16, image: "assets/images/gallery/IMG_0411.jpg", category: "house" },
    { id: 17, image: "assets/images/gallery/IMG_0072.jpeg", category: "house" },
    { id: 18, image: "assets/images/gallery/13.jpeg", category: "house" },
    { id: 19, image: "assets/images/gallery/12.jpeg", category: "house" },
    { id: 20, image: "assets/images/gallery/11.jpeg", category: "house" },
    { id: 21, image: "assets/images/gallery/10.jpeg", category: "house" },
    { id: 22, image: "assets/images/gallery/04.jpg", category: "house" },
    { id: 23, image: "assets/images/gallery/08.jpg", category: "house" },
    { id: 24, image: "assets/images/gallery/07.jpg", category: "house" },
    { id: 25, image: "assets/images/gallery/06.jpg", category: "house" },
    { id: 26, image: "assets/images/gallery/09.jpeg", category: "house" },
    { id: 27, image: "assets/images/gallery/03.jpg", category: "house" },
    { id: 28, image: "assets/images/gallery/02.jpg", category: "house" },
    { id: 29, image: "assets/images/gallery/01.jpg", category: "house" },
    { id: 30, image: "assets/images/gallery/001.jpeg", category: "house" },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="banner-content">
            <h1>Our Work</h1>
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
            <li>Gallery</li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-box">
                  <div className="gallery-thumb">
                    <a href={item.image} onClick={(e) => {
                      e.preventDefault();
                      handleImageClick(item);
                    }}>
                      <img src={item.image} alt={`Gallery Item ${item.id}`} />
                    </a>
                    <div className="overlay-box">
                      <div className="overlay-icon">
                        <a href={item.image} onClick={(e) => {
                          e.preventDefault();
                          handleImageClick(item);
                        }}>
                          <FontAwesomeIcon icon={faImage} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage.image} alt="Selected Gallery Item" />
            <button className="close-button" onClick={closeModal}>×</button>
          </div>
        </div>
      )}

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

        .gallery-section {
          padding: 5rem 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .gallery-box {
          padding: 1rem;
        }

        .gallery-thumb {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
        }

        .gallery-thumb img {
          width: 100%;
          height: 270px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover .gallery-thumb img {
          transform: scale(1.1);
        }

        .overlay-box {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .overlay-box {
          opacity: 1;
        }

        .overlay-icon a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background-color: white;
          color: #007bff;
          border-radius: 50%;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .overlay-icon a:hover {
          background-color: #007bff;
          color: white;
          transform: rotate(360deg);
        }

        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }

        .modal-content img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 0.5rem;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 40px;
          height: 40px;
          background-color: white;
          color: #333;
          border: none;
          border-radius: 50%;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background-color: #007bff;
          color: white;
        }

        @media (max-width: 992px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .banner-content h1 {
            font-size: 2rem;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};

export default Gallery;
