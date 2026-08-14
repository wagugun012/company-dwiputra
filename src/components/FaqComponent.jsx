import { Container, Row, Col } from "react-bootstrap";
import { Product } from "../index";

const FaqComponent = () => {
  
  return (
    <div className="homepage featured-products-section py-5">
      <Container>
        {/* Header Section - Sama dengan KelasPage */}
        <Row className="mb-5 pt-5 mt-5">
          <Col>
            <div className="text-center">
              <h1 className="fw-bold display-4 mb-3 animate__animated animate__fadeInUp animate__delay-1s">
                Produk <span className="text-gradient">Terbaik Kami</span>
              </h1>
              <p className="lead text-muted animate__animated animate__fadeInUp animate__delay-1s" style={{ maxWidth: "600px", margin: "0 auto" }}>
                Temukan berbagai jenis kertas bahan berkualitas tinggi dengan 
                harga terbaik untuk kebutuhan bisnis Anda
              </p>
            </div>
          </Col>
        </Row>
        
        {/* Products Grid - Enhanced seperti KelasPage */}
        <Row className="g-4 justify-content-center">
          {Product && Product.slice(0, 4).map((product, index) => (
            <Col
              key={product.id}
              lg={3}
              md={6}
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className="product-card">
                <div className="tilt">
                  <div className="img">
                    <img src={product.image} alt={product.title} />
                    {product.badge && (
                      <div className={`badge ${product.badge.toLowerCase().replace(' ', '-')}`}>
                        {product.badge}
                      </div>
                    )}
                    <div className="product-badge">{product.label}</div>
                  </div>
                </div>
                <div className="info">
                  <div className="cat">
                    <i className="fas fa-tag me-1"></i>
                    {product.category || "Kertas Bahan"}
                  </div>
                  <h2 className="title">{product.title}</h2>
                  <p className="desc">
                    {product.desk || product.description ||
                      "Kertas bahan berkualitas tinggi untuk berbagai kebutuhan percetakan dan kemasan."}
                  </p>

                  {/* Specifications */}
                  <div className="specs">
                    {product.specs ? (
                      product.specs.map((spec, idx) => (
                        <div key={idx} className="spec-item">
                          <i className={spec.icon}></i>
                          <span>{spec.text}</span>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="spec-item">
                          <i className="fas fa-weight-hanging"></i>
                          <span>{product.gram || "70-80 GSM"}</span>
                        </div>
                        <div className="spec-item">
                          <i className="fas fa-ruler-combined"></i>
                          <span>{product.ukuran || "A4 / F4"}</span>
                        </div>
                        <div className="spec-item">
                          <i className="fas fa-palette"></i>
                          <span>{product.warna || "Putih"}</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Features Tags */}
                  <div className="feats">
                    {product.features ? (
                      product.features.map((feat, idx) => (
                        <span key={idx} className="feat">{feat}</span>
                      ))
                    ) : (
                      <>
                        <span className="feat">Kualitas Terbaik</span>
                        <span className="feat">Harga Terbaik</span>
                      </>
                    )}
                  </div>

                  {/* Price & Button */}
                  <div className="bottom">
                      <button 
                        className="btn btn-primary"
                        onClick={() => window.open("https://wa.me/6288211550831", "_blank")}
                      >
                        <span>{product.buy || "Tanyakan Lebih Lanjut"}</span>
                        <svg
                          className="icon"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                      </button>
                    </div>

                  {/* Meta Info - Location, Rating, Stock */}
                  <div className="meta">
                    <div className="location">
                      <div className="location-item">
                        <i className="fas fa-map-marker-alt location-icon"></i>
                        <span className="location-text">Bandung Timur</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;