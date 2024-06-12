import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../images/Logo.svg";
import MenuIcon from "../../images/icon_hamburger menu.svg";
import { useLocation, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Menu", link: "/menu" },
    { id: 4, label: "Reservations", link: "/reservations" },
    { id: 5, label: "Order Online", link: "/orders" },
    { id: 6, label: "Login", link: "/login" },
  ];

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" height={50} />
        </Link>
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.link}
                className={`${pathname === link.link ? "link active" : "link"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <img src={MenuIcon} alt="menu-icon" />
      </div>
    </header>
  );
};

export default Navbar;
