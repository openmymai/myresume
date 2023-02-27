import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Layout = (props) => {
  const [ navbarOpen, setNavbarOpen ] = useState(false);
  const [ scroll, setScroll ] = useState(false);

  const ref = useRef();
  
  useEffect(() => {
    document.body.className = !navbarOpen ? '' : 'mobile-nav-active';
  }, [navbarOpen]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100);
    });
  },[]);

  return (
    <div>

        {!navbarOpen ? (
          <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={() => setNavbarOpen((prev) => !prev)}></i>
        ) : (
          <i className="bi bi-x mobile-nav-toggle d-xl-none" onClick={() => setNavbarOpen((prev) => !prev)}></i>
        )}

      
      <header id="header" ref={ref} onClick={() => setNavbarOpen((prev) => !prev)}>
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
              <li><a href="#hero" className="nav-link"><i className="bi bi-house"></i><span>Home</span></a></li>
              <li><a href="#about" className="nav-link"><i className="bi bi-person"></i><span>About</span></a></li>
              <li><a href="#resume" className="nav-link"><i className="bi bi-file-earmark-text"></i><span>Resume</span></a></li>
              <li><a href="#portfolio" className="nav-link"><i className="bi bi-journal-text"></i><span>Portfolio</span></a></li>
              <li><a href="#services" className="nav-link"><i className="bi bi-hdd-stack"></i><span>Service</span></a></li>
              <li><a href="#contact" className="nav-link"><i className="bi bi-envelope"></i><span>Contact</span></a></li>
            </ul>
          </div>
        </div>
      </header>
      <div>
        {props.children}
      </div>
      <a href="#" className={`back-to-top d-flex align-items-center justify-content-center${scroll ? ' active' : ''}`}><i className="bi bi-arrow-up-short" /></a>
    </div>
  );
}

export default Layout;