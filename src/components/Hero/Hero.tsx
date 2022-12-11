import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      <section className="hero"></section>
      <div className="hero-text">
        <p className="level1">
          Looking for <span>Tasty African Dishes</span>{" "}
        </p>
        <p className="level2">for your intimate events?</p>
        <p>
          Trust <span className="level-max golden-text">Classic Events!</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
