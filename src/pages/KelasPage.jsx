import { useState, useMemo } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { semuaKelas } from "../index";

const KelasPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products (tanpa sorting)
  const filteredProducts = useMemo(() => {
    let filtered = semuaKelas.filter((kelas) => {
      // Search filter - perbaikan agar lebih akurat
      const searchLower = searchTerm.toLowerCase();
      const titleMatch = kelas.title?.toLowerCase().includes(searchLower) || false;
      const descMatch = kelas.desk?.toLowerCase().includes(searchLower) || false;
      const categoryMatch = kelas.category?.toLowerCase().includes(searchLower) || false;
      const labelMatch = kelas.label?.toLowerCase().includes(searchLower) || false;

      return titleMatch || descMatch || categoryMatch || labelMatch;
    });

    return filtered;
  }, [searchTerm]);

  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          {/* Header Section - dengan padding top yang lebih besar */}
          <Row className="mb-5 pt-5 mt-5">
            <Col>
              <div className="text-center">
                <h1 className="fw-bold display-4 mb-3 animate__animated animate__fadeInUp animate__delay-1s">
                  Seluruh <span className="text-gradient">Kertas Bahan</span>
                </h1>
                <p className="lead text-muted animate__animated animate__fadeInUp animate__delay-1s" style={{ maxWidth: "600px", margin: "0 auto" }}>
                  Temukan berbagai jenis kertas bahan berkualitas tinggi untuk
                  semua kebutuhan percetakan Anda
                </p>
              </div>
            </Col>
          </Row>

          {/* Search Section - Hanya satu kolom search saja */}
          <Row className="mb-4 justify-content-center">
            <Col lg={6} md={8} sm={10}>
              <div className="search-filter-wrapper">
                <InputGroup className="search-box">
                  <InputGroup.Text>
                    <i className="fas fa-search"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Cari kertas bahan... (contoh: HVS, Book Paper, Stiker)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  {searchTerm && (
                    <button
                      className="btn btn-outline-secondary clear-search"
                      onClick={() => setSearchTerm("")}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </InputGroup>
              </div>
            </Col>
          </Row>

          {/* Results Info - dengan desain lebih baik */}
          <Row className="mb-4">
            <Col>
              <div className="results-info">
                <div className="results-left">
                  <i className="fas fa-chart-line me-2 text-primary"></i>
                  <span className="results-count">
                    Menampilkan <strong>{filteredProducts.length}</strong> dari{" "}
                    <strong>{semuaKelas.length}</strong> kertas bahan
                  </span>
                </div>
                {searchTerm && (
                  <div className="search-term">
                    <i className="fas fa-search me-2"></i>
                    Pencarian: "<strong>{searchTerm}</strong>"
                    <button
                      className="btn-clear-search ms-2"
                      onClick={() => setSearchTerm("")}
                    >
                      <i className="fas fa-times-circle"></i> Hapus
                    </button>
                  </div>
                )}
              </div>
            </Col>
          </Row>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <Row className="g-4 justify-content-center">
              {filteredProducts.map((kelas) => (
                <Col
                  key={kelas.id}
                  lg={4}
                  md={6}
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
                        {kelas.desk ||
                          "Kertas bahan berkualitas tinggi untuk berbagai kebutuhan percetakan dan kemasan."}
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
          ) : (
            /* No Results State - lebih menarik */
            <Row>
              <Col>
                <div className="no-results text-center py-5 my-5">
                  <div className="no-results-icon mb-4">
                    <i className="fas fa-search fa-4x text-muted"></i>
                  </div>
                  <h4 className="text-muted mb-3">Produk tidak ditemukan</h4>
                  <p className="text-muted mb-4">
                    Maaf, tidak ada produk yang sesuai dengan pencarian "<strong>{searchTerm}</strong>"
                  </p>
                  <div className="suggestions mb-4">
                    <p className="small text-muted">Saran:</p>
                    <div className="suggestion-chips">
                      <button 
                        className="suggestion-chip"
                        onClick={() => setSearchTerm("HVS")}
                      >
                        HVS
                      </button>
                      <button 
                        className="suggestion-chip"
                        onClick={() => setSearchTerm("Book Paper")}
                      >
                        Book Paper
                      </button>
                      <button 
                        className="suggestion-chip"
                        onClick={() => setSearchTerm("Stiker")}
                      >
                        Stiker
                      </button>
                      <button 
                        className="suggestion-chip"
                        onClick={() => setSearchTerm("Koran")}
                      >
                        Kertas Koran
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-lg rounded-pill px-5"
                    onClick={() => {
                      setSearchTerm("");
                    }}
                  >
                    <i className="fas fa-redo me-2"></i>
                    Tampilkan Semua Produk
                  </button>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </div>
  );
};

export default KelasPage;