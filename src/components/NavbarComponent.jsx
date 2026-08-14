import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import PerusImage from "../assets/img/perus-3.png";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    const scrollY = window.scrollY;
    setChangeColor(scrollY > 10);
    setScrolled(scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6288211550831", "_blank");
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar${changeColor ? " color-active" : ""}${expanded ? " expanded" : ""}${scrolled ? " scrolled" : ""}`}
      fixed="top"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          <div className="brand-container">
            <img
              src={PerusImage}
              alt="Dwi Putra Jaya Logo"
              className="navbar-logo"
            />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="navbar-nav mx-auto">
            {navLinks.map((link) => (
              <Nav.Link
                as={NavLink}
                to={link.path}
                key={link.id}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
                end
                onClick={handleNavClick}
              >
                <i className={`nav-icon ${link.icon}`}></i>
                {link.text}
                <span className="nav-link-underline"></span>
              </Nav.Link>
            ))}
          </Nav>

          <div className="navbar-actions">
            <button
              className="btn btn-success btn-cta"
              onClick={handleWhatsAppClick}
            >
              <i className="fas fa-paper-plane me-2"></i>
              Pesan via WhatsApp
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
