import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';

const Layout = (props) => {
  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <Image
              src="/img/me.jpeg"
              alt="me"
              width={100}
              height={100}
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">Sirisak Chantanate</h1>
            <div className="social-links mt4 text-center">
              <a href="https://www.instagram.com/neutronix/" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/sirisak-chantanate-b0b786111/" className="linkedin"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/openmymai" className="linkedin"><i className="bi bi-github"></i></a>
            </div>
          </div>

          <div id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto"><i className="bi bi-house"></i><span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bi bi-person"></i><span>About</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bi bi-file-earmark-text"></i><span>Resume</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bi bi-journal-text"></i><span>Portfolio</span></a></li>
              <li><a href="#services" className="nav-link scrollto"><i className="bi bi-hdd-stack"></i><span>Service</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bi bi-envelope"></i><span>Contact</span></a></li>

            </ul>
          </div>
        </div>
      </header>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;