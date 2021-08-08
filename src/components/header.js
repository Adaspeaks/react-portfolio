import React from 'react';
import './css/header.css';

function Header({ currentPage, handlePageChange }) {
    return(
        <header>
        <nav>
            <div className="nav-wrapper blue darken-4">
              <a href="#about" className="brand-logo">Johnny Brown</a>
              <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className={currentPage === "About" ? "active" : ""}>
                    <a 
                    href="#about" 
                    onClick={() => handlePageChange("About")}>
                    About Me
                    </a>
                </li>
                <li className={currentPage === "Portfolio" ? "active" : ""}>
                    <a 
                    href="#portfolio" 
                    onClick={() => handlePageChange("Portfolio")}>
                    Porfolio
                    </a>
                </li>
                <li className={currentPage === "Contact" ? "active" : ""}>
                    <a 
                    href="#contact" 
                    onClick={() => handlePageChange("Contact")}>
                    Contact Me
                    </a>
                </li>
              </ul>

              <ul id="mobile-demo" className="sidenav">
                <li className={currentPage === "About" ? "active" : ""}>
                    <a 
                    href="#about" 
                    onClick={() => handlePageChange("About")}>
                    About Me
                    </a>
                </li>
                <li className={currentPage === "Portfolio" ? "active" : ""}>
                    <a 
                    href="#portfolio" 
                    onClick={() => handlePageChange("Portfolio")}>
                    Porfolio
                    </a>
                </li>
                <li className={currentPage === "Contact" ? "active" : ""}>
                    <a 
                    href="#contact" 
                    onClick={() => handlePageChange("Contact")}>
                    Contact Me
                    </a>
                </li>
              </ul>
            </div>
        </nav>
    </header>
    )
}

export default Header;