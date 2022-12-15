import React from "react";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Services />
    </div>
  );
};

export default App;
