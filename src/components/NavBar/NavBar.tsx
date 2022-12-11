import React, { useRef } from "react";
import "./NavBar.css";
import Logo from "../../assets/logo.jpg";
import NavLink from "../NavLink/NavLink";

const NavBar = () => {
  const NavRef = useRef<HTMLBaseElement>(null);

  const showNavbar = () => {
    NavRef.current?.classList.toggle("responsive-nav");
  };
  return (
    <header>
      <section className="logo-section">
        <img
          src={Logo}
          width="50px"
          height="auto"
          className="logo"
          alt="logo"
        />
      </section>

      <nav ref={NavRef}>
        <NavLink id="hero" text="Home" currentRef={NavRef} />
        <NavLink id="shop" text="Shop" currentRef={NavRef} />
        <NavLink id="about" text="About" currentRef={NavRef} />
        <NavLink id="contact" text="Contact" currentRef={NavRef} />

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
