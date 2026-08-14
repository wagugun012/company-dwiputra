import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../bc-4.png"; // ✅ TAMBAHKAN IMPORT HeroImage
import { kelasTerbaru, Product  } from "../index"; // ✅ TAMBAHKAN IMPORT semuaKelas dan faq
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();
  
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box hero-row d-flex align-items-center pt-lg-5">
            <Col lg="6" className="hero-content">
              <h1 className="highlight-text animate__animated animate__fadeInUp animate__delay-1s">
                Temukan Bahan <br />
                <span className="nowrap">Yang Di Butuhkan</span>
              </h1>
              <p className="mb-4 lead animate__animated animate__fadeInUp animate__delay-1s">
                Dwi Putra Jaya menyediakan berbagai kertas bahan berkualitas
                tinggi untuk memenuhi kebutuhan percetakan dan kemasan Anda.
              </p>
              <div className="button-group d-flex flex-column flex-lg-row">
                <button
                  className="btn btn-primary btn-lg rounded-pill me-lg-3 mb-3 mb-lg-0 animate__animated animate__fadeInUp animate__delay-2s"
                  onClick={() => navigate("/kelas")}
                >
                  <i className="fas fa-box-open me-2"></i> Lihat Bahan Kertas
                </button>
                <button
                  className="btn btn-outline-primary btn-lg rounded-pill animate__animated animate__fadeInUp animate__delay-2s"
                  onClick={() => navigate("/faq")}
                >
                  <i className="fas fa-users me-2"></i> Lihat Produksi
                </button>
              </div>

              {/* Trust Badges */}
              <div className="trust-badges-wrapper mt-4 animate__animated animate__fadeInUp animate__delay-3s">
                <div className="trust-badges">
                  <div className="trust-badge left-badge">
                    <div className="badge-content">
                      <i className="fas fa-check-circle badge-icon text-success"></i>
                      <span className="badge-text">Bahan Berkualitas</span>
                    </div>
                  </div>
                  <div className="trust-badge right-badge">
                    <div className="badge-content">
                      <i className="fas fa-shipping-fast badge-icon text-success"></i>
                      <span className="badge-text">Pengiriman Cepat</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="6" className="hero-image pt-lg-0 pt-5">
              <div className="image-container position-relative">
                <img
                  src={HeroImage}
                  alt="Kertas bahan berkualitas"
                  className="img-fluid rounded-3 shadow-lg animate__animated animate__fadeInRight"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Section - Best Seller Products */}
      <section className="products-section py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <div className="section-header text-center">
                <h2 className="section-title fw-bold">
                  Kertas Bahan Banyak Terjual
                </h2>
                <p className="section-subtitle">
                  Berbagai jenis kertas bahan kebutuhan percetakan, untuk pemesanan hubungi kami dengan klik tombol tanyakan lebih lanjut
                </p>
              </div>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            {kelasTerbaru.slice(0, 4).map(
              (kelas) => (
                <Col
                  key={kelas.id}
                  xl={3}
                  lg={6}
                  md={6}
                  sm={12}
                  className="mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                >
                  <div className="product-card">
                    <div className="tilt">
                      <div className="img">
                        <img src={kelas.image} alt={kelas.title} />
                        {kelas.badge && (
                          <div className={`badge ${kelas.badge.toLowerCase().replace(' ', '-')}`}>
                            {kelas.badge}
                          </div>
                        )}
                        <div className="product-badge">{kelas.label}</div>
                      </div>
                    </div>
                    <div className="info">
                      <div className="cat">
                        {kelas.category || "Kertas Bahan"}
                      </div>
                      <h2 className="title">{kelas.title}</h2>
                      <p className="desc">
                        {kelas.desk || "Kertas bahan berkualitas tinggi untuk berbagai kebutuhan percetakan dan kemasan."}
                      </p>

                      <div className="specs">
                        {kelas.specs ? (
                          kelas.specs.map((spec, idx) => (
                            <div key={idx} className="spec-item">
                              <i className={spec.icon}></i>
                              <span>{spec.text}</span>
                            </div>
                          ))
                        ) : (
                          <>
                            <div className="spec-item">
                              <i className="fas fa-weight"></i>
                              <span>{kelas.gram}</span>
                            </div>
                            <div className="spec-item">
                              <i className="fas fa-ruler-combined"></i>
                              <span>{kelas.ukuran}</span>
                            </div>
                            <div className="spec-item">
                              <i className="fas fa-palette"></i>
                              <span>{kelas.warna}</span>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="feats">
                        {kelas.features ? (
                          kelas.features.map((feat, idx) => (
                            <span key={idx} className="feat">{feat}</span>
                          ))
                        ) : (
                          <>
                            <span className="feat">Premium Quality</span>
                            <span className="feat">Berbagai Ukuran</span>
                          </>
                        )}
                      </div>

                      <div className="bottom">
                        
                        <button 
                          className="btn btn-primary"
                          onClick={() => window.open("https://wa.me/6288211550831", "_blank")}
                        >
                          <span>{kelas.buy}</span>
                          <svg
                            className="icon"
                            width="50"
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

                      <div className="meta">
                        <div className="location mt-1">
                          <div className="location-item">
                            <i className="fas fa-map-marker-alt location-icon"></i>
                            <span className="location-text">BANDUNG TIMUR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ),
            )}
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <button
                className="btn btn-outline-primary btn-lg rounded-pill px-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={() => navigate("/kelas")}
              >
                Lihat Semua Produk <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product Cards Section (Previously FAQ Section) - DIUBAH MENJADI PRODUCT CARD */}
      <section className="featured-products-section py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <div className="section-header text-center">
                <h2 className="section-title fw-bold">Produk Unggulan Kami</h2>
                <p className="section-subtitle">
                  Temukan berbagai jenis kertas bahan berkualitas tinggi untuk semua kebutuhan percetakan Anda
                </p>
              </div>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            { Product && Product.slice(0, 4).map((product) => (
              <Col
                key={product.id}
                xl={3}
                lg={6}
                md={6}
                sm={12}
                className="mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={product.delay}
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
                      {product.category || "Kertas Bahan"}
                    </div>
                    <h2 className="title">{product.title}</h2>
                    <p className="desc">
                      {product.desk || product.description ||
                        "Kertas bahan berkualitas tinggi untuk berbagai kebutuhan percetakan dan kemasan."}
                    </p>

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
                            <i className="fas fa-weight"></i>
                            <span>{product.gram}</span>
                          </div>
                          <div className="spec-item">
                            <i className="fas fa-ruler-combined"></i>
                            <span>{product.ukuran}</span>
                          </div>
                          <div className="spec-item">
                            <i className="fas fa-palette"></i>
                            <span>{product.warna}</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="feats">
                      {product.features ? (
                        product.features.map((feat, idx) => (
                          <span key={idx} className="feat">{feat}</span>
                        ))
                      ) : (
                        <>
                          <span className="feat">Premium Quality</span>
                          <span className="feat">Berbagai Ukuran</span>
                        </>
                      )}
                    </div>

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

                    <div className="meta">
                        <div className="location mt-1">
                          <div className="location-item">
                            <i className="fas fa-map-marker-alt location-icon"></i>
                            <span className="location-text">BANDUNG TIMUR</span>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <button
                className="btn btn-primary btn-lg rounded-pill px-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={() => navigate("/kelas")}
              >
                Lihat Semua Produk <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;