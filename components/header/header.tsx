"use client";

import Image from "next/image";

import "./header.scss";

const Header = () => {
  const toggleExpandClass = () => {
    const navLinksContainer = document.getElementById("nav-links-container");
    navLinksContainer?.classList.toggle("expanded");
  };

  return (
    <>
      <header className="header-container">
        <nav className="navbar-container">
          <button
            id="nav-menu-btn"
            className="navbar-menu-btn"
            onClick={toggleExpandClass}
          >
            <Image
              src="/assets/menu.png"
              alt="menu"
              className="menu-img"
              width={40}
              height={40}
            />
          </button>
          <div className="navbar-left-container">
            <Image
              src="/assets/lync-white.png"
              alt="Lync"
              className="lync-navbar"
              width={40}
              height={40}
            />
            <div id="nav-links-container" className="navbar-links-container">
              <a href="/" className="navbar-links">
                Home
              </a>
              <a
                href="https://docs.lync.world/"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-links"
              >
                Documentation
              </a>
              <a
                href="https://lyncworld.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-links"
              >
                Blogs
              </a>
              <a
                href="https://lync.world/"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-links"
              >
                LYNC Portal
              </a>
              <a
                href="http://request-demo.lync.world/"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-links"
              >
                Request a demo
              </a>
              <button
                id="close-btn"
                className="navbar-links close-btn"
                onClick={toggleExpandClass}
              >
                Close
              </button>
            </div>
          </div>
          <a
            href="https://lync.world/form.html"
            target="_blank"
            className="navbar-cta-btn"
            rel="noopener noreferrer"
          >
            Get Started
            <Image
              src="/assets/right-arrow.svg"
              alt="right-arrow"
              width={20}
              height={20}
            />
          </a>
        </nav>
      </header>

      <div className="header-gradient-container"></div>
    </>
  );
};
export default Header;
