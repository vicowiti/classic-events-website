import React, { useRef } from "react";
import "./NavBar.css";

const NavBar = () => {
  const NavRef = useRef<HTMLBaseElement>(null);

  const showNavbar = () => {
    NavRef.current?.classList.toggle("responsive-nav");
  };
  return (
    <header>
      <h1>Logo</h1>

      <nav ref={NavRef}>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button onClick={showNavbar} className="nav-btn nav-close-btn">
          x
        </button>
      </nav>
      <button onClick={showNavbar} className="nav-btn">
        ///
      </button>
    </header>
  );
};

export default NavBar;
